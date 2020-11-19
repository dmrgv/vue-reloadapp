function loadScript(options = {}) {
  if (!options.ver) return;

  // console.log('app ver: ', options.ver)

  const oldHref = document.location.href

  window.addEventListener('click', () => {
    if (window.needReloadApp) {
      const bodyList = document.querySelector("body")
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (oldHref !== document.location.href) {
            delete window.needReloadApp
            window.location.reload()
          }
        }
      })

      const config = {
        childList: true,
        subtree: true
      };

      observer.observe(bodyList, config);
    }
  });

  const oldVer = localStorage.getItem("ver")
  if (oldVer) {
    if(oldVer !== options.ver) {
      window.needReloadApp = true
    }
  }
  localStorage.setItem('ver', options.ver);
}


export default {
  install(Vue, options) {

    loadScript(options);
  },
};
