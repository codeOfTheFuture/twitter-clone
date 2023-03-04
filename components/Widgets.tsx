import React, { FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets: FC = () => {
  return (
    <div className="mt-2 px-5 hidden lg:block col-span-3">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full my-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        // options={{ height: 1000 }}
        noScrollbar
        autoHeight
      />
    </div>
  );
};

export default Widgets;
