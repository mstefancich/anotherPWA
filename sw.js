self.addEventListener("install", e => {
    console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
              './',
              './index.html',
              './manifest.webmanifest',
              './icons/logo192.png',
        ]);
        })
    );
    console.log("Resources in cache. Done");
});
