const CACHE_NAME="diwali-masti-shell-v4";
const SHELL=["./","./index.html","./manifest.webmanifest","./assets/diwali/app-icon.svg","./assets/diwali/og-preview.svg","./assets/diwali/hanuman-parallax.webp","./assets/diwali/fahhhhh.mp3"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",event=>{
 const request=event.request;
 if(request.method!=="GET"||new URL(request.url).origin!==self.location.origin)return;
 if(request.destination==="video"||request.headers.has("range"))return;
 event.respondWith(caches.match(request).then(cached=>{
  if(cached)return cached;
  return fetch(request).then(response=>{
   if(response.ok&&response.type==="basic"){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(request,copy))}
   return response;
  }).catch(()=>caches.match("./index.html"));
 }));
});