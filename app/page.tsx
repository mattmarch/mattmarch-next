import { PostData, getAllPageData } from "@/lib/posts";
import Link from "next/link";

export default async () => {
  const allPosts = await getAllPageData();
  const sortedPosts = allPosts.sort(
    (a, b) => b.date.valueOf() - a.date.valueOf()
  );

  return (
    <main className="min-h-screen p-24 prose lg:prose-xl dark:prose-invert ">
      <h1>Hi, I'm Matt March, welcome to my website</h1>

      <h2>Recent posts</h2>
      <ul>
        {sortedPosts.map((post) => (
          <PostListItem post={post} />
        ))}
      </ul>
    </main>
  );
};

type PostListItemProps = {
  post: PostData;
};

const PostListItem = ({ post: { id, title, date } }: PostListItemProps) => (
  <li>
    <Link href={`posts/${id}`} className="text-xl">
      {title}
    </Link>
    <br />
    {date.toLocaleDateString()}
  </li>
);
