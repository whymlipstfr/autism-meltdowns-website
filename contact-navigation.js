(() => {
  document.querySelectorAll('[data-instant-contact-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) {
        event.preventDefault();
        sessionStorage.removeItem('instant-contact-navigation');
        const menuState = document.querySelector('#menu-state');
        if (menuState) menuState.checked = false;

        const root = document.documentElement;
        root.style.scrollBehavior = 'auto';
        window.location.hash = destination.hash;
        document.querySelector('#contact')?.scrollIntoView();
        requestAnimationFrame(() => root.style.removeProperty('scroll-behavior'));
        return;
      }

      sessionStorage.setItem('instant-contact-navigation', 'true');
    });
  });
})();
