import Post from "@/components/Post/Post";
import { GET_POST_BY_ID } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  comment: string;
};

function PostPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  const post: Post = data?.getPosts;

  return (
    <div className="mx-auto max-w-5xl">
      <Post post={post} />
      {post && (
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
      )}
    </div>
  );
}

export default PostPage;
