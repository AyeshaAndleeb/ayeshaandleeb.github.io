/* ──────────────────────────────────────────────
   script.js  –  Ayesha Andleeb academic portfolio
   ────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ─── 1. Mobile nav toggle ─── */
  function initMobileNav() {
    var btn  = document.getElementById("nav-toggle");
    var menu = document.getElementById("mobile-nav");
    if (!btn || !menu) return;

    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("hidden") === false;
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
    });

    /* close on link tap */
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Menu";
      });
    });
  }

  /* ─── 2. Scroll-reveal (IntersectionObserver) ─── */
  function initReveal() {
    document.documentElement.classList.add("js");

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
  }

  /* ─── 3. Active nav highlight ─── */
  function initActiveNav() {
    var links = document.querySelectorAll("#site-header nav:not(#mobile-nav) .nav-link");
    var sections = [];

    links.forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.startsWith("#")) {
        var el = document.getElementById(id.substring(1));
        if (el) sections.push({ el: el, link: a });
      }
    });

    if (!sections.length) return;

    function update() {
      var scrollY = window.scrollY + 120;
      var current = null;
      sections.forEach(function (s) { if (s.el.offsetTop <= scrollY) current = s; });
      links.forEach(function (a) { a.classList.remove("active"); });
      if (current) current.link.classList.add("active");
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(function () { update(); ticking = false; }); ticking = true; }
    });
    update();
  }

  /* ─── 4. Footer year ─── */
  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ─── Boot ─── */
  initMobileNav();
  initReveal();
  initActiveNav();
  setYear();
})();
