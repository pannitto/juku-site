# 塾サイト（Astro）

一橋大学志望の高校生向けオンライン個別指導の公開サイトです。
読むだけの静的サイトとして書き出します。

**サイトでは個人情報を受けません。**
申込・予約・連絡・質問・提出はすべて公式LINEで受け、申込の入力はLINEから案内する Googleフォームで行います。
サイトにはフォーム、ログイン、データベースを持たせません。

## 動かし方

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # dist/ に書き出し
npm run preview        # 書き出した結果を確認
npm run check:todo     # 【要変更】【要確認】【要記入】の残りを一覧
npm run check:security # dist/ のセキュリティ確認と npm audit（build の後に）
```

Astro 7 の要件で、Node.js 22.23.4 以上が必要です（`node -v` で確認）。

## どこを直すか

| やりたいこと | ファイル |
| --- | --- |
| 塾名、LINEのURL、メール、GA4 | `src/config/site.ts` の `site` |
| 屋号・代表者・所在地 | `src/config/site.ts` の `operator` |
| 料金（確定したら `confirmed: true`） | `src/config/site.ts` の `pricing` |
| 講師紹介 | `src/data/tutors.ts` |
| 添削サンプル | `src/data/samples.ts` |
| よくある質問 | `src/data/faq.ts` |
| 学部・選択科目の表記 | `src/data/options.ts`（Googleフォームの選択肢と揃える） |
| 色と文字 | `src/styles/global.css` の先頭 |
| 公開ドメイン | `astro.config.mjs` の `site`、`public/robots.txt` |
| セキュリティヘッダー | `vercel.json` |

## 構成

```
src/
  config/site.ts        設定と料金
  data/                 講師・サンプル・FAQ・選択肢
  layouts/Base.astro    head（OGP、GA4）とヘッダー・フッター
  components/           ヘッダー、フッター、LINEボタン、CTA、解答用紙
  pages/
    index.astro         トップ
    service.astro       サービス（講師が決まるまでの流れ）
    method.astro        指導の流れ
    price.astro         料金（confirmed が false の間は「予定」表示）
    tutors.astro        講師
    sample.astro        添削サンプル
    faq.astro           よくある質問
    contact.astro       申し込みの流れ（入力欄なし。公式LINEへ案内）
    about.astro         運営者情報
    legal/              利用規約、プライバシーポリシー、特商法表記（雛形）
public/scripts/ga.js    GA4 の初期化（CSP のため外部ファイルにしている）
vercel.json             ビルド設定とセキュリティヘッダー
.github/dependabot.yml  依存パッケージの更新を自動で提案させる設定
scripts/                公開前チェック
```

## 申込の流れ（サイトの外）

1. サイトの「公式LINEで無料相談」から、LINEを友だち追加してもらう
2. LINEのあいさつメッセージで、Googleフォームのリンクを送る
3. フォームの回答は、管理表のスプレッドシートにたまる
4. 運営がLINEで日程を連絡する

Googleフォームの作り方と共有設定の注意は、「塾のセキュリティ対策の考え方」の文書にまとめています。

## セキュリティで守っていること

- **個人情報をサイトに置かない。** 攻撃されても抜ける情報がない
- **CSP などのヘッダー（vercel.json）。** 許可した場所以外からスクリプトを読まない。他のサイトに埋め込ませない
- **HTML に直接スクリプトやスタイルを書かない。** CSP で `'unsafe-inline'` を許さずに済む。`npm run check:security` で確認
- **外部リンクに `rel="noopener noreferrer"`。** 開いた先からこのページを操作させない
- **依存パッケージを更新し続ける。** Dependabot と `npm audit`

`vercel.json` の CSP に載っていない外部サービス（YouTube の埋め込み、別の解析ツールなど）を足すと、表示されません。
足すときは CSP に、そのサービスのドメインを追加してください。

## 公開（Vercel）

1. GitHub に**非公開（Private）**のリポジトリを作って push する
2. Vercel で、そのリポジトリを読み込む（設定は `vercel.json` に書いてあるので変更不要）
3. 独自ドメインをつなぐ

**Vercel の無料プラン（Hobby）は、個人の非商用利用に限られています。**
塾のサイトは商用なので、Pro プランにするか、商用利用が認められる別のホスティング（Cloudflare Pages、Netlify など。各社の規約を確認）にしてください。

公開したら、[securityheaders.com](https://securityheaders.com) などでヘッダーが付いているかを確かめます。

## 公開前チェック

- [ ] `npm run check:todo` の残りが 0
- [ ] `npm run build && npm run check:security` で問題なし
- [ ] 料金を確定し、`pricing.confirmed` を `true` にした（総額表示＝税込）
- [ ] 利用規約、プライバシーポリシー、特商法表記を専門家に確認してもらった
- [ ] 講師の名前・写真の掲載同意を、業務委託契約で取った
- [ ] 添削サンプルの掲載同意を、生徒と保護者から取った
- [ ] 合格実績や「No.1」など、根拠のない表現がない
- [ ] LINEのボタンを押して、友だち追加とGoogleフォームの案内まで届いた
- [ ] スマホで全ページを開き、文字が切れていない
- [ ] GA4 と Search Console を設定し、サイトマップ（`/sitemap-index.xml`）を送信した
- [ ] ドメイン、Vercel、GitHub、Google、LINE のすべてに2段階認証をかけた

## デザインの考え方

- 解答用紙と添削の赤ペンを、見た目の軸にしています
- 赤は「直すところ」にだけ使います。装飾やボタンには使いません
- 見出しは明朝（Shippori Mincho B1）、本文は BIZ UDPゴシック
- 赤ペンの手書き風（Klee One）は、添削コメントにだけ使います
- 動きはトップの赤線が引かれる1か所だけです（動きを減らす設定の人には出しません）
