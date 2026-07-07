import BlogDetailPageClient from "./BlogDetailPageClient";
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  return <BlogDetailPageClient slug={slug} />;
}
