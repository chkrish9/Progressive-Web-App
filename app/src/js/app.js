var deferredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
}
  
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/serviceworker.js')
    //.register('/serviceworker.js', { scope : '/help/' }) -- other way of using register -- service worker scope restriction to help folder
    .then(function(){
        console.log('Service worker registered');
    });
}

window.addEventListener("beforeinstallprompt", function(e){
 console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});