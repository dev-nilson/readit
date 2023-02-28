import { GET_SUBPOSTS_WITH_LIMIT } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";

function Sidebar() {
  const { data } = useQuery(GET_SUBPOSTS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });
  const subposts: Subpost[] = data?.getSubpostsWithLimit;

  return (
    <div className="sticky top-36 ml-5 mt-9 h-fit hidden min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
      <p className="uppercase text-xs p-3 font-extrabold tracking-widest">
        Popular Categories
      </p>
      <div>
        {subposts?.map((subpost: Subpost, index: number) => (
          <Link href={`/subpost/${subpost.topic}`} key={subpost.id}>
            <div className="flex items-center space-x-2 border-t bg-white px-4 py-2 last:rounded-b">
              <p className="flex-1 truncate text-sm font-semibold">r/{subpost.topic}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
