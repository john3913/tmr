"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
    if (!ctx) return;
    const c = ctx;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      c.scale(dpr, dpr);
    };
    resize();

    const COUNT = 62;
    const DIST = 155;

    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: 1.4 + Math.random() * 1.6,
      accent: Math.random() < 0.16,
    }));

    let animId: number;

    function draw() {
      c.clearRect(0, 0, W, H);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        if (n.x > W) { n.x = W; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        if (n.y > H) { n.y = H; n.vy = -Math.abs(n.vy); }
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            const t = 1 - d / DIST;
            const isAccent = nodes[i].accent || nodes[j].accent;
            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.lineTo(nodes[j].x, nodes[j].y);
            c.strokeStyle = isAccent
              ? `rgba(26,107,60,${(t * 0.28).toFixed(3)})`
              : `rgba(100,116,139,${(t * 0.11).toFixed(3)})`;
            c.lineWidth = isAccent ? 0.8 : 0.5;
            c.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        if (n.accent) {
          const grd = c.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
          grd.addColorStop(0, "rgba(26,107,60,0.18)");
          grd.addColorStop(1, "rgba(26,107,60,0)");
          c.beginPath();
          c.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
          c.fillStyle = grd;
          c.fill();

          c.beginPath();
          c.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          c.fillStyle = "rgba(26,107,60,0.6)";
          c.fill();
        } else {
          c.beginPath();
          c.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          c.fillStyle = "rgba(148,163,184,0.38)";
          c.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}
