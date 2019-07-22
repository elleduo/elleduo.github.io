/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d9f3d1c15dd37ba94c3da9a278022a48"
  },
  {
    "url": "assets/css/0.styles.4c1e8a3e.css",
    "revision": "0fcb0f25e4f8acf99646118b7c8517ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ba78b343.js",
    "revision": "492d2d2bd3d6af6a9072e4f0d9316d12"
  },
  {
    "url": "assets/js/3.c98bd0ad.js",
    "revision": "9925d34f813eb70667596ce14365c1b7"
  },
  {
    "url": "assets/js/4.072dd054.js",
    "revision": "1bf4ae7329d35d0b1a9c4f14617ac564"
  },
  {
    "url": "assets/js/5.ff491bb2.js",
    "revision": "29722dd2c2db32ade26584c9dd435a8a"
  },
  {
    "url": "assets/js/6.6430ed58.js",
    "revision": "6855564851db6451ba8203739e96c0ca"
  },
  {
    "url": "assets/js/app.21cd987d.js",
    "revision": "613ad73f558e74a4944fc8ffb783a1be"
  },
  {
    "url": "index.html",
    "revision": "22852d54b520604568154a46388b0f65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
