import fs from "fs";

type PostParams = {
  id: string;
};

export default ({ params }: { params: PostParams }) => <div>{params.id}</div>;

const postsDirectory = "posts";

export const generateStaticParams = (): PostParams[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    id: fileName,
  }));
};

export const dynamicParams = false;
