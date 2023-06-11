import { getAllPageIds, getPageData } from "@/lib/posts";

type PostParams = {
  id: string;
};

export default async ({ params }: { params: PostParams }) => {
  const { title, date, contentHtml } = await getPageData(params.id);
  const formattedDate = date.toLocaleDateString();

  return (
    <article className="prose lg:prose-xl dark:prose-invert p-24">
      <h1>{title}</h1>
      <div>Published {formattedDate}</div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export const generateStaticParams = async (): Promise<PostParams[]> => {
  const ids = await getAllPageIds();
  return ids.map((id) => ({ id }));
};

export const dynamicParams = false;
