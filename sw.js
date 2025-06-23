self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ocr-cache-v1").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./style.css",
        "./script.js",
        "./tesseract/tesseract.min.js",
        "./tesseract/eng.traineddata.gz",
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
