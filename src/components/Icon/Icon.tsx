import Image from "next/image";

type IconProps = {
  seed?: string | null;
  large?: boolean;
};

function Icon({ seed, large }: IconProps) {
  return (
    <div
      className={`relative h-10 w-10 rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        className="rounded-full"
        src={`https://api.dicebear.com/5.x/icons/png?seed=${seed}&backgroundColor=b6e3f4`}
        fill={true}
        alt=""
      />
    </div>
  );
}

export default Icon;
