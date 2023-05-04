import { useContext } from "react";
import { DotsHorizontalIcon, PlusIcon } from "@heroicons/react/solid";
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	MailIcon,
	UserIcon,
	HomeIcon,
	UsersIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import SidebarButton from "./SidebarButton";
import ProfileInfo from "./ProfileInfo";
import { ModalContext } from "../../contexts/ModalContext";
import Link from "next/link";

const Sidebar = () => {
	const { data: session } = useSession();
	const { openModal } = useContext(ModalContext);

	return (
		<div className="hidden sm:flex flex-col w-full h-screen sm:col-span-1 xl:col-span-3 justify-between px-2">
			<div className="h-screen lg:w-full flex flex-col justify-between items-center xl:items-end col-span-2 pr-0 xl:pr-8">
				<div className="flex flex-col items-center lg:items-start space-y-2">
					<Link href="/" className="h-12 w-12 m-3 rounded-full cursor-pointer relative">
						<Image
							src="/images/logo-twitter-icon-symbol-0.png"
							alt="Twitter logo"
							fill
							className="object-contain"
						/>
					</Link>
					<SidebarRow Icon={HomeIcon} title="Home" />
					<SidebarRow Icon={HashtagIcon} title="Explore" />
					<SidebarRow Icon={BellIcon} title="Notifications" />
					<SidebarRow Icon={MailIcon} title="Messages" />
					<SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
					<SidebarRow Icon={CollectionIcon} title="Lists" />
					<SidebarRow
						onClick={session ? signOut : signIn}
						Icon={UsersIcon}
						title={session ? "Sign Out" : "Sign In"}
					/>
					<SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

					<SidebarButton
						className="hidden xl:flex justify-center bg-twitter hover:bg-twitterDark hover:shadow-md text-white text-lg font-bold mt-2 w-64 h-14"
						onClick={openModal}
					>
						Tweet
					</SidebarButton>

					<SidebarButton
						className="inline-flex lg:hidden justify-center items-center bg-twitter hover:bg-twitter hover:shadow-md text-white"
						onClick={openModal}
					>
						<PlusIcon className="h-8 w-8" />
					</SidebarButton>
				</div>

				{session && (
					<SidebarButton
						className="hidden xl:flex justify-between items-center text-sm bg-white hover:bg-gray-200 text-gray-500 mb-2 w-64 h-14"
						onClick={() => {}}
					>
						<ProfileInfo />
						<DotsHorizontalIcon className="hidden lg:inline-flex  w-6 h-6" />
					</SidebarButton>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
