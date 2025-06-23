self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ocr-cache-v4").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./style.css",
        "./tesseract/tesseract.min.js",
        "./assets/logo.png"
        // No need to cache eng.traineddata.gz since it's from CDN
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
