self.addEventListener("install", e => {
    console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
              '/',
              '/index.html',
              '/app.js',
              '/manifest.webmanifest',
              '/icons/icon-192.png',
        ]);
        })
    );
    console.log("Resources in cache. Done");
})

});
