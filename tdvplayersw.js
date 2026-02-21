importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey:             'XXXXXXXXXXXXXX',
    projectId:          'tdvremote',
    messagingSenderId:  'XXXXXX',
    appId:              'XXXXXXXXXXXXXXXXXXXX'
});

var messaging;
if (firebase.messaging.isSupported())
    messaging = firebase.messaging();

self.addEventListener('install', function(event)
{
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event)
{
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event)
{
    var request = event.request;
    if ((request.cache === 'only-if-cached') && (request.mode !== 'same-origin'))
        return;
    if (request.url.indexOf('swbypass=true') >= 0)
        return;
    event.respondWith(fetch(request).then(function(response)
        {
            return response;
        },
        function(error)
        {
            return caches.match(request, {ignoreSearch: true, ignoreMethod: true}).then(function(response)
            {
                return response || error;
            });
        }));
});
