import TimeAgo from "react-timeago";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import Avatar from "../Avatar/Avatar";

type PostProps = {
  post: Post;
};

function Post({ post }: PostProps) {
  return (
    <div className="flex rounded-md border border-gray-300 bg-white hover:border-gray-500">
      <div className="flex flex-col items-center justify-center space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="vote-button hover:text-red-500" />
        <p className="text-black font-bold text-xs">0</p>
        <ArrowDownIcon className="vote-button hover:text-blue-500" />
      </div>
      <div className="p-3 pb-1">
        <div className="flex items-center space-x-2">
          <Avatar seed={post.username} />
          <span className="cursor-pointer font-semibold text-black hover:text-blue-500 hover:underline">
            r/{post.subposts[0].topic}
          </span>{" "}
          <span className="text-xs text-gray-400">
            {" "}
            • Posted by {post.username} <TimeAgo date={post.created_at} />
          </span>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Post;
