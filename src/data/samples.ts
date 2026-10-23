// 添削サンプル。生徒と保護者の掲載同意を取り、氏名・学校など本人が分かる情報は消してください。
// 問題文は大学の著作物なので、そのまま載せず「問題の要旨」として自分の言葉で書きます。

export type Sample = {
  id: string;
  subject: string;
  theme: string; // 問題の要旨
  answer: string; // 生徒の答案（掲載同意を取ったもの）
  comments: { target: string; comment: string }[]; // 添削コメント。target は答案中の該当箇所
  causes: string[]; // 失点原因の分類（options.ts の failureCauses の name）
  rewrite: string; // 書き直した答案
};

export const samples: Sample[] = [
  {
    id: 'sample-1',
    subject: '世界史',
    theme: '【要変更】例：19世紀のイギリスとインドの経済関係の変化を説明する',
    answer:
      '産業革命で綿織物の大量生産が可能になると、イギリスはインドを原料の供給地とし、製品の市場としても組み込んだ。その結果、インドの手織り綿布業は衰退した。',
    comments: [
      {
        target: '製品の市場としても組み込んだ',
        comment: 'なぜ市場が必要になったのかが抜けています。生産が増えたこととの因果を一文で足しましょう。',
      },
    ],
    causes: ['理解不足', '論述の構成・表現'],
    rewrite: '【要変更】書き直した答案をここに入れます。',
  },
];
