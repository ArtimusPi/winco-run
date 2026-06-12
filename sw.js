/* WinCo Run service worker
   Network-first for app files: always pulls the latest version when online,
   falls back to cache when you're offline in the store.
   Cache-first for icons/manifest: they almost never change.
   No manual version bumping needed — updates land automatically. */

const CACHE = "winco-run-v8";

const CACHE_FIRST = [
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon-180.png",
  "./manifest.json",
];

const NETWORK_FIRST = [
  "./",
  "./index.html",
  "./planner.html",
  "./data.js",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([...CACHE_FIRST, ...NETWORK_FIRST]))
  );
  // Don't skipWaiting here — let the update banner flow handle it
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isAppShell(request) {
  const url = new URL(request.url);
  return url.origin === self.location.origin &&
    (url.pathname.endsWith(".html") ||
     url.pathname.endsWith(".js") ||
     url.pathname === "/" ||
     url.pathname.endsWith("/"));
}

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;

  if (isAppShell(e.request)) {
    // Network-first: fetch latest, update cache, fall back to cache offline
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(e.request).then(hit => hit || caches.match("./index.html"))
        )
    );
  } else {
    // Cache-first: icons and manifest
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }))
    );
  }
});

// Page posts "skipWaiting" when the user taps the update banner
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
