import Avatar from "../Avatar/Avatar";

function PostBox() {
  return (
    <form>
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder="Post a piece of advice"
        />
      </div>
    </form>
  );
}

export default PostBox;
