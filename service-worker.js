                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/03/03/opensource-win-github-ranking-huan-007/","revision":"92da114a2272119b889c377efa74fa75"},{"url":"/2022/02/27/refactoring-friday-bot-with-nestjs-ddd-cqrs/","revision":"9170763a114c8ba80a6b1a2b7ecb7a1a"},{"url":"/2022/02/17/wechaty-puppet-walnut-final-report/","revision":"43b2f003ef23ef02ec93245c6a00ebfc"},{"url":"/2022/02/17/second-intern-juzibot-report/","revision":"4b566b84a06cbea2322a3387f69197ee"},{"url":"/2022/02/10/sales-assistant-final/","revision":"bb66ef6d18d7ec0fe6ed5421ea529d50"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
