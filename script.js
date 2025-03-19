window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(
    ".portfolio-content, .interface-content"
  );
  const textContent = document.querySelector(".text-content");
  const maskedTexts = document.querySelectorAll(
    ".text-mask, .intro-title, .interface-title, .interview-title, .personas-title, .storyboard-title, .lessons-title"
  );

  const scrolled = window.scrollY;
  const rate = scrolled * 0.15;

  // Moving text masks based on scrolling
  maskedTexts.forEach((text) => {
    text.style.backgroundPosition = `${50 + rate}% ${50 + rate}%`;
  });

  const textRect = textContent.getBoundingClientRect();
  const isTitleVisible =
    textRect.top <= window.innerHeight / 2 &&
    textRect.bottom >= window.innerHeight / 2;

  if (isTitleVisible) {
    document.body.style.backgroundColor = "#FAFCF0";
    sections.forEach((section) => {
      section.style.opacity = "0";
    });
  } else {
    document.body.style.backgroundColor = "#000000";
    sections.forEach((section) => {
      section.style.opacity = "1";
    });
  }

  if (isTitleVisible) {
    textContent.style.opacity = "1";
  } else {
    textContent.style.opacity = "0";
  }
});

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("header-visible");
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }
);

const contentObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("content-visible");
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(
    ".intro-title, .interface-title, .interview-title, .personas-title, .storyboard-title, .lessons-title"
  );
  headers.forEach((header) => headerObserver.observe(header));

  const contentElements = document.querySelectorAll(
    ".context-description, .interface-description, .interview-description, .personas-description, .storyboard-description, .lessons-description, .subheading, .question-list, .accordion, .interface-sketch, .storyboard-image, .personas-container-1, .personas-container-2, .website-image"
  );
  contentElements.forEach((element) => contentObserver.observe(element));

  // Accordion functionality
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const accordionItem = button.parentElement;
      const isActive = accordionItem.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
      });

      if (!isActive) {
        accordionItem.classList.add("active");
      }
    });
  });
});
