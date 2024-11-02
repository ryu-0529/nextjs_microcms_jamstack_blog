import Image from "next/image";
import Link from "next/link";
import styles from "./styles/page.module.scss";
import { createClient } from 'microcms-js-sdk';
import { ArrowRight, BookOpen, ChevronDown, Clock } from 'lucide-react';

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

async function Home() {
  const data = await client.get({
    endpoint: "blog"
  });
  
  return (
    <div className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Tech Blog & Insights</h1>
          <p>最新のテクノロジートレンドと知見を発信</p>
          <ChevronDown className={styles.scrollIcon} />
        </div>
      </section>

      {/* ブログセクション */}
      <section className={styles.blogSection}>
        <div className={styles.sectionHeader}>
          <h2>Latest Articles</h2>
          <p>技術的な洞察と最新情報をお届けします</p>
        </div>

        <div className={styles.blogGrid}>
          {data.contents.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className={styles.blogCard}>
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <div className={styles.meta}>
                  <span><Clock className={styles.icon} />公開日: {new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <ArrowRight className={styles.arrowIcon} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>最新の記事をチェック</h2>
          <p>新しい記事を定期的に更新しています</p>
          <BookOpen className={styles.ctaIcon} />
        </div>
      </section>
    </div>
  );
}

export default Home;