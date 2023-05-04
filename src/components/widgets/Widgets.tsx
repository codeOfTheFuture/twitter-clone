import React, { FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
	return (
		<div className="mt-5 px-6 hidden md:block col-span-3 w-2/3">
			{/* Search */}
			<div className="flex items-center space-x-2 bg-gray-100 mb-3 p-3 rounded-full">
				<SearchIcon className="h-5 w-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search Twitter"
					className="flex-1 bg-transparent outline-none"
				/>
			</div>

			<TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" noScrollbar autoHeight />
		</div>
	);
};

export default Widgets;
