if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"beb54421f1627d196e142fc6901b9c00"},{url:"about/blog/index.html",revision:"d7e6d6b91d92d738818185caea827e5b"},{url:"about/index.html",revision:"f7a235027805c11085b233e5928c4298"},{url:"article/index.html",revision:"50e458ec073c9cc668cac471f2b39718"},{url:"assets/css/0.styles.62321048.css",revision:"fd53969846026cf2b5eabe6fa17d85ad"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/chrome192.png",revision:"e8bc1e4a40e2255522bd408a47cb2f9f"},{url:"assets/img/blog-1.7c972966.png",revision:"7c9729663a55ac243dd41bf024b8b8f2"},{url:"assets/img/blog-2.71d4bf21.png",revision:"71d4bf21092aa8a510c9eb916d991a6e"},{url:"assets/img/blog-3.61333c76.png",revision:"61333c76700767afde74e6e85f83ae07"},{url:"assets/img/blog-4.5171af21.png",revision:"5171af212cbf9437da84e17648c1f1d9"},{url:"assets/img/blog-5.bdf3971f.png",revision:"bdf3971f97adb5cc90d79825f5926d34"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/20.6a395473.js",revision:"fcbaa95683bd1e2f136b12b876889b2c"},{url:"assets/js/app.e4d98333.js",revision:"65c0495221deba5888464288647d8c54"},{url:"assets/js/layout-Blog.6a4666a3.js",revision:"2df93a491edee47a1cdfaf50ab7ea4c3"},{url:"assets/js/layout-Layout.f9e497fc.js",revision:"e9a3ed3a5e2c4fb10cb6a2f32d19ffec"},{url:"assets/js/layout-NotFound.30dbcb3e.js",revision:"661fea0c2026e04ecf74e95b5fc31b03"},{url:"assets/js/page-105-1011工作计划--9877c5a0.12136142.js",revision:"f8a1e30512f50e20c495a9a597658f77"},{url:"assets/js/page-913-919工作计划--107fdf94.9b6eb9d2.js",revision:"3ecf3c1c14c565b46b5b37cd114cf55b"},{url:"assets/js/page-920-926工作计划--3dd28198.a71366ff.js",revision:"d846d0d3b42cc044fc56c422b4a3e677"},{url:"assets/js/page-927-104工作计划--6b25239c.b78671b5.js",revision:"86ebf7ca89a4c07dda0be58dd6606690"},{url:"assets/js/page-博客介绍--59e59bc8.f2f8fae3.js",revision:"caf6443a8081edf73cf4835ff21fea6b"},{url:"assets/js/page-工作室介绍--5663e287.de342cce.js",revision:"10e7209a8c275b4d80dfc4d27f1b6f89"},{url:"assets/js/page-工作室招新--347e5093.f69d90a9.js",revision:"071a0429ffe6ffc7570011fe27357c69"},{url:"assets/js/page-工作日程--e4e20ada.8f38eb21.js",revision:"294786637f6f2c794d61b202d05db641"},{url:"assets/js/page-希望工作室--707b6c83.d4ab0721.js",revision:"194ac31f3e2a34cf4c97c9eddb6597fa"},{url:"assets/js/page-希望工作室招新--9fa7ff10.31b5eec2.js",revision:"d5d1511bead90f39a5a8c21855f85579"},{url:"assets/js/page-情况说明--641d0f90.af03c04d.js",revision:"10accb1ca47cea98f7dcc36fe1d8e036"},{url:"assets/js/vendors~flowchart.4937ab9e.js",revision:"1364c27b0c143da0d9ea29a89ca0e1c2"},{url:"assets/js/vendors~layout-Blog~layout-Layout.462eaf40.js",revision:"15226dc68a420dd8b8a6cd6728a83477"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2d464609.js",revision:"15834ea0a3c1657871e7a34718ce12f7"},{url:"assets/js/vendors~layout-Layout.d8e10c91.js",revision:"95bb03b43774427a13882a43163ee462"},{url:"category/index.html",revision:"00b8ef8650b2817c7b927273aba09d95"},{url:"index.html",revision:"a13a28e6cf3e5d2c384e0e0359eeb8d5"},{url:"invite/index.html",revision:"93ca9a2995076178c5c29e7f1549b09c"},{url:"invite/need/index.html",revision:"768841bb61bc9ade210dcd16881744e2"},{url:"invite/notice/index.html",revision:"7cf7d7ef17947eb48129e1b96bc02236"},{url:"logo.png",revision:"aa08d5a639f28b43eabb30d4ea7f1c79"},{url:"plan/index.html",revision:"364b4532871b4ce0dc564ae9b0228dab"},{url:"plan/week1/index.html",revision:"9af2db88f02ca65239698a2eb8bd5c85"},{url:"plan/week2/index.html",revision:"a3ab43f7f0ee8858d046cf3188def94c"},{url:"plan/week3/index.html",revision:"b386cfdff9bb468c9f3eab164d7a93ff"},{url:"plan/week4/index.html",revision:"7e7464024a1bae04f0a2ad9a3a847788"},{url:"tag/index.html",revision:"da5a8986c41ab143803bdfd8fe876407"},{url:"timeline/index.html",revision:"b6f35b047015dba292838d0e70395180"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
