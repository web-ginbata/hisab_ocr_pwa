self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ocr-cache-v0").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./style.css",
        "./tesseract/tesseract.min.js",
        "./tesseract/eng.traineddata",  // ✅ updated
        "./assets/logo.png"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
