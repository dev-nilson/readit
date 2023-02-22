import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/graphql/queries";
import Post from "../Post/Post";

function Feed() {
  const { data, error } = useQuery(GET_POSTS);
  const posts: Post[] = data?.postsList;

  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
