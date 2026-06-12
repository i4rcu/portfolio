/* ════════════════════════════════════════════════════════════
   ABDURRAHMAN NACCAR — portfolio engine
   preloader · lenis · gsap · scramble · tilt · magnetic · i18n
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var hasGSAP = typeof gsap !== 'undefined';
  var hasST = hasGSAP && typeof ScrollTrigger !== 'undefined';

  var i18n = window.AN_I18N;
  var lang = i18n ? i18n.initialLang() : 'en';
  if (i18n) i18n.apply(lang);

  var preloader = document.getElementById('preloader');

  /* ── no-gsap / reduced-motion fallback: just show the page ── */
  if (!hasGSAP || reduced) {
    if (preloader) preloader.style.display = 'none';
    document.body.classList.add('no-anim');
    bindLangButtons(function () {});
    bindBurger(null);
    document.addEventListener('click', function (e) {
      if (e.target.closest('.mm-link')) document.body.classList.remove('menu-open');
    });
    return;
  }

  if (hasST) gsap.registerPlugin(ScrollTrigger);

  /* ════════════ SMOOTH SCROLL (Lenis) ════════════ */
  var lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    if (hasST) lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    lenis.stop(); // locked during preload
  }

  function scrollToTarget(target) {
    if (lenis) lenis.scrollTo(target, { offset: -64, duration: 1.4 });
    else if (typeof target === 'number') window.scrollTo({ top: target, behavior: 'smooth' });
    else target.scrollIntoView({ behavior: 'smooth' });
  }

  /* ════════════ TEXT SPLITTING ════════════ */
  function splitChars(el) {
    var text = el.textContent;
    el.setAttribute('aria-hidden', 'true');
    el.textContent = '';
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.className = 'char';
      span.textContent = text[i] === ' ' ? ' ' : text[i];
      el.appendChild(span);
    }
  }

  function splitWords(el) {
    var text = el.textContent.trim();
    var words = text.split(/\s+/);
    el.textContent = '';
    for (var i = 0; i < words.length; i++) {
      var mask = document.createElement('span');
      mask.className = 'w-mask';
      var w = document.createElement('span');
      w.className = 'w';
      w.textContent = words[i];
      mask.appendChild(w);
      el.appendChild(mask);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    }
  }

  function splitAllWords() {
    var els = document.querySelectorAll('.split-words');
    for (var i = 0; i < els.length; i++) splitWords(els[i]);
  }

  var charEls = document.querySelectorAll('.split-chars');
  for (var c = 0; c < charEls.length; c++) splitChars(charEls[c]);
  splitAllWords();

  /* ════════════ SCRAMBLE TEXT ════════════ */
  var SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#________';

  function TextScramble(el) {
    this.el = el;
    this.frame = 0;
    this.queue = [];
    this.frameRequest = null;
    this.resolve = null;
    this.update = this.update.bind(this);
  }
  TextScramble.prototype.setText = function (newText) {
    var oldText = this.el.textContent;
    var length = Math.max(oldText.length, newText.length);
    var self = this;
    var promise = new Promise(function (resolve) { self.resolve = resolve; });
    this.queue = [];
    for (var i = 0; i < length; i++) {
      var from = oldText[i] || '';
      var to = newText[i] || '';
      var start = Math.floor(Math.random() * 32);
      var end = start + Math.floor(Math.random() * 32);
      this.queue.push({ from: from, to: to, start: start, end: end, char: '' });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  };
  TextScramble.prototype.update = function () {
    var frag = document.createDocumentFragment();
    var buffer = '';
    var complete = 0;
    function flush() {
      if (buffer) { frag.appendChild(document.createTextNode(buffer)); buffer = ''; }
    }
    for (var i = 0; i < this.queue.length; i++) {
      var q = this.queue[i];
      if (this.frame >= q.end) {
        complete++;
        buffer += q.to;
      } else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.28) {
          q.char = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        flush();
        var span = document.createElement('span');
        span.style.opacity = '0.45';
        span.textContent = q.char;
        frag.appendChild(span);
      } else {
        buffer += q.from;
      }
    }
    flush();
    this.el.textContent = '';
    this.el.appendChild(frag);
    if (complete === this.queue.length) {
      if (this.resolve) this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  var roleEl = document.getElementById('scrambleRole');
  var scrambler = roleEl ? new TextScramble(roleEl) : null;
  var roleToken = 0;

  function startRoles() {
    if (!scrambler || !i18n) return;
    roleToken++;
    var myToken = roleToken;
    var roles = i18n.dict[lang].__roles;
    var idx = 0;
    (function next() {
      if (myToken !== roleToken) return;
      scrambler.setText(roles[idx]).then(function () {
        if (myToken !== roleToken) return;
        setTimeout(next, 2600);
      });
      idx = (idx + 1) % roles.length;
    })();
  }

  /* ════════════ INITIAL HIDDEN STATES (covered by preloader) ════════════ */
  gsap.set('.hero-title .char', { yPercent: 115, rotateX: -40, opacity: 0 });
  gsap.set('[data-hero]', { autoAlpha: 0, y: 26 });
  gsap.set('.chip', { autoAlpha: 0, scale: 0.4 });
  gsap.set('.nav', { yPercent: -110 });

  /* ════════════ CUSTOM CURSOR ════════════ */
  if (finePointer) {
    var dot = document.getElementById('cursorDot');
    var ring = document.getElementById('cursorRing');
    if (dot && ring) {
      var dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
      var dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
      var ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
      var ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

      window.addEventListener('mousemove', function (e) {
        dotX(e.clientX); dotY(e.clientY);
        ringX(e.clientX); ringY(e.clientY);
      }, { passive: true });

      document.addEventListener('mouseover', function (e) {
        if (e.target.closest('a, button, [data-hover]')) ring.classList.add('is-hover');
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest('a, button, [data-hover]')) ring.classList.remove('is-hover');
      });
    }
  }

  /* ════════════ MAGNETIC ELEMENTS ════════════ */
  if (finePointer) {
    var magnets = document.querySelectorAll('[data-magnetic]');
    for (var m = 0; m < magnets.length; m++) {
      (function (el) {
        var xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
        var yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
        el.addEventListener('mousemove', function (e) {
          var r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
        });
        el.addEventListener('mouseleave', function () {
          gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.35)' });
        });
      })(magnets[m]);
    }
  }

  /* ════════════ 3D TILT CARDS ════════════ */
  if (finePointer) {
    var tilts = document.querySelectorAll('[data-tilt]');
    for (var t = 0; t < tilts.length; t++) {
      (function (el) {
        var glare = el.querySelector('.tilt-glare');
        el.addEventListener('mousemove', function (e) {
          var r = el.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width;
          var py = (e.clientY - r.top) / r.height;
          gsap.to(el, {
            rotateY: (px - 0.5) * 10,
            rotateX: -(py - 0.5) * 10,
            scale: 1.02,
            transformPerspective: 900,
            duration: 0.55,
            ease: 'power2.out'
          });
          if (glare) {
            glare.style.setProperty('--gx', (px * 100) + '%');
            glare.style.setProperty('--gy', (py * 100) + '%');
          }
        });
        el.addEventListener('mouseleave', function () {
          gsap.to(el, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.9, ease: 'elastic.out(1, 0.45)' });
        });
      })(tilts[t]);
    }
  }

  /* ════════════ NAV / MENU / ANCHORS ════════════ */
  var nav = document.getElementById('nav');

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (document.body.classList.contains('menu-open')) closeMenu();
    scrollToTarget(target);
  });

  var toTop = document.getElementById('toTop');
  if (toTop) toTop.addEventListener('click', function () { scrollToTarget(0); });

  function bindBurger(onToggle) {
    var burger = document.getElementById('burger');
    if (!burger) return;
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      if (onToggle) onToggle(open);
    });
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    if (lenis) lenis.start();
  }

  bindBurger(function (open) {
    var links = document.querySelectorAll('.mm-link');
    if (open) {
      if (lenis) lenis.stop();
      gsap.fromTo(links,
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'expo.out', delay: 0.12, overwrite: true }
      );
    } else {
      if (lenis) lenis.start();
    }
  });

  /* ════════════ LANGUAGE SWITCH ════════════ */
  function bindLangButtons(onSwitch) {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var next = this.getAttribute('data-lang');
        if (next === lang) return;
        lang = next;
        if (i18n) i18n.apply(lang);
        onSwitch(next);
      });
    }
  }

  bindLangButtons(function () {
    splitAllWords();          // re-split translated headings
    rebuildScrollAnims();     // re-create scroll animations on fresh DOM
    startRoles();             // restart scrambler with new role list
  });

  /* ════════════ SCROLL-DRIVEN ANIMATIONS ════════════ */
  var ctx = null;

  function buildScrollAnims() {
    if (!hasST) return;

    ctx = gsap.context(function () {

      /* progress bar */
      gsap.to('#scrollProgress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.35 }
      });

      /* nav background + hide on scroll down */
      ScrollTrigger.create({
        start: 60,
        onToggle: function (self) { nav.classList.toggle('is-scrolled', self.isActive); }
      });
      var lastShown = true;
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: function (self) {
          if (document.body.classList.contains('menu-open')) return;
          var down = self.direction === 1 && self.scroll() > 320;
          if (down === lastShown) {
            lastShown = !down;
            gsap.to(nav, { yPercent: down ? -110 : 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
          }
        }
      });

      /* active nav link per section */
      var sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      sections.forEach(function (id) {
        var sec = document.getElementById(id);
        if (!sec) return;
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 55%',
          end: 'bottom 45%',
          onToggle: function (self) {
            var link = document.querySelector('[data-nav="' + id + '"]');
            if (link) link.classList.toggle('is-active', self.isActive);
          }
        });
      });

      /* hero fades out while scrolling away */
      gsap.to('.hero-main', {
        yPercent: -14, opacity: 0.12, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 35%', scrub: 0.4 }
      });
      gsap.to('.hero-chips', {
        yPercent: -36, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 45%', scrub: 0.4 }
      });

      /* section titles — word cascade */
      document.querySelectorAll('.split-words').forEach(function (el) {
        var words = el.querySelectorAll('.w');
        if (!words.length) return;
        gsap.from(words, {
          yPercent: 120,
          duration: 1.1,
          stagger: 0.045,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 84%' }
        });
      });

      /* generic reveals */
      document.querySelectorAll('[data-reveal]').forEach(function (el) {
        gsap.from(el, {
          y: 56, autoAlpha: 0, duration: 1.15, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 86%' }
        });
      });
      document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
        gsap.from(group.children, {
          y: 48, autoAlpha: 0, duration: 1, stagger: 0.09, ease: 'expo.out',
          scrollTrigger: { trigger: group, start: 'top 86%' }
        });
      });

      /* ghost words drift */
      document.querySelectorAll('.ghost-word').forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-speed') || '8');
        gsap.fromTo(el,
          { xPercent: -50 - speed },
          {
            xPercent: -50 + speed, ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
          }
        );
      });

      /* counters */
      document.querySelectorAll('.counter').forEach(function (el) {
        var target = parseFloat(el.getAttribute('data-count') || '0');
        var obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 1.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: function () { el.textContent = Math.round(obj.v); }
        });
      });

      /* experience timeline line + dots */
      gsap.to('#tlFill', {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline', start: 'top 75%', end: 'bottom 55%', scrub: 0.5 }
      });
      document.querySelectorAll('.tl-dot').forEach(function (d) {
        gsap.from(d, {
          scale: 0, duration: 0.7, ease: 'back.out(2.4)',
          scrollTrigger: { trigger: d, start: 'top 82%' }
        });
      });

      /* project visuals gentle parallax */
      document.querySelectorAll('.project-visual').forEach(function (v) {
        gsap.fromTo(v, { y: 44 }, {
          y: -44, ease: 'none',
          scrollTrigger: { trigger: v, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
        });
      });

      /* language level bars */
      document.querySelectorAll('.bar .fill').forEach(function (f) {
        var lvl = parseFloat(f.getAttribute('data-level') || '50');
        gsap.to(f, {
          width: lvl + '%', duration: 1.5, ease: 'expo.out',
          scrollTrigger: { trigger: f, start: 'top 90%' }
        });
      });

      /* contact ghost scale-in */
      gsap.from('.contact-big-btn', {
        scale: 0.5, autoAlpha: 0, duration: 1.2, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.contact-row', start: 'top 85%' }
      });

    });
  }

  function rebuildScrollAnims() {
    if (!hasST) return;
    if (ctx) ctx.revert();
    buildScrollAnims();
    ScrollTrigger.refresh();
  }

  /* ════════════ PRELOADER → HERO INTRO ════════════ */
  var heroIntro = gsap.timeline({ paused: true });
  heroIntro
    .to('.nav', { yPercent: 0, duration: 1, ease: 'expo.out' }, 0)
    .to('.hero-title .line-1 .char', {
      yPercent: 0, rotateX: 0, opacity: 1, duration: 1.1, stagger: 0.034, ease: 'expo.out'
    }, 0.05)
    .to('.hero-title .line-2 .char', {
      yPercent: 0, rotateX: 0, opacity: 1, duration: 1.1, stagger: 0.034, ease: 'expo.out'
    }, 0.22)
    .to('[data-hero="badge"]', { autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out' }, 0.55)
    .to('[data-hero="roles"]', {
      autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out',
      onComplete: startRoles
    }, 0.7)
    .to('[data-hero="tagline"]', { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 0.82)
    .to('[data-hero="ctas"]', { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 0.94)
    .to('[data-hero="hint"]', { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 1.1)
    .to('.chip', {
      autoAlpha: 1, scale: 1, duration: 1, stagger: 0.09, ease: 'elastic.out(1, 0.55)',
      onComplete: floatChips
    }, 0.75);

  function floatChips() {
    document.querySelectorAll('.float-el').forEach(function (el, i) {
      gsap.to(el, {
        y: '+=' + (10 + (i % 3) * 5),
        rotation: (i % 2 === 0 ? 1 : -1) * 2.2,
        duration: 2.3 + i * 0.35,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    });
  }

  function runPreloader() {
    var countEl = document.getElementById('preCount');
    var barEl = document.getElementById('preBar');
    var num = { v: 0 };

    var tl = gsap.timeline({
      onComplete: function () {
        preloader.style.display = 'none';
        if (lenis) lenis.start();
        heroIntro.play();
        if (hasST) ScrollTrigger.refresh();
      }
    });

    tl.to(num, {
      v: 100,
      duration: 1.9,
      ease: 'power2.inOut',
      onUpdate: function () {
        var v = Math.round(num.v);
        if (countEl) countEl.textContent = v;
        if (barEl) barEl.style.width = v + '%';
      }
    })
      .to('.pre-inner', { autoAlpha: 0, y: -34, duration: 0.55, ease: 'power3.in' }, '+=0.15')
      .to(preloader, { yPercent: -100, duration: 0.95, ease: 'expo.inOut' }, '-=0.18');
  }

  /* ════════════ BOOT ════════════ */
  buildScrollAnims();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { if (hasST) ScrollTrigger.refresh(); });
  }
  window.addEventListener('load', function () { if (hasST) ScrollTrigger.refresh(); });

  runPreloader();

  /* ════════════ CONSOLE SIGNATURE ════════════ */
  try {
    console.log(
      '%c AN. %c Abdurrahman Naccar — Software Engineer %c abdurrahmanyos23@gmail.com ',
      'background:linear-gradient(120deg,#a78bfa,#22d3ee);color:#07070c;font-weight:900;font-size:18px;padding:6px 10px;border-radius:6px 0 0 6px;',
      'background:#0a0a12;color:#f4f4f6;font-size:12px;padding:6px 10px;',
      'background:#0a0a12;color:#22d3ee;font-size:12px;padding:6px 10px;border-radius:0 6px 6px 0;'
    );
  } catch (e) { /* old console */ }

})();
