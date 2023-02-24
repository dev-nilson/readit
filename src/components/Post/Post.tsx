import TimeAgo from "react-timeago";
import Link from "next/link";
import { Orbit } from "@uiball/loaders";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import {
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import Avatar from "../Avatar/Avatar";

type PostProps = {
  post: Post;
};

function Post({ post }: PostProps) {
  if (!post) {
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Orbit size={40} color="#ff4301" />
      </div>
    );
  }

  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex rounded-md border border-gray-300 bg-white hover:border-gray-500 w-full my-4">
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon className="vote-button hover:text-red-500" />
          <p className="text-black font-bold text-xs">0</p>
          <ArrowDownIcon className="vote-button hover:text-blue-500" />
        </div>
        <div className="p-3 pb-1">
          <div className="flex items-center space-x-2">
            <Avatar seed={post.username} />
            <Link href={`/subpost/${post.subposts[0].topic}`}>
              <span className="cursor-pointer font-semibold text-black hover:text-blue-500 hover:underline">
                r/{post.subposts[0].topic}
              </span>
            </Link>
            <span className="text-xs text-gray-400">
              {" "}
              • Posted by {post.username} <TimeAgo date={post.created_at} />
            </span>
          </div>
          <div className="py-4">
            <p className="mt-2 text-md">{post.text}</p>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <div className="post-button">
              <ChatBubbleLeftIcon className="h-6 w-6" />
              <p>{post.comments.length} Comments</p>
            </div>
            <div className="post-button">
              <ShareIcon className="h-6 w-6" />
              <p>Share</p>
            </div>
            <div className="post-button">
              <BookmarkIcon className="h-6 w-6" />
              <p>Save</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
