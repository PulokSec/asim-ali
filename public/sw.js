if(!self.define){let e,c={};const a=(a,i)=>(a=new URL(a+".js",i).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let o={};const r=e=>a(e,n),t={module:{uri:n},exports:o,require:r};c[n]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(s(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1922-f35508ac2d79196e.js",revision:"f35508ac2d79196e"},{url:"/_next/static/chunks/2642.d772704bdf5f4c94.js",revision:"d772704bdf5f4c94"},{url:"/_next/static/chunks/2769-e740f054a9fa266f.js",revision:"e740f054a9fa266f"},{url:"/_next/static/chunks/2863.5ab97654700c1ab4.js",revision:"5ab97654700c1ab4"},{url:"/_next/static/chunks/2cca2479-72e5c90a4f9ed70b.js",revision:"72e5c90a4f9ed70b"},{url:"/_next/static/chunks/3658.938c239d8dce76ce.js",revision:"938c239d8dce76ce"},{url:"/_next/static/chunks/3946.fa83f7fcb91117d5.js",revision:"fa83f7fcb91117d5"},{url:"/_next/static/chunks/3988.06806721d73fd6f0.js",revision:"06806721d73fd6f0"},{url:"/_next/static/chunks/471.73f307cad058a8f4.js",revision:"73f307cad058a8f4"},{url:"/_next/static/chunks/5776.6d7b540ff5ff44ba.js",revision:"6d7b540ff5ff44ba"},{url:"/_next/static/chunks/5863.e16797e7c6bf94ad.js",revision:"e16797e7c6bf94ad"},{url:"/_next/static/chunks/616-88241037c95ce269.js",revision:"88241037c95ce269"},{url:"/_next/static/chunks/6183.69737c7685f6f1f1.js",revision:"69737c7685f6f1f1"},{url:"/_next/static/chunks/6190.c132fb459cef8d84.js",revision:"c132fb459cef8d84"},{url:"/_next/static/chunks/7564.8fe733ea1d43dc7e.js",revision:"8fe733ea1d43dc7e"},{url:"/_next/static/chunks/75fc9c18-5a55cb0f13134a2c.js",revision:"5a55cb0f13134a2c"},{url:"/_next/static/chunks/8033.91659abb982d88e8.js",revision:"91659abb982d88e8"},{url:"/_next/static/chunks/9484-6cb18f49c4929656.js",revision:"6cb18f49c4929656"},{url:"/_next/static/chunks/9631.408a265646db37fc.js",revision:"408a265646db37fc"},{url:"/_next/static/chunks/c16184b3-a73dc6e209fa7313.js",revision:"a73dc6e209fa7313"},{url:"/_next/static/chunks/framework-79bce4a3a540b080.js",revision:"79bce4a3a540b080"},{url:"/_next/static/chunks/main-cfd82b34fdc71a50.js",revision:"cfd82b34fdc71a50"},{url:"/_next/static/chunks/pages/%5B...pageUri%5D-f9b8c9c384c27e5c.js",revision:"f9b8c9c384c27e5c"},{url:"/_next/static/chunks/pages/404-bdc6a43d62217f64.js",revision:"bdc6a43d62217f64"},{url:"/_next/static/chunks/pages/_app-74c218cca1b7ee17.js",revision:"74c218cca1b7ee17"},{url:"/_next/static/chunks/pages/_error-f2496e8b9fdedb89.js",revision:"f2496e8b9fdedb89"},{url:"/_next/static/chunks/pages/blog-309fb8c5c4725bf2.js",revision:"309fb8c5c4725bf2"},{url:"/_next/static/chunks/pages/blogs-badfcd02696553d2.js",revision:"badfcd02696553d2"},{url:"/_next/static/chunks/pages/blogs/%5BpostSlug%5D-fef8f5371eed34eb.js",revision:"fef8f5371eed34eb"},{url:"/_next/static/chunks/pages/blogs/%5BpostSlug%5D/%5BpostCursor%5D-c75c5afd12823d12.js",revision:"c75c5afd12823d12"},{url:"/_next/static/chunks/pages/category/%5BcategorySlug%5D-680914bd678ca9bd.js",revision:"680914bd678ca9bd"},{url:"/_next/static/chunks/pages/category/%5BcategorySlug%5D/%5BpaginationTerm%5D/%5BcategoryCursor%5D-016d2f1e99dc8a46.js",revision:"016d2f1e99dc8a46"},{url:"/_next/static/chunks/pages/commercial-mortgage-in-surrey-ecc3bc846e0e0c84.js",revision:"ecc3bc846e0e0c84"},{url:"/_next/static/chunks/pages/commercial-mortgage-in-vancouver-f6d8e412d7a52aa6.js",revision:"f6d8e412d7a52aa6"},{url:"/_next/static/chunks/pages/contact-us-d36299a025e8d675.js",revision:"d36299a025e8d675"},{url:"/_next/static/chunks/pages/current-rates-6e5bd8cd8c27e7f9.js",revision:"6e5bd8cd8c27e7f9"},{url:"/_next/static/chunks/pages/custom-page-972304f8191eb67e.js",revision:"972304f8191eb67e"},{url:"/_next/static/chunks/pages/how-it-works-2097792cf8893645.js",revision:"2097792cf8893645"},{url:"/_next/static/chunks/pages/index-34cf0cdc92591875.js",revision:"34cf0cdc92591875"},{url:"/_next/static/chunks/pages/langley-mortgage-broker-b332f88f7e19a161.js",revision:"b332f88f7e19a161"},{url:"/_next/static/chunks/pages/mortgage-broker-in-coquitlam-4b711fa4488ceaee.js",revision:"4b711fa4488ceaee"},{url:"/_next/static/chunks/pages/mortgage-broker-in-vancouver-8e6c13ba603cd55f.js",revision:"8e6c13ba603cd55f"},{url:"/_next/static/chunks/pages/mortgage-brokers-in-abbotsford-1ad2e2842b2e3ad8.js",revision:"1ad2e2842b2e3ad8"},{url:"/_next/static/chunks/pages/mortgage-brokers-in-delta-4378c902273b596a.js",revision:"4378c902273b596a"},{url:"/_next/static/chunks/pages/mortgage-brokers-in-kamloops-2ffbbfbf4c6df9b5.js",revision:"2ffbbfbf4c6df9b5"},{url:"/_next/static/chunks/pages/mortgage-brokers-in-kelowna-cc01951c8ce432a2.js",revision:"cc01951c8ce432a2"},{url:"/_next/static/chunks/pages/mortgage-brokers-in-maple-ridge-fce1112cb2bbe905.js",revision:"fce1112cb2bbe905"},{url:"/_next/static/chunks/pages/mortgage-brokers-in-prince-george-5fe9bb2823092783.js",revision:"5fe9bb2823092783"},{url:"/_next/static/chunks/pages/mortgage-calculator-a1005a28d4c2509c.js",revision:"a1005a28d4c2509c"},{url:"/_next/static/chunks/pages/our-locations-e1b4770d0183c7a8.js",revision:"e1b4770d0183c7a8"},{url:"/_next/static/chunks/pages/our-services-9868345d07293e1b.js",revision:"9868345d07293e1b"},{url:"/_next/static/chunks/pages/preview-ec756bd9e5cf131d.js",revision:"ec756bd9e5cf131d"},{url:"/_next/static/chunks/pages/redirect-30cabe03d0ee2b0d.js",revision:"30cabe03d0ee2b0d"},{url:"/_next/static/chunks/pages/testimonials-228802a5f609f015.js",revision:"228802a5f609f015"},{url:"/_next/static/chunks/pages/what-we-do-137e17c9328c758a.js",revision:"137e17c9328c758a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-df1fa56bb3264add.js",revision:"df1fa56bb3264add"},{url:"/_next/static/css/09a6c8321e7bfbc2.css",revision:"09a6c8321e7bfbc2"},{url:"/_next/static/css/19b389a2adc61ed5.css",revision:"19b389a2adc61ed5"},{url:"/_next/static/css/78eb34152f467416.css",revision:"78eb34152f467416"},{url:"/_next/static/css/8e58a54cdbdab74a.css",revision:"8e58a54cdbdab74a"},{url:"/_next/static/css/f14961009f3fc9c7.css",revision:"f14961009f3fc9c7"},{url:"/_next/static/css/fab6c522a0860350.css",revision:"fab6c522a0860350"},{url:"/_next/static/css/fdf2cfcc3b95a4da.css",revision:"fdf2cfcc3b95a4da"},{url:"/_next/static/hIwuVkt-cDB3gR-yavYjt/_buildManifest.js",revision:"48b65e1a2eebc45c99b34d8f746f66a7"},{url:"/_next/static/hIwuVkt-cDB3gR-yavYjt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/AvenirLTStd-Black.8f8e7d37.otf",revision:"8f8e7d37"},{url:"/_next/static/media/AvenirLTStd-Book.a518a54c.otf",revision:"a518a54c"},{url:"/_next/static/media/AvenirLTStd-Roman.4f3c9a2f.otf",revision:"4f3c9a2f"},{url:"/_next/static/media/dejavu-sans.book.abe910e3.ttf",revision:"abe910e3"},{url:"/_next/static/media/revicons.652e7269.eot",revision:"652e7269"},{url:"/_next/static/media/revicons.b96bdb22.ttf",revision:"b96bdb22"},{url:"/_next/static/media/revicons.ff59b316.woff",revision:"ff59b316"},{url:"/android-chrome-192x192.png",revision:"67953bcdd35f58046408c43fbb06bf82"},{url:"/android-chrome-512x512.png",revision:"9d742295e5290356406ef754b07fe028"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"464b070e7c16fe8e1893fbc582dd2b93"},{url:"/apple-touch-icon-114x114.png",revision:"32cdde059a5e63b1906c19a936e35606"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"e52f7f9a1be83aeeb16eeff6d8a05b08"},{url:"/apple-touch-icon-120x120.png",revision:"762f13fbc0b24abdf4fcf603279f4137"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"a4e8e945a2073136704c5ab890a94e68"},{url:"/apple-touch-icon-144x144.png",revision:"6a83e2f31060ce310ce768ae4f1a3a61"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"d6f31edc96b4a61c1e4283ab137c1972"},{url:"/apple-touch-icon-152x152.png",revision:"12a68d863a69c4995419c7978c8a2edc"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"c25cebaf9adaac63becfc628c7555cd8"},{url:"/apple-touch-icon-180x180.png",revision:"9666bdbef5721f3105c1f7bfa11df949"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"8f09513b4f660e116067e945596f33d6"},{url:"/apple-touch-icon-57x57.png",revision:"e70f97d5fc84d2e9d04a91c51ac71ce1"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"0b8a8644a25a077613ab06ddc97f13b2"},{url:"/apple-touch-icon-60x60.png",revision:"1517d176ff562cb7d1136dfad79b8166"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"583615d28519fa101f5e236d0b668650"},{url:"/apple-touch-icon-72x72.png",revision:"51e654e5e2d0cfb8e6af10ac32412f44"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"7936deebcb11b871d33e7b933dcd2ab1"},{url:"/apple-touch-icon-76x76.png",revision:"9f8274db4513050152234a39f2b0af44"},{url:"/apple-touch-icon-precomposed.png",revision:"c25cebaf9adaac63becfc628c7555cd8"},{url:"/apple-touch-icon.png",revision:"9666bdbef5721f3105c1f7bfa11df949"},{url:"/browserconfig.xml",revision:"877c532bc5e11b01391e51b4fd9240e8"},{url:"/favicon 2.ico",revision:"c621cfb5e12cd78623132a3cc377ac0e"},{url:"/favicon-16x16.png",revision:"c1fee4c6448375f5122e69747ac57c07"},{url:"/favicon-32x32.png",revision:"21578385c7ec86c6bc450bd4197be17c"},{url:"/favicon.ico",revision:"7fee4edb228fc25cbaae22c56bc95751"},{url:"/favicon_package_v0.16/android-chrome-192x192.png",revision:"67953bcdd35f58046408c43fbb06bf82"},{url:"/favicon_package_v0.16/android-chrome-512x512.png",revision:"9d742295e5290356406ef754b07fe028"},{url:"/favicon_package_v0.16/apple-touch-icon-114x114-precomposed.png",revision:"464b070e7c16fe8e1893fbc582dd2b93"},{url:"/favicon_package_v0.16/apple-touch-icon-114x114.png",revision:"32cdde059a5e63b1906c19a936e35606"},{url:"/favicon_package_v0.16/apple-touch-icon-120x120-precomposed.png",revision:"e52f7f9a1be83aeeb16eeff6d8a05b08"},{url:"/favicon_package_v0.16/apple-touch-icon-120x120.png",revision:"762f13fbc0b24abdf4fcf603279f4137"},{url:"/favicon_package_v0.16/apple-touch-icon-144x144-precomposed.png",revision:"a4e8e945a2073136704c5ab890a94e68"},{url:"/favicon_package_v0.16/apple-touch-icon-144x144.png",revision:"6a83e2f31060ce310ce768ae4f1a3a61"},{url:"/favicon_package_v0.16/apple-touch-icon-152x152-precomposed.png",revision:"d6f31edc96b4a61c1e4283ab137c1972"},{url:"/favicon_package_v0.16/apple-touch-icon-152x152.png",revision:"12a68d863a69c4995419c7978c8a2edc"},{url:"/favicon_package_v0.16/apple-touch-icon-180x180-precomposed.png",revision:"c25cebaf9adaac63becfc628c7555cd8"},{url:"/favicon_package_v0.16/apple-touch-icon-180x180.png",revision:"9666bdbef5721f3105c1f7bfa11df949"},{url:"/favicon_package_v0.16/apple-touch-icon-57x57-precomposed.png",revision:"8f09513b4f660e116067e945596f33d6"},{url:"/favicon_package_v0.16/apple-touch-icon-57x57.png",revision:"e70f97d5fc84d2e9d04a91c51ac71ce1"},{url:"/favicon_package_v0.16/apple-touch-icon-60x60-precomposed.png",revision:"0b8a8644a25a077613ab06ddc97f13b2"},{url:"/favicon_package_v0.16/apple-touch-icon-60x60.png",revision:"1517d176ff562cb7d1136dfad79b8166"},{url:"/favicon_package_v0.16/apple-touch-icon-72x72-precomposed.png",revision:"583615d28519fa101f5e236d0b668650"},{url:"/favicon_package_v0.16/apple-touch-icon-72x72.png",revision:"51e654e5e2d0cfb8e6af10ac32412f44"},{url:"/favicon_package_v0.16/apple-touch-icon-76x76-precomposed.png",revision:"7936deebcb11b871d33e7b933dcd2ab1"},{url:"/favicon_package_v0.16/apple-touch-icon-76x76.png",revision:"9f8274db4513050152234a39f2b0af44"},{url:"/favicon_package_v0.16/apple-touch-icon-precomposed.png",revision:"c25cebaf9adaac63becfc628c7555cd8"},{url:"/favicon_package_v0.16/apple-touch-icon.png",revision:"9666bdbef5721f3105c1f7bfa11df949"},{url:"/favicon_package_v0.16/browserconfig.xml",revision:"877c532bc5e11b01391e51b4fd9240e8"},{url:"/favicon_package_v0.16/favicon-16x16.png",revision:"c1fee4c6448375f5122e69747ac57c07"},{url:"/favicon_package_v0.16/favicon-32x32.png",revision:"21578385c7ec86c6bc450bd4197be17c"},{url:"/favicon_package_v0.16/favicon.ico",revision:"7fee4edb228fc25cbaae22c56bc95751"},{url:"/favicon_package_v0.16/mstile-144x144.png",revision:"c0daa38f1a799fc76441051a5fe9ad1a"},{url:"/favicon_package_v0.16/mstile-150x150.png",revision:"f6d497907280ea4c38fbd17186f55a26"},{url:"/favicon_package_v0.16/mstile-310x150.png",revision:"d6aea9baa55bbe0a66b1b1d8e7e13bdb"},{url:"/favicon_package_v0.16/mstile-310x310.png",revision:"30dbb7006e17ffbba7e2a0658028f182"},{url:"/favicon_package_v0.16/mstile-70x70.png",revision:"74a95693822fc67a19260d86a8ea2a1c"},{url:"/favicon_package_v0.16/safari-pinned-tab.svg",revision:"0952f2b0e1412abfcab0a30db4e0daf1"},{url:"/favicon_package_v0.16/site.webmanifest",revision:"fee860bd8507cd0612082cc865db45d5"},{url:"/home-banner.webp",revision:"9919cd0a53874a15dcf565460c49e258"},{url:"/icon-192x192.png",revision:"75cdbcb93505700e6083d79dbe05b0ea"},{url:"/icon-256x256.png",revision:"e6d2d6d1f5e85cf4152694508643cfad"},{url:"/icon-384x384.png",revision:"0754838f33fdb71c24f4f6975d760d2a"},{url:"/icon-512x512.png",revision:"032b30f0204781e881bc00ff0c657764"},{url:"/images/conquitlam-grid.png",revision:"7859c0ff6610e1e1d545ef53be71722d"},{url:"/images/location-1.png",revision:"8a5028e7d412277469816b0405f4349f"},{url:"/images/location-10.png",revision:"5e18aa748951bff5dbaa7bbec820f770"},{url:"/images/location-2.png",revision:"5a1b9513cc11174c6a93ddd342b9903a"},{url:"/images/location-3.png",revision:"8906be627aea582bdf364f43680a0b52"},{url:"/images/location-4.png",revision:"0ed064fc136058c6d1caccef92e47b1c"},{url:"/images/location-5.png",revision:"4d7871f20a56f0532720d1be8b19e6ab"},{url:"/images/location-6.png",revision:"0130339dd92e7ec1ad5a33a65feec1de"},{url:"/images/location-7.png",revision:"ea6fb37d300ec2311b15d55453318d65"},{url:"/images/location-8.png",revision:"fb39e55dae7237057aac31d89fab5d7a"},{url:"/images/location-9.png",revision:"6dd9d6630e74b5d909e94f775edb0f0e"},{url:"/images/we-help-bg.png",revision:"74d6b414f099afb6710f2ac7aa83741e"},{url:"/images/we-help-bg.webp",revision:"0aa598e9a9855796f6ba70cb5cdf3341"},{url:"/manifest.json",revision:"859cda0a61fd0b58ee9cae283cb32498"},{url:"/mstile-144x144.png",revision:"c0daa38f1a799fc76441051a5fe9ad1a"},{url:"/mstile-150x150.png",revision:"f6d497907280ea4c38fbd17186f55a26"},{url:"/mstile-310x150.png",revision:"d6aea9baa55bbe0a66b1b1d8e7e13bdb"},{url:"/mstile-310x310.png",revision:"30dbb7006e17ffbba7e2a0658028f182"},{url:"/mstile-70x70.png",revision:"74a95693822fc67a19260d86a8ea2a1c"},{url:"/robots.txt",revision:"9152d7f1724ed8fbcd2e0c87029f193c"},{url:"/safari-pinned-tab.svg",revision:"0952f2b0e1412abfcab0a30db4e0daf1"},{url:"/site.webmanifest",revision:"fee860bd8507cd0612082cc865db45d5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:a,state:i})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
