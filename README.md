Next.js_microcms

◆起動
npm run dev

◆sdkをインストール
npm i microcms-js-sdk

◆microcmsと紐付けするclientの作成
メインフォルダ直下にlibsフォルダ作成

client.jsファイル作成

microcmsのAPI設定にあるエンドポイントを貼り付け
https://【エンドポイントに使用】.microcms.io/api/v1/blog

API KEYは安全な、.env.localファイル作成後にAPI_KEYを作成

◆cssのセットについて
npm i sass

◆開発環境のものをビルドする
npm run build

◆ビルドされたものを確認
npm run start

◆デプロイ（ホスティングサイトvercel）
→GitHub、GitLab、Bitbucket、Vercel CLI 
→メールアドレス必要

◆デプロイしたblogに新しいblogを追加（Webhook）
vercelのGit menuからDeploy Hooksを選択し、Create Hookで作成
→今回はmainで作成するとAPI_KEYが払い出される。
→microcmsのWebhockに登録

◆参考動画
https://youtu.be/dNpONz4Yi04?si=wSYBCG11uWXGUBc9
