const testimonials = [
  {
    quote:
      "A masterpiece of emotion. We felt completely unseen by the camera, yet every frame captures exactly how it felt.",
    names: "S. & J.",
    location: "Lake Como",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Cinematic, timeless, and profound. Looking at these films is like reliving the warmest memory of our lives.",
    names: "E. & M.",
    location: "Santorini",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "They understand the architecture of love. Every shadow, every glance, immaculately preserved for the archives.",
    names: "V. & T.",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
];

const phonePattern = /^\+?[\d\s-]{10,15}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nav = document.getElementById("site-nav");
const mobileMenu = document.getElementById("mobile-menu");
const mobileToggle = document.getElementById("menu-toggle");
const mobileClose = document.getElementById("mobile-menu-close");
const heroStars = document.getElementById("hero-stars");
const heroVideo = document.querySelector(".hero-video");
const experienceShell = document.getElementById("experience-video-shell");
const experienceVideo = document.getElementById("experience-video");
const footerYear = document.getElementById("footer-year");
const trustCard = document.getElementById("trust-card");
const trustQuote = document.getElementById("trust-quote");
const trustNames = document.getElementById("trust-names");
const trustLocation = document.getElementById("trust-location");
const trustImage = document.getElementById("trust-image");
const trustPrev = document.getElementById("trust-prev");
const trustNext = document.getElementById("trust-next");
const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");
const formBanner = document.getElementById("form-banner");
const phoneStatus = document.getElementById("phone-status");
const emailStatus = document.getElementById("email-status");
const stickyLayers = document.querySelectorAll("[data-sticky-layer]");

let trustIndex = 0;
let trustTimer;

function insectScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: targetY, behavior: "instant" });
}

window.insectScrollTo = insectScrollTo;

function bindAnchorButtons() {
  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      insectScrollTo(target);
      closeMobileMenu();
    });
  });

  document.querySelectorAll("[data-scroll-top]").forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMobileMenu();
    });
  });
}

function openMobileMenu() {
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
}

function setupMobileMenu() {
  if (!mobileToggle || !mobileClose) return;
  mobileToggle.addEventListener("click", openMobileMenu);
  mobileClose.addEventListener("click", closeMobileMenu);
}

function setupNavScrollState() {
  const toggleNav = () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  };

  toggleNav();
  window.addEventListener("scroll", toggleNav, { passive: true });
}

