/* ════════════════════════════════════════════════════════════
   WebGL background — spiral galaxy + star field (Three.js r128)
   Reacts to mouse + scroll. Degrades gracefully if unavailable.
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canvas = document.getElementById('webgl');
  if (!canvas || reduced || typeof THREE === 'undefined') {
    if (canvas) canvas.style.display = 'none';
    return;
  }

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    canvas.style.display = 'none';
    return;
  }

  var isSmall = window.matchMedia('(max-width: 860px), (pointer: coarse)').matches;

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 60);
  camera.position.set(0, 1.55, 4.4);

  var group = new THREE.Group();
  scene.add(group);

  /* ── spiral galaxy ── */
  var COUNT = isSmall ? 3200 : 7000;
  var RADIUS = 5.6;
  var BRANCHES = 4;
  var SPIN = 1.25;
  var RANDOMNESS = 0.42;
  var RANDOM_POW = 2.9;
  var inside = new THREE.Color('#a78bfa');
  var outside = new THREE.Color('#0ea5b7');

  var positions = new Float32Array(COUNT * 3);
  var colors = new Float32Array(COUNT * 3);

  for (var i = 0; i < COUNT; i++) {
    var i3 = i * 3;
    var r = Math.random() * RADIUS;
    var branch = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
    var spin = r * SPIN;

    var rndX = Math.pow(Math.random(), RANDOM_POW) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * r;
    var rndY = Math.pow(Math.random(), RANDOM_POW) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * r * 0.55;
    var rndZ = Math.pow(Math.random(), RANDOM_POW) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * r;

    positions[i3] = Math.cos(branch + spin) * r + rndX;
    positions[i3 + 1] = rndY;
    positions[i3 + 2] = Math.sin(branch + spin) * r + rndZ;

    var c = inside.clone().lerp(outside, r / RADIUS);
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;
  }

  var galaxyGeo = new THREE.BufferGeometry();
  galaxyGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  galaxyGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  var galaxyMat = new THREE.PointsMaterial({
    size: isSmall ? 0.02 : 0.015,
    sizeAttenuation: true,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.95
  });

  var galaxy = new THREE.Points(galaxyGeo, galaxyMat);
  galaxy.rotation.x = 0.45;
  group.add(galaxy);

  /* ── distant star dust ── */
  var SCOUNT = isSmall ? 350 : 900;
  var sPos = new Float32Array(SCOUNT * 3);
  for (var s = 0; s < SCOUNT; s++) {
    var s3 = s * 3;
    sPos[s3] = (Math.random() - 0.5) * 26;
    sPos[s3 + 1] = (Math.random() - 0.5) * 16;
    sPos[s3 + 2] = (Math.random() - 0.5) * 18 - 4;
  }
  var starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  var starMat = new THREE.PointsMaterial({
    size: 0.014,
    sizeAttenuation: true,
    depthWrite: false,
    color: 0xbfc3ff,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });
  var stars = new THREE.Points(starGeo, starMat);
  group.add(stars);

  /* ── interaction state ── */
  var mouse = { x: 0, y: 0 };
  var lerped = { x: 0, y: 0 };
  var running = true;

  window.addEventListener('mousemove', function (e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) tick();
  });

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function scrollProgress() {
    var doc = document.documentElement;
    var max = (doc.scrollHeight - window.innerHeight) || 1;
    return Math.min(1, Math.max(0, (window.scrollY || window.pageYOffset || 0) / max));
  }

  var clock = new THREE.Clock();

  function tick() {
    if (!running) return;

    var t = clock.getElapsedTime();
    var p = scrollProgress();

    lerped.x += (mouse.x - lerped.x) * 0.045;
    lerped.y += (mouse.y - lerped.y) * 0.045;

    galaxy.rotation.y = t * 0.045 + p * 1.6;
    stars.rotation.y = -t * 0.008;

    group.rotation.x = lerped.y * 0.09;
    group.rotation.z = lerped.x * 0.04;

    camera.position.x = lerped.x * 0.45;
    camera.position.y = 1.55 - p * 1.1;
    camera.position.z = 4.4 - p * 0.7;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  tick();
})();
