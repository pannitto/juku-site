// 公開前のセキュリティ確認（npm run build の後に実行）
// dist/ の HTML に、CSP（vercel.json）で止まってしまうものや、置いてはいけないものがないかを調べる。
//   - 中身を直接書いた <script>（JSON-LD を除く）と <style>
//   - style 属性、onclick などのイベント属性
//   - <form> と入力欄（このサイトでは個人情報を受けない方針）
//   - target="_blank" で rel="noopener" がないリンク
// 使い方: npm run build && npm run check:security
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

if (!existsSync('dist')) {
  console.error('dist/ がありません。先に npm run build を実行してください。');
  process.exit(1);
}

const files = [];
const walk = (p) => {
  if (statSync(p).isDirectory()) readdirSync(p).forEach((f) => walk(join(p, f)));
  else if (p.endsWith('.html')) files.push(p);
};
walk('dist');

const rules = [
  { name: 'インラインの <script>', re: /<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>/gi },
  { name: 'インラインの <style>', re: /<style[\s>]/gi },
  { name: 'style 属性', re: /\sstyle=["']/gi },
  { name: 'イベント属性（onclick など）', re: /\son[a-z]+=["']/gi },
  { name: '<form> または入力欄', re: /<(form|input|textarea|select)[\s>]/gi },
  { name: 'noopener のない target="_blank"', re: /<a(?![^>]*rel=["'][^"']*noopener)[^>]*target=["']_blank["'][^>]*>/gi },
];

let count = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const r of rules) {
    const hits = html.match(r.re);
    if (hits) {
      count += hits.length;
      console.log(`${relative('.', f)}  ${r.name} × ${hits.length}`);
    }
  }
}

if (count) {
  console.log(`\n${count} か所あります。直してから公開してください。`);
  process.exitCode = 1;
} else {
  console.log(`HTML ${files.length} ファイルを確認しました。問題はありません。`);
}
