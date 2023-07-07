import { getAllPageIds, getPageData } from "@/lib/posts";

type PostParams = {
  id: string;
};

type Props = { params: PostParams };

export default async ({ params }: Props) => {
  const { title, date, contentHtml } = await getPageData(params.id);
  const formattedDate = date.toLocaleDateString("en-GB");

  return (
    <article className="prose lg:prose-xl dark:prose-invert md:p-24 p-8 m-auto">
      <h1>{title}</h1>
      <div>Published {formattedDate}</div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export const generateMetadata = async ({ params }: Props) => {
  const { title } = await getPageData(params.id);
  return { title };
};

export const generateStaticParams = async (): Promise<PostParams[]> => {
  const ids = await getAllPageIds();
  return ids.map((id) => ({ id }));
};

export const dynamicParams = false;
