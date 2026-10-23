// 公開前チェック：【要変更】【要確認】【要記入】が残っていないかを探す
// 使い方: npm run check:todo
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const roots = ['src', 'public', 'astro.config.mjs'];
const pattern = /【要(変更|確認|記入)】/g;
const exts = /\.(astro|ts|js|mjs|css|txt|svg|md)$/;

const files = [];
const walk = (p) => {
  const st = statSync(p);
  if (st.isDirectory()) readdirSync(p).forEach((f) => walk(join(p, f)));
  else if (exts.test(p)) files.push(p);
};
roots.forEach((r) => {
  try {
    walk(r);
  } catch {}
});

let count = 0;
for (const f of files) {
  readFileSync(f, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (pattern.test(line)) {
        count++;
        console.log(`${relative('.', f)}:${i + 1}  ${line.trim().slice(0, 100)}`);
      }
      pattern.lastIndex = 0;
    });
}

if (count) {
  console.log(`\n残り ${count} か所。公開前にすべて埋めてください。`);
  process.exitCode = 1;
} else {
  console.log('残りはありません。');
}
