// setup virtual backend
// you don't have to understand this
// this has nothing to do with React ;)

const activatedServiceWorker = new Promise(resolve => {
  const controller = navigator.serviceWorker.controller;
  if (controller) {
    resolve(controller);
  } else {
    navigator.serviceWorker.oncontrollerchange = function() {
      this.controller.onstatechange = function() {
        this.state === 'activated' && resolve(this);
      };
    };
  }
});

export async function setupVirtualServer() {
  /* const swReg = */await navigator.serviceWorker.register('/virtual-server.js');
  // window.onbeforeunload = () => void swReg.unregister();
  return await activatedServiceWorker;
}
