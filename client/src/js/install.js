const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// A click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return console.log('Already Installed!');
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// A handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  window.deferredPrompt = null;
});
