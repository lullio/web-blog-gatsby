export const trackPWAInstall = () => {
   if (typeof window === 'undefined') return;
 
   window.addEventListener('beforeinstallprompt', (e) => {
     e.preventDefault();
     window.deferredPrompt = e;
   });
 
   window.addEventListener('appinstalled', () => {
     window.deferredPrompt = null;
     window.dataLayer.push({
       event: 'pwa_install',
       category: 'PWA',
       action: 'install',
       label: 'App Installed',
     });
   });
 };