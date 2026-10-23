// サイト全体の設定。公開前に【要変更】をすべて埋めてください。
// 残っているかは `npm run check:todo` で確認できます。

export const site = {
  name: '【要変更】塾名',
  tagline: '一橋大学志望のためのオンライン個別指導',
  description:
    '一橋大学を目指す高校生のためのオンライン個別指導です。志望学部と社会の選択科目に合わせて、現役の一橋生が授業と学習管理を担当します。',

  // 公式LINEの友だち追加URL（LINE Official Account Manager の「友だち追加ガイド」から取得）
  // 申込はすべてここから。LINE内のあいさつメッセージで Googleフォームに案内します。
  // サイトには入力フォームを置きません（個人情報をサイトで受けないため）。
  lineUrl: 'https://lin.ee/【要変更】',

  // 事業用メール
  email: '【要変更】info@example.com',

  // GA4 の測定ID（例: G-XXXXXXXXXX）。空なら読み込みません
  ga4Id: '',

  // OGP画像（public/ に置いたファイルのパス。例: '/og.png'）。空なら出力しません
  ogImage: '',

  // 授業と面談で使うツール
  meetingTool: 'Zoom または Google Meet【要確認】',

  // 公式LINEでの質問の返信ルール（講師マニュアルと揃える）
  replyRule: '19時までに届いた質問は、その日のうちに返信します。',
} as const;

export const operator = {
  tradeName: '【要変更】屋号',
  representative: '【要変更】代表者名',
  address: '【要変更】所在地（請求があれば遅滞なく開示する扱いにする場合は、その旨を記載）',
  phone: '【要変更】電話番号（同上）',
  established: '2027年2月',
} as const;

// 料金。confirmed を true にするまで、料金ページに「予定」と表示します
export const pricing = {
  confirmed: false,
  // 総額表示が必要です。税込の金額を入れてください
  taxNote: '表示はすべて税込です。【要確認】',
  lesson: {
    label: '授業料',
    minutes: 60,
    price: 5000,
    unit: '1コマ（60分）',
    note: '週1〜2回。月ごとに実施したコマ数で計算します。',
  },
  support: {
    label: 'サポート費',
    price: 15000,
    unit: '月額',
    note: '週1回30分の面談、週間計画と提出物の確認、公式LINEでの質問対応、月1回の保護者レポートを含みます。',
  },
  admissionFee: null as number | null, // 入会金。なしなら null
  payment: 'クレジットカードの継続課金（予備として銀行振込）',
  billing: '月末締め【要確認】',
} as const;

export const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`;
