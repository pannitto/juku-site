// 講師紹介。名前や写真を載せる場合は、業務委託契約で掲載の同意を取ってから入れてください。
// photo は public/tutors/ に置いた画像のパス（例: '/tutors/a.jpg'）。なければ空文字。

export type Tutor = {
  name: string;
  faculty: string; // 所属学部（options.ts の faculties と同じ表記）
  year: string; // 学年
  socialSubject: string; // 受験で選んだ社会
  subjects: string[]; // 担当できる科目
  message: string;
  photo: string;
};

export const tutors: Tutor[] = [
  {
    name: '【要変更】講師名',
    faculty: '商学部',
    year: '2年',
    socialSubject: '世界史',
    subjects: ['英語', '世界史'],
    message: '【要変更】自分の受験で苦労したこと、生徒に伝えたいことを2〜3文で。',
    photo: '',
  },
  {
    name: '【要変更】講師名',
    faculty: '経済学部',
    year: '3年',
    socialSubject: '日本史',
    subjects: ['数学', '日本史'],
    message: '【要変更】自分の受験で苦労したこと、生徒に伝えたいことを2〜3文で。',
    photo: '',
  },
];
