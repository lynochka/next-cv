import PostCard from "components/PostCard";

export default function PostsStack({ title, posts }) {
  return (
    <div>
      <h1 className="font-bold text-3xl">{title}</h1>
      {posts.map(({ slug, data, content }) => (
        <PostCard
          key={slug}
          title={data.title}
          date={data.date}
          content={content}
        />
      ))}
    </div>
  );
}
