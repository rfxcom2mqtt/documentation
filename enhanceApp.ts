/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  if (typeof window !== 'undefined') {
    
    // Add smooth scrolling for anchor links
    router.afterEach(() => {
      Vue.nextTick(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
              // Update URL hash without scrolling
              history.pushState({}, '', this.getAttribute('href'));
            }
          });
        });
      });
    });

    // Add version information to the footer
    Vue.mixin({
      mounted() {
        if (this.$el && this.$el.classList && this.$el.classList.contains('footer')) {
          const versionInfo = document.createElement('div');
          versionInfo.className = 'version-info';
          versionInfo.innerHTML = `<p>Documentation version: ${siteData.version || '1.0.0'}</p>`;
          this.$el.appendChild(versionInfo);
        }
      }
    });
  }
}
