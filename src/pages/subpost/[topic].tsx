import Avatar from "@/components/Avatar/Avatar";
import Feed from "@/components/Feed/Feed";
import Header from "@/components/Header/Header";
import PostBox from "@/components/PostBox/PostBox";
import { useRouter } from "next/router";

function Subpost() {
  const { query } = useRouter();
  const subpost = query.topic?.toString();

  return (
    <div>
      <div className="h-24 bg-blue-500 p-8 ">
        <div className="-mx-8 mt-10 bg-white">
          <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
            <div className="-mt-7">
              <Avatar large />
            </div>
            <div className="py-2">
              <h1 className="text-2xl font-bold">Advice for {subpost}</h1>
              <p className="text-sm text-gray-400">Made with 💙 by Denilson</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-20">
        <PostBox subpost={subpost} />
        <Feed topic={subpost} />
      </div>
    </div>
  );
}

export default Subpost;
