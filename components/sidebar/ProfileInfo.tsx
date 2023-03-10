import Image from "next/image";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="flex">
      <Image
        src={session?.user?.image!}
        alt="Profile Image"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col mx-2">
        <span className="font-semibold">{session?.user?.name}</span>
        <span>@{session?.user?.name?.split(" ").join("").toLowerCase()}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
