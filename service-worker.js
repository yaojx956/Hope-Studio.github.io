if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"8bb09704c7732288cb7da5090e0cc8fa"},{url:"about/blog/index.html",revision:"926494ebcea4c53a1cc52ae167fc224c"},{url:"about/index.html",revision:"49e797d8bc7cb088d017c79fa2807a8d"},{url:"article/index.html",revision:"efaeeeeeb9e4ffc157956bcded4be696"},{url:"assets/css/0.styles.6e11d03a.css",revision:"2909a36d0dbcbe9aca2cac586c2aa53a"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/chrome192.png",revision:"e8bc1e4a40e2255522bd408a47cb2f9f"},{url:"assets/img/blog-1.7c972966.png",revision:"7c9729663a55ac243dd41bf024b8b8f2"},{url:"assets/img/blog-2.71d4bf21.png",revision:"71d4bf21092aa8a510c9eb916d991a6e"},{url:"assets/img/blog-3.61333c76.png",revision:"61333c76700767afde74e6e85f83ae07"},{url:"assets/img/blog-4.5171af21.png",revision:"5171af212cbf9437da84e17648c1f1d9"},{url:"assets/img/blog-5.bdf3971f.png",revision:"bdf3971f97adb5cc90d79825f5926d34"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/20.a0fc096a.js",revision:"0aecff93967bf6d0db753eda9d796dc9"},{url:"assets/js/app.df98034c.js",revision:"db4693d54643c5e3f01dc8f00f8a5180"},{url:"assets/js/layout-Blog.212084d3.js",revision:"9fdb068a130508e5fb0d8abd464515d1"},{url:"assets/js/layout-Layout.6f4f8ad5.js",revision:"e4aa8f986af220b96695620ad87e6aa9"},{url:"assets/js/layout-NotFound.fbf1b33e.js",revision:"ba37e7da2355a257c7c35f582b22e894"},{url:"assets/js/page-105-1011工作计划--9877c5a0.911ccd1b.js",revision:"bd0e8f0dae9d29976afd2786f3fcb90d"},{url:"assets/js/page-913-919工作计划--107fdf94.50789ca2.js",revision:"c452c0449e611d91490165a191a5747f"},{url:"assets/js/page-920-926工作计划--3dd28198.ddccd8d8.js",revision:"15551bed8a13e5abdb6cc3d00d4ac9f8"},{url:"assets/js/page-927-104工作计划--6b25239c.43d575e7.js",revision:"32e838f40a1fd87c1dd92044a9bbcff3"},{url:"assets/js/page-博客介绍--59e59bc8.71b5928f.js",revision:"e45269fc569f89594f573dcdb26a2fde"},{url:"assets/js/page-工作室介绍--5663e287.e6843a7e.js",revision:"5153de3bb4fd6a93139d5adc27e93e3e"},{url:"assets/js/page-工作室招新--347e5093.26427295.js",revision:"d367a45e8ec2f84584a9836086a3ab4c"},{url:"assets/js/page-工作日程--e4e20ada.b4bd4a2b.js",revision:"d573032565a7ad9f24b33024ed393c13"},{url:"assets/js/page-希望工作室--707b6c83.9ecbe5be.js",revision:"6899549dd1db1bd82837878bcc8cd2d4"},{url:"assets/js/page-希望工作室招新--9fa7ff10.86cd1008.js",revision:"e2a8714c22ed5ec2f6b96cebab1ebba1"},{url:"assets/js/page-情况说明--641d0f90.4856115d.js",revision:"25365af422bcced3fcab2001dfa1f209"},{url:"assets/js/vendors~flowchart.755769a1.js",revision:"e6830b8d51b4245a53851e3df20d937e"},{url:"assets/js/vendors~layout-Blog~layout-Layout.dead2ceb.js",revision:"8384a3c5090b247955f78eb2f871639a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6c47d6f7.js",revision:"7c2be2fbda1b65e93687843a0afbe64b"},{url:"assets/js/vendors~layout-Layout.79ec5531.js",revision:"aedd9b27e191dfb4cb0267e892e53d16"},{url:"category/index.html",revision:"b06ffd9a32454d3f64fc5b59b996b9e7"},{url:"index.html",revision:"09222ba53808bc2a83c27efdecd5894c"},{url:"invite/index.html",revision:"58bfac34f509910c3edf690403fa3706"},{url:"invite/need/index.html",revision:"03e93156f06c8e2c7bbfd5dacf3b116b"},{url:"invite/notice/index.html",revision:"61637660023ed90957b54f5d018a0e72"},{url:"logo.png",revision:"aa08d5a639f28b43eabb30d4ea7f1c79"},{url:"plan/index.html",revision:"f7257f09898ad59d0e3f444085aee1c8"},{url:"plan/week1/index.html",revision:"ee63bed286192e751ed1d4849b98542d"},{url:"plan/week2/index.html",revision:"412685565e884bde2556708b75d80671"},{url:"plan/week3/index.html",revision:"9fa3bc96b7b4fa48acceeb959a6d2217"},{url:"plan/week4/index.html",revision:"58b2e9c3ffaffed0a5953f93f2de6f3e"},{url:"tag/index.html",revision:"f02b7222188d18cd0fa746f7434dd6bf"},{url:"timeline/index.html",revision:"ae33d0de0a73c5d93c043426774f026a"}],{})}));
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
