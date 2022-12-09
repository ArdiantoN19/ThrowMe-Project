/* eslint-disable no-restricted-globals */
import CacheHelper from "./cache-helper";

const assetToCache = [
  "./",
  "./icons/maskable_icon_x48.png",
  "./icons/maskable_icon_x72.png",
  "./icons/maskable_icon_x96.png",
  "./icons/maskable_icon_x128.png",
  "./icons/maskable_icon_x192.png",
  "./icons/maskable_icon_x384.png",
  "./icons/maskable_icon_x512.png",
  "./assets/logo.png",
  "./assets/about/ardianto.jpeg",
  "./assets/about/devi.jpeg",
  "./assets/about/fer.jpeg",
  "./assets/about/reziq.png",
  "./assets/about/Volunteering-amico.svg",
  "./assets/backgrounds/blob_12-6-55.svg",
  "./assets/backgrounds/blob_13.svg",
  "./assets/icon-trash/battery.png",
  "./assets/icon-trash/bulb.png",
  "./assets/icon-trash/ewaste.png",
  "./assets/icon-trash/glass.png",
  "./assets/icon-trash/hazardous.png",
  "./assets/icon-trash/medical.png",
  "./assets/icon-trash/organic.png",
  "./assets/icon-trash/paper.png",
  "./assets/icon-trash/plastic.png",
  "./assets/icon-trash/textile.png",
  "./assets/illustrations/404 Page.svg",
  "./assets/illustrations/Mobile login-cuate.svg",
  "./assets/illustrations/Mobile login-pana.svg",
  "./assets/illustrations/No data-cuate.svg",
  "./assets/illustrations/Online article-cuate.svg",
  "./assets/illustrations/Paper map-cuate.svg",
  "./assets/illustrations/recycleBin-large.jpg",
  "./assets/illustrations/recycleBin-small.jpg",
  "./assets/illustrations/recycleBin.webp",
  "./assets/illustrations/Throw away-amico.svg",
  "./index.html",
  "./manifest.json",
  "./offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});