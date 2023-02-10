import { useForm } from "react-hook-form";
import Avatar from "../Avatar/Avatar";

type Post = {
  advice: string;
  subpost: string;
};

function PostBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Post>();

  return (
    <form className="sticky top-15 z-50 bg-white border border-y-gray-300 p-2">
      <div className="flex items-center space-x-3">
        <Avatar seed="" />
        <input
          {...(register("advice", { required: true }))}
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder="Post a piece of advice"
        />
      </div>
    </form>
  );
}

export default PostBox;
