(() => {
  const drawer = document.getElementById("train-drawer");
  if (!drawer) return;

  const toggle = drawer.querySelector(".train-drawer-toggle");
  const content = drawer.querySelector(".train-drawer-content");
  const label = toggle.querySelector(".visually-hidden");

  toggle.addEventListener("click", () => {
    const isOpen = drawer.dataset.open !== "true";
    drawer.dataset.open = String(isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    content.setAttribute("aria-hidden", String(!isOpen));
    content.toggleAttribute("inert", !isOpen);
    label.textContent = isOpen
      ? "Close Train Scenario Activity menu"
      : "Open Train Scenario Activity menu";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || drawer.dataset.open !== "true") return;
    drawer.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    content.setAttribute("inert", "");
    label.textContent = "Open Train Scenario Activity menu";
    toggle.focus();
  });
})();
