import Image from "next/image";

function Avatar() {
  return (
    <div className="relative h-10 w-10 rounded-full border-gray-300 bg-white">
      <Image
        src={`https://api.dicebear.com/5.x/pixel-art/png?seed=Denilson`}
        fill={true}
        alt=""
      />
    </div>
  );
}

export default Avatar;
