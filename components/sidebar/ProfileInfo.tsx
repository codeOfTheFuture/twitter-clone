import Image from "next/image";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
	const { data: session } = useSession();

	return (
		<div className="flex">
			<div className="relative w-12 h-12 lg:w-10 lg:h-10 rounded-full">
				<Image
					src={session?.user?.image!}
					alt="Profile Image"
					className="rounded-full object-contain"
					fill
				/>
			</div>
			<div className="hidden lg:flex flex-col mx-2">
				<span className="font-semibold">{session?.user?.name}</span>
				<span>@{session?.user?.name?.split(" ").join("").toLowerCase()}</span>
			</div>
		</div>
	);
};

export default ProfileInfo;
