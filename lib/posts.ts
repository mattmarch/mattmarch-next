import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = "posts";

export const getAllPageIds = async (): Promise<string[]> => {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

export type PostMeta = {
  id: string;
  title: string;
  date: Date;
};

export type PostData = PostMeta & {
  contentHtml: string;
};

export const getPageData = async (id: string): Promise<PostData> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const contentHtml = await remark().use(html).process(content);

  return {
    id,
    contentHtml: contentHtml.toString(),
    ...parseMatterData(id, data),
  };
};

export const getPostMeta = async (id: string): Promise<PostMeta> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data } = matter(fileContents);
  return { id, ...parseMatterData(id, data) };
};

export const getAllPostMeta = async (): Promise<PostMeta[]> => {
  const allIds = await getAllPageIds();
  return Promise.all(allIds.map(getPostMeta));
};

type MatterData = { [key: string]: unknown };

const parseMatterData = (id: string, data: MatterData) => {
  if (!isNonEmptyString(data.title)) {
    throw new Error(`Post ${id} missing title`);
  }
  if (!isNonEmptyString(data.date) || !isValidDateString(data.date)) {
    throw new Error(`Post ${id} does not have valid date`);
  }
  return {
    title: data.title,
    date: new Date(data.date),
  };
};

const isNonEmptyString = (value: unknown): value is string =>
  Boolean(value && typeof value === "string");

const isValidDateString = (dateString: string) => {
  const date = new Date(dateString);
  return date.toString() !== "Invalid Date";
};
