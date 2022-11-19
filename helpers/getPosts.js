import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const getPosts = async (postsPath) => {
  const files = fs.readdirSync(path.join(postsPath));

  const allPostsData = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");

      const fileContents = fs.readFileSync(
        path.join(postsPath, fileName),
        "utf8"
      );
      const { data, content } = matter(fileContents);
      const mdxSource = await serialize(content);
      return {
        slug,
        data,
        content: mdxSource,
        order: data.order ?? 0,
      };
    })
  );

  allPostsData.sort((a, b) => a.order - b.order).reverse();

  return allPostsData;
};

export default getPosts;
