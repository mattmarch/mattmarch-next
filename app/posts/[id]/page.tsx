import fs from "fs";

type PostProps = {
  params: {
    id: string;
  };
};

export default ({ params }: PostProps) => <div>{params.id}</div>;

const postsDirectory = "posts";

export const generateStaticParams = (): PostProps[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName,
    },
  }));
};

export const dynamicParams = false;
