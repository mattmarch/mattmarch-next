import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

type PostParams = {
  id: string;
};

export default async ({ params }: { params: PostParams }) => {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const htmlContent = await remark().use(html).process(content);
  const formattedDate = new Date(data.date).toLocaleDateString("en-GB");

  return (
    <div>
      <h1 className="text-2xl">{data.title}</h1>
      <div>Published {formattedDate}</div>
      <article
        className="prose lg:prose-xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent.toString() }}
      />
    </div>
  );
};

const postsDirectory = "posts";

export const generateStaticParams = (): PostParams[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""),
  }));
};

export const dynamicParams = false;
