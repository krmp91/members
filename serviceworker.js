
const cacheName = 'cache-members';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/members/', '/members/index.html', '/members/mystyle.css/', '/javascript.js/', '/members/members.json/', '/members/morten.png', '/members/nina.png', '/members/olivia.png']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});