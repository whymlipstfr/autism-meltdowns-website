(() => {
  const carousel = document.querySelector(".support-for-self .support-image-pair");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("img[data-support-slide]"));
  const buttons = Array.from(carousel.querySelectorAll("button[data-support-slide]"));
  const desktopLayout = window.matchMedia("(min-width: 600px)");
  const dotPink = "assets/carousel-dot-pink.svg";
  const dotWhite = "assets/carousel-dot-white.svg";
  let activeIndex = 0;
  let pointerStartX = null;

  const selectSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      if (desktopLayout.matches) {
        slide.setAttribute("aria-hidden", String(!isActive));
      } else {
        slide.removeAttribute("aria-hidden");
      }
    });

    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === activeIndex;
      button.setAttribute("aria-current", String(isActive));
      button.setAttribute("aria-pressed", String(isActive));
      const icon = button.querySelector("img");
      if (icon) icon.src = isActive ? dotPink : dotWhite;
    });
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => selectSlide(index));
  });

  carousel.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    pointerStartX = event.clientX;
  });

  carousel.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 40) return;
    selectSlide(activeIndex + (distance < 0 ? 1 : -1));
  });

  carousel.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });
  desktopLayout.addEventListener("change", () => selectSlide(activeIndex));
  selectSlide(0);
})();
