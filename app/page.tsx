import { PostData, getAllPageData } from "@/lib/posts";
import Link from "next/link";

export default async () => {
  const allPosts = await getAllPageData();
  const sortedPosts = allPosts.sort(
    (a, b) => b.date.valueOf() - a.date.valueOf()
  );

  return (
    <main className="min-h-screen md:p-24 p-8 prose lg:prose-xl dark:prose-invert ">
      <h1>Hi, I&apos;m Matt March, welcome to my website</h1>

      <h2>Recent posts</h2>
      <ul>
        {sortedPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
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
