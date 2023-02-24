import Post from "@/components/Post/Post";
import { GET_POST_BY_ID } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const post: Post = data?.getPosts;

  return (
    <div>
      <Post post={post} />
    </div>
  );
}

export default PostPage;
