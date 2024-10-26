import Image from "next/image";
import Link from "next/link"; // Linkをインポート
import styles from "./styles/page.module.scss";
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

async function Home() {
  const data = await client.get({
    endpoint: "blog"
  });
  
  return (
    <div>
      <ul>
        {data.contents.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;