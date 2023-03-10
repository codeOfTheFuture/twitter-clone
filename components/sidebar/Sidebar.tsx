import React, { useContext } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
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

const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  const { openModal } = useContext(ModalContext);

  return (
    <div className="flex flex-col h-screen col-span-2 justify-between items-center px-2 md:items-start">
      <div>
        <div className="h-10 w-10 m-3 relative">
          <Image
            src="/images/logo-twitter-icon-symbol-0.png"
            alt="Twitter logo"
            layout="fill"
            className="absolute"
          />
        </div>
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
          className="bg-twitter hover:bg-twitterDark text-white text-lg font-bold mt-2"
          onClick={openModal}>
          Tweet
        </SidebarButton>
      </div>

      <SidebarButton
        className="flex justify-between items-center text-sm bg-white hover:bg-gray-200 text-gray-500 mb-2"
        onClick={() => {}}>
        <ProfileInfo />
        <DotsHorizontalIcon className="w-6 h-6" />
      </SidebarButton>
    </div>
  );
};

export default Sidebar;
