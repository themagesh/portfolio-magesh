import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  const blogDirectory = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace(".md", ""),
    };
  });

  res.status(200).json(posts);
}
