import { client } from "@/libs/client";
import { notFound } from "next/navigation";
import styles from "../../styles/page.module.scss"

// データを取得する関数
async function getBlogData(id) {
  try {
    const data = await client.get({
      endpoint: "blog",
      contentId: id
    });
    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

// 動的パラメータを使用するための関数
export async function generateStaticParams() {
  const data = await client.get({ endpoint: "blog" });
  
  return data.contents.map((post) => ({
    id: post.id,
  }));
}

// メインのページコンポーネント
export default async function BlogPage({ params: rawParams }) {
  // paramsを非同期で解決
  const params = await rawParams;
  const blog = await getBlogData(params.id);
  
  if (!blog) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} className={styles.post} />
    </main>
  );
}

// メタデータの生成（必要な場合）
export async function generateMetadata({ params: rawParams }) {
  const params = await rawParams;
  const blog = await getBlogData(params.id);
  
  return {
    title: blog?.title,
    description: blog?.description
  };
}