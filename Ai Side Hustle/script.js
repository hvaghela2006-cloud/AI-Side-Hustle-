/* ============================================================
   THE AI SIDE HUSTLE BLUEPRINT — site script
   Handles: CTA link wiring, sticky mobile CTA visibility,
   scroll-reveal on the roadmap, and FAQ accordion behavior.
   ============================================================ */

// -----------------------------------------------------------
// 1. CTA / DOWNLOAD LINK CONFIG
// Replace these two values with your real URLs. Every button
// with the matching data attribute updates automatically.
// -----------------------------------------------------------
const PAYMENT_CHECKOUT_URL = "https://rzp.io/rzp/XrM9nVfe";
const DOWNLOAD_URL = "YOUR_EBOOK_DOWNLOAD_URL";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-checkout-link]").forEach((el) => {
    el.setAttribute("href", PAYMENT_CHECKOUT_URL);
  });
  document.querySelectorAll("[data-download-link]").forEach((el) => {
    el.setAttribute("href", DOWNLOAD_URL);
  });

  // -----------------------------------------------------------
  // 2. Sticky mobile CTA — appears after the hero has scrolled
  //    past, hides near the final CTA to avoid stacking CTAs.
  // -----------------------------------------------------------
  const stickyCta = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero");
  if (stickyCta && hero) {
    const io = new IntersectionObserver(
      ([entry]) => {
        stickyCta.classList.toggle("visible", !entry.isIntersecting);
      },
      { rootMargin: "-10% 0px 0px 0px" }
    );
    io.observe(hero);
  }

  // -----------------------------------------------------------
  // 3. Scroll reveal for the 30-day roadmap steps
  // -----------------------------------------------------------
  const steps = document.querySelectorAll(".road-step");
  if (steps.length) {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in-view"), i * 90);
            stepObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    steps.forEach((step) => stepObserver.observe(step));
  }
});
