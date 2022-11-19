import { MDXRemote } from "next-mdx-remote";

function PostCard({ title, date, content }) {
  return (
    <div className="my-4 py-4 [&:not(:last-child)]:border-b">
      <div className="flex justify-between">
        <div className="font-bold text-xl ">{title}</div>

        <time className="text-gray-400 text-sm">{date}</time>
      </div>
      <div className="max-w-none prose prose-a:text-blue-600 my-2 leading-tight p-2">
        <MDXRemote {...content} />
      </div>
    </div>
  );
}

export default PostCard;
