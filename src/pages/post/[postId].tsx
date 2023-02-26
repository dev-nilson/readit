import Avatar from "@/components/Avatar/Avatar";
import Post from "@/components/Post/Post";
import { ADD_COMMENT } from "@/graphql/mutations";
import { GET_POST_BY_ID } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import TimeAgo from "react-timeago";

type FormData = {
  comment: string;
};

function PostPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_ID, "getPosts"],
  });

  const { data } = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const notification = toast.loading("Sending comment...");

    await addComment({
      variables: {
        post_id: router.query.postId,
        username: "Denilson",
        text: data.comment,
      },
    });

    setValue("comment", "");
    toast.success("Comment successfully posted", {
      id: notification,
    });
  };

  const post: Post = data?.getPosts;

  return (
    <div className="mx-auto max-w-5xl">
      <Post post={post} />
      {post && (
        <>
          <div className="-mt-5 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
            <p className="text-sm">Comment as</p>
            <form
              className="flex flex-col max-w-5xl space-y-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <textarea
                {...register("comment")}
                className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
                placeholder="Add a comment"
              />
              <button
                type="submit"
                className="rounded-full bg-orange-600 px-3 py-2 font-semibold text-white disabled:bg-gray-200"
              >
                Comment
              </button>
            </form>
          </div>
          <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10 mb-5">
            <hr className="py-2" />
            {post?.comments.map((comment) => (
              <div
                className="relative flex items-center space-x-2 space-y-5"
                key={comment.id}
              >
                <hr className="absolute top-10 h-14 left-7 z-0 border" />
                <div className="z-50">
                  <Avatar />
                </div>
                <div className="flex flex-col">
                  <p className="py-2 text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">
                      {comment.username}
                    </span>
                    {" • "}
                    <TimeAgo date={comment.created_at} />
                  </p>
                  <p>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
