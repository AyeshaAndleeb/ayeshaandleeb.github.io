/* ==========================================================================
   Ayesha Andleeb — academic homepage
   Progressive enhancement only: the page works with JavaScript disabled.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Colour theme ---------- */
  function initTheme() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    function currentTheme() {
      var set = document.documentElement.getAttribute("data-theme");
      if (set === "light" || set === "dark") return set;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var btn = document.getElementById("nav-toggle");
    var menu = document.getElementById("nav-mobile");
    if (!btn || !menu) return;

    function close() {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
    }

    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
    });

    Array.prototype.forEach.call(menu.querySelectorAll("a"), function (a) {
      a.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) { close(); btn.focus(); }
    });
  }

  /* ---------- Highlight the section being read ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-desktop .nav-link"));
    if (!links.length) return;

    var targets = links.map(function (link) {
      var href = link.getAttribute("href") || "";
      return { link: link, el: href.charAt(0) === "#" ? document.getElementById(href.slice(1)) : null };
    }).filter(function (t) { return t.el; });

    if (!targets.length) return;

    function update() {
      var probe = window.scrollY + 140;
      var active = targets[0];
      targets.forEach(function (t) { if (t.el.offsetTop <= probe) active = t; });

      // At the very bottom, the last section is the one in view.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        active = targets[targets.length - 1];
      }

      targets.forEach(function (t) {
        if (t === active) t.link.setAttribute("aria-current", "true");
        else t.link.removeAttribute("aria-current");
      });
    }

    var queued = false;
    window.addEventListener("scroll", function () {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function () { update(); queued = false; });
    }, { passive: true });

    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  initTheme();
  initNav();
  initScrollSpy();
  initYear();
})();
