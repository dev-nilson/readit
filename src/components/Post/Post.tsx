import { useState } from "react";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { Orbit } from "@uiball/loaders";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import {
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@apollo/client";
import { GET_VOTES_BY_POST_ID } from "@/graphql/queries";
import { ADD_VOTE } from "@/graphql/mutations";
import Avatar from "../Avatar/Avatar";

type PostProps = {
  post: Post;
};

function Post({ post }: PostProps) {
  const [user] = useAuthState(auth);
  const [didVote, setDidVote] = useState(false);
  const { data, loading } = useQuery(GET_VOTES_BY_POST_ID, {
    variables: {
      id: post?.id,
    },
  });
  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_VOTES_BY_POST_ID, "getVotes"],
  });

  const upvote = async (isUpvote: boolean) => {
    if (didVote) return;

    await addVote({
      variables: {
        post_id: post.id,
        username: user?.email || "",
        upvote: isUpvote,
      },
    });

    setDidVote(true);
  };

  const displayVotes = () => {
    const votes: Vote[] = data?.getVotes;
    const displayNumber = votes?.reduce(
      (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
      0
    );

    return displayNumber;
  };

  if (!post) {
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Orbit size={40} color="#ff4301" />
      </div>
    );
  }

  return (
    <div className="flex rounded-md border border-gray-300 bg-white hover:border-gray-500 w-full my-4">
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon
          className="vote-button hover:text-blue-500"
          onClick={() => upvote(true)}
        />
        <p className="text-black font-bold text-sm">{displayVotes()}</p>
        <ArrowDownIcon
          className="vote-button hover:text-red-500"
          onClick={() => upvote(false)}
        />
      </div>
      <Link href={`/post/${post.id}`}>
        <div className="p-3 pb-1">
          <div className="flex items-center space-x-2">
            <Avatar seed={post.username} />
            <Link href={`/subpost/${post.subposts[0].topic.trim()}`}>
              <span className="cursor-pointer font-semibold text-black hover:text-blue-500 hover:underline">
                r/{post.subposts[0].topic}
              </span>
            </Link>
            <span className="text-xs text-gray-400">
              {" "}
              • Posted by {post.username} <TimeAgo date={post.created_at} />
            </span>
          </div>
          <div className="py-4 break-all">
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
      </Link>
    </div>
  );
}

export default Post;