function createHeroStars() {
  if (!heroStars) return;
  for (let index = 0; index < 20; index += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${5 + Math.random() * 5}s`);
    star.style.setProperty("--delay", `${index * 0.3}s`);
    heroStars.appendChild(star);
  }
}

function syncHeroParallax() {
  if (!heroVideo) return;
  const shift = Math.min(window.scrollY * 0.2, 200);
  heroVideo.style.setProperty("--hero-video-shift", `${shift}px`);
}

function syncExperienceScale() {
  if (!experienceShell) return;
  const rect = experienceShell.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 1;
  const progress = 1 - Math.min(Math.abs(rect.top) / viewportHeight, 1);
  const scale = 0.95 + progress * 0.1;
  experienceShell.style.setProperty("--experience-scale", scale.toFixed(3));
}

function setupExperienceVideo() {
  if (!experienceShell || !experienceVideo) return;
  experienceShell.addEventListener("click", async () => {
    try {
      experienceVideo.muted = false;
      experienceVideo.controls = true;
      experienceShell.classList.add("playing");
      await experienceVideo.play();
    } catch (error) {
      experienceVideo.muted = true;
      await experienceVideo.play().catch(() => {});
    }
  });
}

function renderTestimonial(index) {
  const entry = testimonials[index];
  if (!entry || !trustCard) return;

  trustCard.classList.remove("is-changing");
  void trustCard.offsetWidth;
  trustCard.classList.add("is-changing");

  trustQuote.textContent = entry.quote;
  trustNames.textContent = entry.names;
  trustLocation.textContent = entry.location;
  trustImage.src = entry.image;
  trustImage.alt = entry.names;
}

function advanceTestimonial(direction) {
  trustIndex = (trustIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial(trustIndex);
  restartTrustTimer();
}

function restartTrustTimer() {
  window.clearInterval(trustTimer);
  trustTimer = window.setInterval(() => {
    trustIndex = (trustIndex + 1) % testimonials.length;
    renderTestimonial(trustIndex);
  }, 5000);
}

function setupTestimonials() {
  if (!trustPrev || !trustNext) return;
  renderTestimonial(trustIndex);
  restartTrustTimer();
  trustPrev.addEventListener("click", () => advanceTestimonial(-1));
  trustNext.addEventListener("click", () => advanceTestimonial(1));
}

function setFieldState(field, state, message) {
  const wrapper = field.closest(".field");
  const error = wrapper?.querySelector(`[data-error-for="${field.name}"]`);
  if (!wrapper) return;

  wrapper.classList.remove("is-invalid", "is-valid");
  if (state === "invalid") wrapper.classList.add("is-invalid");
  if (state === "valid") wrapper.classList.add("is-valid");
  if (error) error.textContent = message || "";
}

function updatePhoneStatus(value) {
  if (value === "") {
    phoneStatus.textContent = "";
    return null;
  }
  const valid = phonePattern.test(value);
  phoneStatus.textContent = valid ? "Valid Format" : "Invalid Format";
  phoneStatus.style.color = valid ? "#16a34a" : "#dc2626";
  return valid;
}

function updateEmailStatus(value) {
  if (value === "") {
    emailStatus.textContent = "";
    return null;
  }
  const valid = emailPattern.test(value);
  emailStatus.textContent = valid ? "Valid Format" : "Invalid Format";
  emailStatus.style.color = valid ? "#16a34a" : "#dc2626";
  return valid;
}

function clearFormErrors() {
  contactForm.querySelectorAll(".field").forEach((field) => {
    field.classList.remove("is-invalid");
    const error = field.querySelector(".error");
    if (error) error.textContent = "";
  });
  formBanner.classList.add("hidden");
}

function setupContactForm() {
  if (!contactForm) return;

  const dateInput = contactForm.elements.namedItem("date");
  const today = new Date().toISOString().split("T")[0];
  if (dateInput) dateInput.min = today;

  const phoneInput = contactForm.elements.namedItem("phone");
  const emailInput = contactForm.elements.namedItem("email");

  phoneInput?.addEventListener("input", (event) => {
    const valid = updatePhoneStatus(event.target.value.trim());
    if (valid === null) {
      setFieldState(event.target, "", "");
      return;
    }
    setFieldState(event.target, valid ? "valid" : "invalid", valid ? "" : "Invalid phone format.");
  });

  emailInput?.addEventListener("input", (event) => {
    const valid = updateEmailStatus(event.target.value.trim());
    if (valid === null) {
      setFieldState(event.target, "", "");
      return;
    }
    setFieldState(event.target, valid ? "valid" : "invalid", valid ? "" : "Invalid email format.");
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFormErrors();

    const requiredFields = [
      "service",
      "date",
      "budget",
      "name",
      "phone",
      "email",
      "country",
      "state",
      "city",
    ];

    let hasErrors = false;

    requiredFields.forEach((name) => {
      const field = contactForm.elements.namedItem(name);
      const value = field.value.trim();
      if (!value) {
        setFieldState(field, "invalid", "This field is required.");
        hasErrors = true;
      }
    });

    const phoneValid = updatePhoneStatus(phoneInput.value.trim());
    const emailValid = updateEmailStatus(emailInput.value.trim());

    if (!phoneValid) {
      setFieldState(phoneInput, "invalid", "Invalid phone format.");
      hasErrors = true;
    }

    if (!emailValid) {
      setFieldState(emailInput, "invalid", "Invalid email format.");
      hasErrors = true;
    }

    if (hasErrors) {
      formBanner.classList.remove("hidden");
      window.setTimeout(() => {
        formBanner.classList.add("hidden");
      }, 4000);
      return;
    }

    contactForm.classList.add("hidden");
    contactSuccess.classList.remove("hidden");

    window.setTimeout(() => {
      contactSuccess.classList.add("hidden");
      contactForm.classList.remove("hidden");
      contactForm.reset();
      clearFormErrors();
      phoneStatus.textContent = "";
      emailStatus.textContent = "";
    }, 5000);
  });
}

function updateStickyLayerOffsets() {
  const viewportHeight = window.innerHeight || 0;
  const breathingRoom = viewportHeight * 0.35;
  stickyLayers.forEach((layer) => {
    const height = layer.offsetHeight;
    if (height > viewportHeight) {
      layer.style.top = `${viewportHeight - height - breathingRoom}px`;
    } else {
      layer.style.top = `${-breathingRoom}px`;
    }
  });
}

function setupStickyLayers() {
  updateStickyLayerOffsets();

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      updateStickyLayerOffsets();
    });
    stickyLayers.forEach((layer) => observer.observe(layer));
  }

  window.addEventListener("resize", updateStickyLayerOffsets);
}

function setupScrollEffects() {
  const onScroll = () => {
    syncHeroParallax();
    syncExperienceScale();
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setFooterYear() {
  if (!footerYear) return;
  footerYear.textContent = `Copyright ${new Date().getFullYear()} Vpf. All Rights Reserved.`;
}

bindAnchorButtons();
setupMobileMenu();
setupNavScrollState();
createHeroStars();
setupExperienceVideo();
setupTestimonials();
setupContactForm();
setupStickyLayers();
setupScrollEffects();
setFooterYear();
