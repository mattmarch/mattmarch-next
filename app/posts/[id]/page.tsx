import { getAllPageIds, getPageData } from "@/lib/posts";

type PostParams = { id: string };

type Props = { params: Promise<PostParams> };

export default async (props: Props) => {
  const { id } = await props.params;
  const { title, date, contentHtml } = await getPageData(id);
  const formattedDate = date.toLocaleDateString("en-GB");

  return (
    <article className="prose lg:prose-xl dark:prose-invert md:p-24 p-8 m-auto">
      <h1>{title}</h1>
      <div>Published {formattedDate}</div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export const generateMetadata = async (props: Props) => {
  const { id } = await props.params;
  const { title } = await getPageData(id);
  return { title };
};

export const generateStaticParams = async (): Promise<PostParams[]> => {
  const ids = await getAllPageIds();
  return ids.map((id) => ({ id }));
};

export const dynamicParams = false;
