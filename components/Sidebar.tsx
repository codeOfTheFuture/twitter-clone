import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/react/outline';
import SidebarRow from "./SidebarRow";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <div className="h-10 w-10 m-3 relative">
        <Image src="/images/logo-twitter-icon-symbol-0.png" alt="Twitter logo" layout="fill" className="absolute" />
      </div>

      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UsersIcon} title="Sign In" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar;