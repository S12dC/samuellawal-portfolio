import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts
          .sort((a, b) =>
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ? -1
              : 1
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div
                  className="group rounded-2xl border bg-white dark:bg-black shadow-sm p-6 
                             transition-all duration-300 
                             hover:shadow-[0_0_25px_rgba(132,0,255,0.6)] hover:border-purple-500"
                >
                  <h2 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {post.metadata.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.metadata.publishedAt}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {post.metadata.summary}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
