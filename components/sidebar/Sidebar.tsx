import React from "react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
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

const Sidebar: React.FC = () => {
  const { data: session } = useSession();

  console.log("session", session);

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

        <SidebarButton className="bg-twitter text-white text-lg font-bold mt-2">
          Tweet
        </SidebarButton>
      </div>

      <SidebarButton
        className="text-sm bg-white hover:bg-gray-100 text-gray-500 mb-2"
        onClick={() => {}}>
        <div className="relative">
          <Image
            src={session?.user?.image!}
            alt="Profile Image"
            width={40}
            height={40}
            className="absolute top-0 left-0 rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold">{session?.user?.name}</p>
          <p>@{session?.user?.name?.split(" ").join("").toLowerCase()}</p>
        </div>
        <div className="bg-blue-400 w-5 h-5"></div>
      </SidebarButton>
    </div>
  );
};

export default Sidebar;
