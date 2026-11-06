(() => {
  const carousel = document.querySelector(".cabin-carousel");
  if (!carousel) return;

  const slides = [
    {
      title: "Feature: Sliding Door",
      copy: "Calm Cabin is designed not only for people with ASD but also for people who need to distance from the noise and overstimulating stimuli in the train. The cabin itself is separated from any other cabins to block the noise and visual elements that might lead people to stress.",
      image: "assets/calm-cabin-door.jpg",
      alt: "Calm Cabin sliding door",
    },
    {
      title: "Feature: Tactile Handles and Poles",
      copy: "Earthy muted tones are applied for visual comfort; other elements such as acoustic padding and squishy handles are implemented to help commuters redirect their attention away from triggers.",
      image: "assets/calm-cabin-tactile-handles.jpg",
      alt: "Calm Cabin tactile handles and poles",
    },
    {
      title: "Feature: Lava Lamp Display",
      copy: "This is the lava lamp display, which helps to gradually focus on slow and calming visuals in order to avoid other stimuli such as vivid coloured advertisements. For the same reason, this cabin is ad-free.",
      image: "assets/calm-cabin-lava-lamp.png",
      alt: "Calm Cabin lava lamp display",
    },
  ];

  const title = document.getElementById("cabin-feature-title");
  const copy = document.getElementById("cabin-feature-copy");
  const image = document.getElementById("cabin-carousel-image");
  const dots = [...carousel.querySelectorAll(".cabin-carousel-dot")];
  let activeIndex = 0;
  let touchStart = null;

  function updateDots() {
    dots.forEach((dot) => {
      const isActive = Number(dot.dataset.slideIndex) === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
      dot.setAttribute("aria-pressed", String(isActive));
      const indicator = dot.querySelector("img");
      if (indicator) {
        indicator.src = isActive
          ? "assets/carousel-dot-pink.svg"
          : "assets/carousel-dot-white.svg";
      }
    });
  }

  function showSlide(index) {
    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === activeIndex) return;

    activeIndex = nextIndex;
    const slide = slides[activeIndex];

    title.textContent = slide.title;
    copy.textContent = slide.copy;
    image.src = slide.image;
    image.alt = slide.alt;
    updateDots();
  }

  updateDots();

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slideIndex));
    });
  });

  const viewport = carousel.querySelector(".cabin-carousel-viewport");
  viewport.addEventListener("touchstart", (event) => {
    if (event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });

  viewport.addEventListener("touchend", (event) => {
    if (!touchStart || event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    touchStart = null;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    showSlide(activeIndex + (deltaX < 0 ? 1 : -1));
  }, { passive: true });

  viewport.addEventListener("touchcancel", () => {
    touchStart = null;
  }, { passive: true });

  slides.slice(1).forEach((slide) => {
    const preload = new Image();
    preload.src = slide.image;
  });
})();
