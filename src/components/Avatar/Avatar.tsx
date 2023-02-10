import Image from "next/image";

type AvatarProps = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: AvatarProps) {
  return (
    <div
      className={`relative h-10 w-10 rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        src={`https://api.dicebear.com/5.x/pixel-art/png?seed=${seed}`}
        fill={true}
        alt=""
      />
    </div>
  );
}

export default Avatar;
