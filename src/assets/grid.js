// The home page's background answers the pointer: small squares on a grid light up along
// its path and fade, like a signal crossing a matrix. Decoration only: the page works
// without this file. It draws on one canvas behind the content, loads nothing, stores
// nothing, and does not run when the device asks for reduced motion. Code Apache-2.0.
(() => {
  if (!window.matchMedia || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext && canvas.getContext('2d');
  if (!ctx) return;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none';
  document.body.prepend(canvas);

  const CELL = 14, DOT = 6, REACH = 110, FADE = 0.968;
  const TEAL = '15,107,98', ORANGE = '208,120,40';
  let cols = 0, rows = 0, energy = new Float32Array(0), warm = new Uint8Array(0);
  let ratio = 1, running = false, last = null;

  function resize() {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(innerWidth * ratio);
    canvas.height = Math.round(innerHeight * ratio);
    cols = Math.ceil(innerWidth / CELL) + 1;
    rows = Math.ceil(innerHeight / CELL) + 1;
    energy = new Float32Array(cols * rows);
    warm = new Uint8Array(cols * rows);
    for (let i = 0; i < warm.length; i++) warm[i] = Math.random() < 0.12 ? 1 : 0;
  }

  function stir(x, y) {
    const c0 = Math.max(0, Math.floor((x - REACH) / CELL)), c1 = Math.min(cols - 1, Math.ceil((x + REACH) / CELL));
    const r0 = Math.max(0, Math.floor((y - REACH) / CELL)), r1 = Math.min(rows - 1, Math.ceil((y + REACH) / CELL));
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
      const d = Math.hypot(c * CELL - x, r * CELL - y);
      if (d > REACH) continue;
      const near = 1 - d / REACH;
      // nearer cells always light; farther ones only sometimes, which gives the dithered edge
      if (Math.random() < near * near * 1.4) { const i = r * cols + c; if (near > energy[i]) energy[i] = near; }
    }
  }

  function frame() {
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    let alive = false;
    const off = (CELL - DOT) / 2;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const i = r * cols + c, e = energy[i];
      if (e < 0.02) { energy[i] = 0; continue; }
      alive = true;
      ctx.fillStyle = `rgba(${warm[i] ? ORANGE : TEAL},${(e * 0.5).toFixed(3)})`;
      ctx.fillRect(c * CELL - CELL / 2 + off, r * CELL - CELL / 2 + off, DOT, DOT);
      energy[i] = e * FADE;
    }
    if (alive) requestAnimationFrame(frame); else running = false;
  }

  function move(e) {
    const x = e.clientX, y = e.clientY;
    if (last) { // fill the gap between two pointer events so a fast stroke stays a line
      const steps = Math.min(12, Math.ceil(Math.hypot(x - last.x, y - last.y) / 40));
      for (let s = 1; s <= steps; s++) stir(last.x + (x - last.x) * s / steps, last.y + (y - last.y) * s / steps);
    } else stir(x, y);
    last = { x, y };
    if (!running) { running = true; requestAnimationFrame(frame); }
  }

  resize();
  addEventListener('resize', resize, { passive: true });
  addEventListener('pointermove', move, { passive: true });
  addEventListener('pointerdown', move, { passive: true });
  addEventListener('pointerleave', () => { last = null; }, { passive: true });
  document.addEventListener('pointerleave', () => { last = null; });
})();
