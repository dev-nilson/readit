import Avatar from "../Avatar/Avatar";

function PostBox() {
  return (
    <form className="sticky top-15 z-50 bg-white border border-gray-300 p-2">
      <div className="flex items-center space-x-3">
        <Avatar seed="" />
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
