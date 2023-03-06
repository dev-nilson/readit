import client from "apollo-client";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { useMutation } from "@apollo/client";
import { ADD_POST, ADD_SUBPOST } from "@/graphql/mutations";
import { GET_POSTS, GET_SUBPOST_BY_TOPIC } from "@/graphql/queries";
import Avatar from "../Avatar/Avatar";

type Post = {
  advice: string;
  category: string;
};

type PostBoxProps = {
  subpost?: string;
};

function PostBox({ subpost }: PostBoxProps) {
  const [user] = useAuthState(auth);
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_POSTS, "postsList"],
  });
  const [addSubpost] = useMutation(ADD_SUBPOST);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Post>();

  const onSubmit = handleSubmit(async (data) => {
    const notification = toast.loading("Creating post");

    try {
      const response = await client.query({
        query: GET_SUBPOST_BY_TOPIC,
        variables: {
          topic: subpost || data.category,
        },
      });

      const subpostExists = response.data.getSubpostsByTopic.length > 0;

      if (!subpostExists) {
        const newSubpost = await addSubpost({
          variables: {
            topic: subpost || data.category,
          },
        });

        await addPost({
          variables: {
            text: data.advice,
            username: user?.email,
            subpost_id: newSubpost.data.insertSubpost.id,
          },
        });
      } else {
        await addPost({
          variables: {
            text: data.advice,
            username: user?.email,
            subpost_id: response.data.getSubpostsByTopic[0].id,
          },
        });
      }

      setValue("advice", "");
      setValue("category", "");
      toast.success("New post created", {
        id: notification,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        id: notification,
      });
    }
  });

  return (
    <form
      className="sticky top-14 z-10 bg-white border border-y-gray-300 p-2 rounded-md"
      onSubmit={onSubmit}
    >
      <div className="flex items-center space-x-3 m-1">
        <Avatar seed={user?.email} />
        <input
          {...register("advice", {
            required: true,
            maxLength: 280,
            validate: (value) => {
              return !!value.trim();
            },
          })}
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder={
            subpost
              ? `Post a piece of advice for ${subpost.trim()}`
              : "Post a piece of advice"
          }
        />
        <span className="text-gray-500">
          <span
            className={
              watch("advice")?.length > 280 ? "text-red-500" : "text-green-500"
            }
          >
            {watch("advice")?.length}
          </span>{" "}
          / 280
        </span>
      </div>

      {!!watch("advice") && !subpost && (
        <div className="space-y-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Category</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("category", {
                required: true,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
              type="text"
              placeholder="Select a category"
            />
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="text-sm px-2 text-red-500">
              {errors.advice?.type === "maxLength" && (
                <p>Advice should not exceed 280 characters</p>
              )}
              {errors.advice?.type === "validate" && (
                <p>Advice should be valid</p>
              )}
              {errors.category?.type === "required" && (
                <p>Category is required</p>
              )}
              {errors.category?.type === "validate" && (
                <p>Category should be valid</p>
              )}
            </div>
          )}

          {watch("advice") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2  text-white"
            >
              Post Advice
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
