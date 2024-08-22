import { PostData, getAllPageData } from "@/lib/posts";
import Link from "next/link";

export default async () => {
  const allPosts = await getAllPageData();
  const sortedPosts = allPosts.sort(
    (a, b) => b.date.valueOf() - a.date.valueOf()
  );

  return (
    <article className="min-h-screen md:p-24 p-8 prose lg:prose-xl dark:prose-invert m-auto">
      <h1>Hi, I&apos;m Matt March, welcome to my website.</h1>
      <p>
        I&apos;m a Bristol based senior software engineer currently working at{" "}
        <a href="https://devyce.com/">Devyce</a>. You can find me on:
      </p>
      <ul>
        <li>
          <a href="https://github.com/mattmarch">Github</a>
        </li>
        <li>
          <a rel="me" href="https://mastodon.social/@mattmarch">
            Mastodon
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/matthew-march-a75b21121/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:me@mattmarch.co.uk">Email</a>
        </li>
      </ul>

      <h2>Projects</h2>
      <p>Check out some of the fun side projects I&apos;ve been working on:</p>
      <ul>
        <li>
          <a href="https://lease-or-no-lease.mattmarch.co.uk">
            Lease or no lease
          </a>
          , does your company offer an EV leasing scheme and have you wondered
          how the cost of ownership compares to a 2nd hand petrol car?
          Here&apos;s an easy way to run the numbers!
        </li>
        <li>
          <a href="https://mattmarch.itch.io/rgb-pigs">RGB Pigs</a>, a topdown
          survival game where you must toggle your flashlight&apos;s colour to
          tell friend from foe. Playable in browser and built with{" "}
          <a href="https://godotengine.org/">Godot Engine</a>.
        </li>
      </ul>

      <h2>Blog posts</h2>
      <p>And here are some blog posts I&apos;ve put together:</p>
      <ul className="space-y-10">
        {sortedPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </article>
  );
};

type PostListItemProps = {
  post: PostData;
};

const PostListItem = ({ post: { id, title, date } }: PostListItemProps) => (
  <li className="leading-3">
    <Link href={`posts/${id}`} className="text-xl">
      {title}
    </Link>
    <br />
    {date.toLocaleDateString("en-GB")}
  </li>
);
