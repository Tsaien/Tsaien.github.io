if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>n(e,r),c={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-b22defcb"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"6ec8058231c22f62c926b78e343c214c"},{url:"assets/About.6039420b.js",revision:null},{url:"assets/Home.92f565fe.js",revision:null},{url:"assets/index.cb360ff2.js",revision:null},{url:"assets/index.e82bb862.css",revision:null},{url:"assets/Projects.82c202f8.js",revision:null},{url:"assets/Typing.0566c0ec.js",revision:null},{url:"index.html",revision:"0436e40939cea1fd05ee3de9c9fb9e60"},{url:"manifest.webmanifest",revision:"953fb841999e663d7da33133e64d4ed9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>["https://spy-family.net","https://cdn.jsdelivr.net"].includes(e.origin)),new e.StaleWhileRevalidate({cacheName:"external-sources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET")}));
