(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.colour-mode-toggle');
  const stateLabel = document.querySelector('.colour-mode-label');
  if (!toggle) return;

  const storageKey = 'site-colour-mode';

  const readSavedMode = () => {
    try {
      return localStorage.getItem(storageKey) === 'calm' ? 'calm' : 'vivid';
    } catch {
      return 'vivid';
    }
  };

  const saveMode = (mode) => {
    try {
      localStorage.setItem(storageKey, mode);
    } catch {
      // The selected mode still applies for this page if storage is unavailable.
    }
  };

  const setMode = (mode, persist = false) => {
    const isCalm = mode === 'calm';
    root.dataset.colourMode = isCalm ? 'calm' : 'vivid';
    const stateName = isCalm ? 'Calm' : 'Vivid';
    if (stateLabel) stateLabel.textContent = stateName;
    toggle.setAttribute('aria-checked', String(isCalm));
    toggle.setAttribute('aria-label', `Colours mode: ${stateName}`);
    toggle.setAttribute('title', stateName);
    if (persist) saveMode(isCalm ? 'calm' : 'vivid');
  };

  setMode(readSavedMode());
  toggle.addEventListener('click', () => {
    setMode(root.dataset.colourMode === 'calm' ? 'vivid' : 'calm', true);
  });
})();
