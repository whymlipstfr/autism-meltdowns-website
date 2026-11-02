(() => {
  const progress = document.querySelector('.scroll-progress');
  if (!progress) return;

  const updateProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollableHeight > 0
      ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
      : 100;

    progress.style.setProperty('--scroll-progress', `${percent}%`);
    progress.setAttribute('aria-valuenow', String(Math.round(percent)));
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
