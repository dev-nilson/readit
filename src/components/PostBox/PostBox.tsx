import { useForm } from "react-hook-form";
import Avatar from "../Avatar/Avatar";

type Post = {
  advice: string;
  category: string;
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
          {...register("advice", { required: true })}
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder="Post a piece of advice"
        />
      </div>

      {!!watch("advice") && (
        <div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Category</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("category", { required: true })}
              type="text"
              placeholder="Select a category"
            />
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="space-y- p-2 tex-re">
              {errors.advice?.type === "required" && <p>Advice is required</p>}
              {errors.category?.type === "required" && (
                <p>Category is required</p>
              )}
            </div>
          )}

          {!!watch("advice") && (
            <button type="submit" className="w-full rounded-full bg-blue-400 p-2  text-white">
              Post Advice
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
