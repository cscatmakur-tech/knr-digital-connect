// KNR Digital Connect — minimal service worker
// This file's only job is to satisfy the browser's requirement for a
// registered service worker so the "Install App" prompt becomes available.
// It does not cache your data (your data lives in Google Sheets, not here).

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Pass everything straight through to the network — no offline caching,
  // since this app always needs a live connection to Google Sheets anyway.
  event.respondWith(fetch(event.request));
});
