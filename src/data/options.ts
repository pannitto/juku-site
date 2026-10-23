// 講師データで使う選択肢。
// LINEから案内する Googleフォームの選択肢、管理表の「問い合わせ記録」「担当表」と表記を揃えてください。
// （grades と heardFrom はサイトでは使っていません。Googleフォームを作るときの控えです）

export const faculties = [
  '商学部',
  '経済学部',
  '法学部',
  '社会学部',
  'ソーシャル・データサイエンス学部',
] as const;

export const socialSubjects = ['日本史', '世界史', '地理'] as const;

export const grades = ['高校1年', '高校2年', '高校3年', '既卒', 'その他'] as const;

export const heardFrom = [
  'X（旧Twitter）',
  'Instagram',
  'TikTok',
  '検索',
  '知人・友人の紹介',
  '学校・先生',
  'その他',
] as const;

// 失点原因の分類（講師マニュアルと共通）
export const failureCauses = [
  { name: '知識不足', note: '覚えていない、覚え違い' },
  { name: '理解不足', note: '言葉は知っているが、仕組みや因果を説明できない' },
  { name: '処理ミス', note: '計算や読み違い' },
  { name: '方針の誤り', note: '解き方や論の立て方の選び方を誤った' },
  { name: '論述の構成・表現', note: '中身はあるが、答案として伝わらない' },
  { name: '時間配分', note: '最後まで解き切れない、見直せない' },
  { name: '学習習慣', note: '量や継続が足りない' },
] as const;
