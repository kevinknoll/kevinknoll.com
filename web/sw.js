'use strict';

var cachename = 'kevk-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cachename).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/css/home.css',
        '/js/home.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cachename).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          return response;
        });
      });
    })
  );
});
