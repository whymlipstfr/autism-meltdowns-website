(() => {
  document.querySelectorAll('[data-instant-home-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      sessionStorage.setItem('instant-home-navigation', 'true');
    });
  });
})();
