import { posts } from "@/content/posts";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}