import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CELL = 60;          // grid cell size in px
const BASE_ALPHA = 0.05;  // resting line opacity
const PULSE_ALPHA = 0.6;  // peak line pulse opacity

export default function AnimatedGridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let raf;
    let cols = 0;
    let rows = 0;

    // 2D arrays storing current brightness of each line segment & box cell
    let hSegs = [];
    let vSegs = [];
    let cellGlows = [];

    const gsapCtx = gsap.context(() => {});

    function buildGrid() {
      cols = Math.ceil(canvas.width / CELL) + 2;
      rows = Math.ceil(canvas.height / CELL) + 2;

      hSegs = Array.from({ length: rows + 1 }, () =>
        Array.from({ length: cols }, () => BASE_ALPHA)
      );
      vSegs = Array.from({ length: rows }, () =>
        Array.from({ length: cols + 1 }, () => BASE_ALPHA)
      );
      cellGlows = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
      );
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    }

    // ─── Draw loop ────────────────────────────────────────────────────────────
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle glowing boxes
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const glow = cellGlows[r]?.[c] ?? 0;
          if (glow > 0.003) {
            ctx.fillStyle = `rgba(212,175,55,${glow})`;
            ctx.fillRect(c * CELL, r * CELL, CELL, CELL);
          }
        }
      }

      // Horizontal segments
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          const alpha = hSegs[r]?.[c] ?? BASE_ALPHA;
          if (alpha < 0.005) continue;
          ctx.beginPath();
          ctx.moveTo(c * CELL, r * CELL);
          ctx.lineTo((c + 1) * CELL, r * CELL);
          ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
          ctx.lineWidth = alpha > BASE_ALPHA + 0.08 ? 1.5 : 1;
          ctx.stroke();
        }
      }

      // Vertical segments
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const alpha = vSegs[r]?.[c] ?? BASE_ALPHA;
          if (alpha < 0.005) continue;
          ctx.beginPath();
          ctx.moveTo(c * CELL, r * CELL);
          ctx.lineTo(c * CELL, (r + 1) * CELL);
          ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
          ctx.lineWidth = alpha > BASE_ALPHA + 0.08 ? 1.5 : 1;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    // ─── Pulse animations ─────────────────────────────────────────────────────
    function spawnPulse() {
      gsapCtx.add(() => {
        const isH = Math.random() > 0.5;
        const dir = Math.random() > 0.5 ? 1 : -1;
        const speed = 0.07 + Math.random() * 0.08; // seconds per cell
        const peak = PULSE_ALPHA * (0.55 + Math.random() * 0.45);
        const len = Math.floor(Math.random() * 7) + 4;

        if (isH) {
          const r = Math.floor(Math.random() * (rows + 1));
          if (!hSegs[r]) return;
          const startC = Math.floor(Math.random() * cols);

          for (let i = 0; i < len; i++) {
            const c = startC + i * dir;
            if (c < 0 || c >= cols) break;

            const proxy = { v: hSegs[r][c] || BASE_ALPHA };
            gsap.to(proxy, {
              v: peak,
              duration: speed * 1.4,
              delay: i * speed,
              ease: 'sine.out',
              onUpdate: () => {
                if (hSegs[r]) hSegs[r][c] = proxy.v;
              },
              onComplete: () => {
                gsap.to(proxy, {
                  v: BASE_ALPHA,
                  duration: speed * 3.5,
                  ease: 'sine.inOut',
                  onUpdate: () => {
                    if (hSegs[r]) hSegs[r][c] = proxy.v;
                  },
                });
              },
            });
          }
        } else {
          const c = Math.floor(Math.random() * (cols + 1));
          const startR = Math.floor(Math.random() * rows);

          for (let i = 0; i < len; i++) {
            const r = startR + i * dir;
            if (r < 0 || r >= rows) break;
            if (!vSegs[r]) continue;

            const proxy = { v: vSegs[r][c] || BASE_ALPHA };
            gsap.to(proxy, {
              v: peak,
              duration: speed * 1.4,
              delay: i * speed,
              ease: 'sine.out',
              onUpdate: () => {
                if (vSegs[r]) vSegs[r][c] = proxy.v;
              },
              onComplete: () => {
                gsap.to(proxy, {
                  v: BASE_ALPHA,
                  duration: speed * 3.5,
                  ease: 'sine.inOut',
                  onUpdate: () => {
                    if (vSegs[r]) vSegs[r][c] = proxy.v;
                  },
                });
              },
            });
          }
        }

        // Occasionally pulse a random box perimeter + soft inner glow
        if (Math.random() > 0.55 && rows > 1 && cols > 1) {
          const br = Math.floor(Math.random() * (rows - 1));
          const bc = Math.floor(Math.random() * (cols - 1));
          const boxProxy = { line: BASE_ALPHA, fill: 0 };

          gsap.to(boxProxy, {
            line: peak * 0.85,
            fill: 0.055,
            duration: 0.5,
            ease: 'sine.out',
            onUpdate: () => {
              if (hSegs[br]) hSegs[br][bc] = Math.max(hSegs[br][bc], boxProxy.line);
              if (hSegs[br + 1]) hSegs[br + 1][bc] = Math.max(hSegs[br + 1][bc], boxProxy.line);
              if (vSegs[br]) vSegs[br][bc] = Math.max(vSegs[br][bc], boxProxy.line);
              if (vSegs[br]) vSegs[br][bc + 1] = Math.max(vSegs[br][bc + 1], boxProxy.line);
              if (cellGlows[br]) cellGlows[br][bc] = boxProxy.fill;
            },
            onComplete: () => {
              gsap.to(boxProxy, {
                line: BASE_ALPHA,
                fill: 0,
                duration: 1.2,
                ease: 'sine.inOut',
                onUpdate: () => {
                  if (hSegs[br]) hSegs[br][bc] = boxProxy.line;
                  if (hSegs[br + 1]) hSegs[br + 1][bc] = boxProxy.line;
                  if (vSegs[br]) vSegs[br][bc] = boxProxy.line;
                  if (vSegs[br]) vSegs[br][bc + 1] = boxProxy.line;
                  if (cellGlows[br]) cellGlows[br][bc] = boxProxy.fill;
                },
              });
            },
          });
        }
      });
    }

    function schedulePulses() {
      for (let i = 0; i < 8; i++) {
        setTimeout(spawnPulse, i * 160);
      }
      return setInterval(() => {
        const burst = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < burst; i++) {
          setTimeout(spawnPulse, i * 120);
        }
      }, 280);
    }

    resize();
    draw();
    const interval = schedulePulses();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
      ro.disconnect();
      gsapCtx.revert();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{
        maskImage:
          'radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 100%)',
      }}
    />
  );
}
