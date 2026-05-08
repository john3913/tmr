"use client";
import { useEffect, useRef } from "react";

interface Ring {
  r: number;
  maxR: number;
  color: [number, number, number];
}

interface Source {
  xFrac: number;
  yFrac: number;
  color: [number, number, number];
  rings: Ring[];
  timer: number;
  interval: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: [number, number, number];
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
    if (!ctx) return;
    const c2d: CanvasRenderingContext2D = ctx;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      c2d.scale(dpr, dpr);
    };
    resize();

    const GRID = 72;
    const GREEN: [number, number, number] = [34, 197, 94];
    const TEAL: [number, number, number] = [14, 165, 233];

    const sources: Source[] = [
      { xFrac: 0.22, yFrac: 0.42, color: GREEN, rings: [], timer: 0, interval: 100 },
      { xFrac: 0.78, yFrac: 0.58, color: TEAL, rings: [], timer: 55, interval: 120 },
    ];

    const particles: Particle[] = [];
    let frame = 0;
    let animId: number;

    function spawnParticle() {
      const isGreen = Math.random() > 0.4;
      const color: [number, number, number] = isGreen ? GREEN : TEAL;
      const horiz = Math.random() > 0.5;
      if (horiz) {
        const row = Math.round(Math.random() * Math.ceil(H / GRID)) * GRID;
        const goRight = Math.random() > 0.5;
        const speed = 1.5 + Math.random() * 1.5;
        particles.push({ x: goRight ? 0 : W, y: row, vx: goRight ? speed : -speed, vy: 0, life: 0, maxLife: W * 0.5 + Math.random() * W * 0.3, color });
      } else {
        const col = Math.round(Math.random() * Math.ceil(W / GRID)) * GRID;
        const goDown = Math.random() > 0.5;
        const speed = 1.5 + Math.random() * 1.5;
        particles.push({ x: col, y: goDown ? 0 : H, vx: 0, vy: goDown ? speed : -speed, life: 0, maxLife: H * 0.5 + Math.random() * H * 0.3, color });
      }
    }

    for (let i = 0; i < 18; i++) spawnParticle();

    function rgba(c: [number, number, number], a: number) {
      return `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;
    }

    function draw() {
      c2d.clearRect(0, 0, W, H);

      // Grid dots
      for (let x = 0; x <= W; x += GRID) {
        for (let y = 0; y <= H; y += GRID) {
          c2d.beginPath();
          c2d.arc(x, y, 1, 0, Math.PI * 2);
          c2d.fillStyle = "rgba(34,197,94,0.18)";
          c2d.fill();
        }
      }

      // Grid lines
      c2d.lineWidth = 0.5;
      for (let x = 0; x <= W; x += GRID) {
        c2d.beginPath();
        c2d.moveTo(x, 0);
        c2d.lineTo(x, H);
        c2d.strokeStyle = "rgba(34,197,94,0.05)";
        c2d.stroke();
      }
      for (let y = 0; y <= H; y += GRID) {
        c2d.beginPath();
        c2d.moveTo(0, y);
        c2d.lineTo(W, y);
        c2d.strokeStyle = "rgba(34,197,94,0.05)";
        c2d.stroke();
      }

      // Sources: rings + pulse
      for (const src of sources) {
        const sx = src.xFrac * W;
        const sy = src.yFrac * H;

        src.timer++;
        if (src.timer >= src.interval) {
          src.timer = 0;
          const maxR = Math.max(W, H) * 0.65;
          for (let i = 0; i < 3; i++) {
            src.rings.push({ r: i * 18, maxR, color: src.color });
          }
        }

        for (let i = src.rings.length - 1; i >= 0; i--) {
          const ring = src.rings[i];
          ring.r += 1.2;
          const alpha = 0.4 * Math.max(0, 1 - ring.r / ring.maxR);
          c2d.beginPath();
          c2d.arc(sx, sy, ring.r, 0, Math.PI * 2);
          c2d.strokeStyle = rgba(ring.color, alpha);
          c2d.lineWidth = 1;
          c2d.stroke();
          if (ring.r >= ring.maxR) src.rings.splice(i, 1);
        }

        // Pulse dot
        const pulse = 0.7 + 0.3 * Math.sin(frame * 0.04 + src.xFrac * 10);
        const grd = c2d.createRadialGradient(sx, sy, 0, sx, sy, 24 * pulse);
        grd.addColorStop(0, rgba(src.color, 0.5));
        grd.addColorStop(0.3, rgba(src.color, 0.15));
        grd.addColorStop(1, rgba(src.color, 0));
        c2d.beginPath();
        c2d.arc(sx, sy, 24 * pulse, 0, Math.PI * 2);
        c2d.fillStyle = grd;
        c2d.fill();

        c2d.beginPath();
        c2d.arc(sx, sy, 3, 0, Math.PI * 2);
        c2d.fillStyle = rgba(src.color, 0.9);
        c2d.fill();
      }

      // Particles with trails
      if (frame % 22 === 0 && particles.length < 28) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life += Math.abs(p.vx) + Math.abs(p.vy);

        const t = p.life / p.maxLife;
        const alpha = t < 0.15 ? t / 0.15 : t > 0.8 ? (1 - t) / 0.2 : 1;

        // Trail gradient
        const trailLen = 50;
        const tx = p.x - p.vx * (trailLen / Math.max(Math.abs(p.vx), 0.01));
        const ty = p.y - p.vy * (trailLen / Math.max(Math.abs(p.vy), 0.01));
        const grad = c2d.createLinearGradient(tx, ty, p.x, p.y);
        grad.addColorStop(0, rgba(p.color, 0));
        grad.addColorStop(1, rgba(p.color, alpha * 0.7));
        c2d.beginPath();
        c2d.moveTo(tx, ty);
        c2d.lineTo(p.x, p.y);
        c2d.strokeStyle = grad;
        c2d.lineWidth = 1.5;
        c2d.stroke();

        // Head dot
        c2d.beginPath();
        c2d.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        c2d.fillStyle = rgba(p.color, alpha);
        c2d.fill();

        // Glow
        const glow = c2d.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10);
        glow.addColorStop(0, rgba(p.color, alpha * 0.35));
        glow.addColorStop(1, rgba(p.color, 0));
        c2d.beginPath();
        c2d.arc(p.x, p.y, 10, 0, Math.PI * 2);
        c2d.fillStyle = glow;
        c2d.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      frame++;
      animId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-90" />;
}
