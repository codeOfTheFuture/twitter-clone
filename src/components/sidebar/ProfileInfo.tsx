import { useSession } from "next-auth/react";
import ProfileImage from "../ui/ProfileImage";

const ProfileInfo = () => {
	const userName = useSession().data?.user?.name;
	const userHandle = useSession().data?.user?.name?.split(" ").join("").toLowerCase();

	return (
		<div className="flex">
			<ProfileImage className="w-12 h-12 lg:w-10 lg:h-10" />

			<div className="hidden lg:flex flex-col mx-2">
				<span className="font-semibold">{userName}</span>
				<span>@{userHandle}</span>
			</div>
		</div>
	);
};

export default ProfileInfo;
