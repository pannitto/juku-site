// GA4 の初期化。
// HTML に直接スクリプトを書かず外部ファイルにすることで、CSP で 'unsafe-inline' を許さずに済む。
// 測定ID は Base.astro の <script data-id="..."> から受け取る。
(function () {
  var el = document.currentScript;
  var id = el && el.getAttribute('data-id');
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', id);
})();
