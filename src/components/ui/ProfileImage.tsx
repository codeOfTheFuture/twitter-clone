import { useSession } from "next-auth/react";
import Image from "next/image";

const DEFAULT_AVATAR = "/images/avatar-placeholder.jpg";

interface Props {
	className: string;
	tweetProfileImage?: string;
}

type ProfileImage = string | null | undefined;

const ProfileImage = ({ className, tweetProfileImage }: Props) => {
	const profileImage: ProfileImage = useSession().data?.user?.image;

	return (
		<div className={`relative rounded-full ${className}`}>
			<Image
				src={tweetProfileImage || profileImage || DEFAULT_AVATAR}
				fill
				alt="avatar"
				className="object-contain rounded-full"
			/>
		</div>
	);
};

export default ProfileImage;
