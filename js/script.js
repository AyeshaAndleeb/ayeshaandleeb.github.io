/* ──────────────────────────────────────────────
   script.js  –  Ayesha Andleeb academic portfolio
   ────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ─── 0. URL map (replaces @@key@@ placeholders) ─── */
  var URLS = {
    email:          "mailto:ayeshaandleeb129@gmail.com",
    linkedin:       "https://www.linkedin.com/in/ayesha129",
    leetcode:       "http://leetcode.com/u/Ayesha-Andleeb/",
    github:         "https://github.com/AyeshaAndleeb",
    h_stanford:     "https://www.linkedin.com/posts/ayesha129_stanford-codeinplace-stanforduniversity-share-7450402913455362048-bxoU/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    h_harvard:      "https://www.linkedin.com/feed/update/urn:li:activity:7185224145339572225/",
    h_berkeley:     "https://drive.google.com/file/d/1Sfu-y9ZDYBrjdW5V2eRYLKSw_aWjBbHi/view?usp=sharing",
    h_webinar:      "https://www.linkedin.com/posts/ayesha129_speakerexperience-teachingjourney-icodeguru-activity-7355064020946640896-MzMB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    h_meta:         "https://www.linkedin.com/posts/ayesha-andleeb_metahackercup-competitiveprogramming-codingjourney-activity-7384845490753970176-bqEN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    h_codestral:    "https://www.linkedin.com/posts/ayesha-andleeb-262352278_thrilled-to-announce-our-3rd-place-win-activity-7228051381528535040-d2ja?utm_source=share&utm_medium=member_desktop",
    h_aoc:          "https://www.linkedin.com/feed/update/urn:li:activity:7389592475776204800/",
    uosahiwal:      "https://www.uosahiwal.edu.pk/",
    stanford_cert:  "https://digitalcredential.stanford.edu/check/201F9DE00B303B436AD4FCD6DE24CBFB16CCD4B5CB7075E5EBA7FBA73E3558D2RGxiTWpzNG1WcGFoOUNaaDFsNVZwRkxxUi9BNzh3NmU0VXp4K3QwMUpnbDA0ZVl3",
    pakangels:      "https://www.linkedin.com/company/pakangels",
    pakangels_post: "https://www.linkedin.com/posts/ayesha129_generativeai-streamlit-pakangels-activity-7369825777887907840-Fq_3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    iqrafund:       "https://www.iqrafund.org/",
    iqrafund_post:  "https://www.linkedin.com/posts/ayesha129_empowerthrougheducation-pythonprogramming-activity-7276831442691645440-BEoE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    icodeguru_sheet:"https://docs.google.com/spreadsheets/d/1Al3OutQFs-NJSh778KNZ2yAkHfPWnBZJPwmaogSpC_I/edit?usp=sharing",
    t_aiapp:        "https://www.linkedin.com/posts/ayesha129_%F0%9D%90%88-%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%A5%F0%9D%90%B2-%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%9D-%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%9E-%F0%9D%90%A8%F0%9D%90%A9%F0%9D%90%A9%F0%9D%90%A8%F0%9D%90%AB%F0%9D%90%AD%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%B2-activity-7352298446919254017-Fk07?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    t_calico:       "https://www.linkedin.com/posts/ayesha129_github-ayeshaandleebuc-berkley-coding-competition-activity-7310348491979943939-LEPK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    t_oop:          "https://www.linkedin.com/posts/ayesha-andleeb_linkedin-icodeguru-oopsconcepts-activity-7164960431432843265-TB5w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    t_stanford:     "https://www.linkedin.com/posts/ayesha129_%F0%9D%90%84%F0%9D%90%B1%F0%9D%90%9C%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%9D-%F0%9D%90%AD%F0%9D%90%A8-%F0%9D%90%86%F0%9D%90%A2%F0%9D%90%AF%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%A4-activity-7307003926539595777-u4kp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    t_meta:         "https://www.linkedin.com/posts/ayesha129_metaabrhackerabrcupabr2024-hayatianabrcomputingabrsociety-activity-7239457700823072769-MMP1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOux-oBPoy_p4NpSxIaQzpFRbLs1IMnN-0",
    mediscan:       "https://github.com/AyeshaAndleeb/MediScan-smart-medical-report-analyzer",
    phishing:       "https://github.com/AyeshaAndleeb/Phising-website-detection-system-ml",
    traffic:        "https://github.com/AyeshaAndleeb/computer-vision-powered-traffic-sign-recognition-system",
    smartlearn:     "https://lablab.ai/event/co-creating-with-gpt-5/ai-mavericks/smartlearn",
    genegazer:      "https://lablab.ai/event/code-craft-ai-x-dev-hackathon/goat-trae-hack/genegazer"
  };

  /* Replace every @@key@@ in the document + JSON-LD */
  function resolveURLs() {
    var html = document.documentElement.innerHTML;
    Object.keys(URLS).forEach(function (key) {
      html = html.split("@@" + key + "@@").join(URLS[key]);
    });
    document.documentElement.innerHTML = html;
  }

  /* ─── 1. Render project cards ─── */
  function renderProjects() {
    if (typeof PROJECTS === "undefined") return;

    var containers = {
      research:   document.getElementById("projects-research"),
      hackathon:  document.getElementById("projects-hackathon"),
      additional: document.getElementById("projects-additional")
    };

    PROJECTS.forEach(function (p) {
      var target = containers[p.section];
      if (!target) return;

      /* resolve @@key@@ inside project link values */
      var links = {};
      if (p.links) {
        Object.keys(p.links).forEach(function (k) {
          var v = p.links[k];
          var m = v.match(/^@@(.+?)@@$/);
          links[k] = m && URLS[m[1]] ? URLS[m[1]] : v;
        });
      }

      var linkHtml = "";
      if (links.github)  linkHtml += '<a class="link" href="' + links.github + '" target="_blank" rel="noopener noreferrer">GitHub repository</a>';
      if (links.demo)    linkHtml += (linkHtml ? " · " : "") + '<a class="link" href="' + links.demo + '" target="_blank" rel="noopener noreferrer">Project page</a>';
      if (links.paper)   linkHtml += (linkHtml ? " · " : "") + '<a class="link" href="' + links.paper + '" target="_blank" rel="noopener noreferrer">Paper / docs</a>';

      var resultsHtml = "";
      if (p.results && p.results.length) {
        resultsHtml = "<h4>Key Results</h4><ul>" + p.results.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>";
      }

      var techHtml = "";
      if (p.tech && p.tech.length) {
        techHtml = '<div class="tech">' + p.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>";
      }

      var card = document.createElement("details");
      card.className = "project reveal" + (p.featured ? " is-featured" : "");
      card.id = p.id;

      card.innerHTML =
        "<summary>" +
          '<p class="eyebrow">' + p.area + "</p>" +
          '<h3 class="mt-2 font-serif text-xl font-semibold sm:text-2xl">' + p.title + "</h3>" +
          '<p class="mt-2 text-muted leading-relaxed">' + p.overview + "</p>" +
          (linkHtml ? '<p class="mt-3 text-sm">' + linkHtml + "</p>" : "") +
          '<p class="toggle mt-4"></p>' +
        "</summary>" +
        '<div class="p-body">' +
          "<h4>Problem</h4><p>" + p.problem + "</p>" +
          "<h4>Approach</h4><p>" + p.approach + "</p>" +
          resultsHtml +
          techHtml +
        "</div>";

      target.appendChild(card);
    });

    /* show additional wrapper if populated */
    var addWrap = document.getElementById("projects-additional-wrap");
    if (addWrap && containers.additional && containers.additional.children.length) {
      addWrap.classList.remove("hidden");
    }
  }

  /* ─── 2. Mobile nav toggle ─── */
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

  /* ─── 3. Scroll-reveal (IntersectionObserver) ─── */
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

  /* ─── 4. Active nav highlight ─── */
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

  /* ─── 5. Footer year ─── */
  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ─── Boot ─── */
  resolveURLs();
  renderProjects();
  initMobileNav();
  initReveal();
  initActiveNav();
  setYear();
})();
