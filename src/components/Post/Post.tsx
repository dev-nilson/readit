import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

type PostProps = {
  post: Post;
};

function Post({ post }: PostProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="vote-button hover:text-red-500" />
        <p className="text-black font-bold text-xs">0</p>
        <ArrowDownIcon className="vote-button hover:text-blue-500" />
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Post;
