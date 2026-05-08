"use client";
import { useEffect, useRef } from "react";

type Tier = "regular" | "accent" | "focal";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseR: number;
  tier: Tier;
  phase: number;
  alpha: number;
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

    const DIST = 168;

    function makeNode(tier: Tier): Node {
      const speed = tier === "focal" ? 0.20 : tier === "accent" ? 0.40 : 0.54;
      const baseR = tier === "focal"
        ? 4.5 + Math.random() * 2.5
        : tier === "accent"
        ? 2.2 + Math.random() * 1.8
        : 1.2 + Math.random() * 1.6;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        baseR,
        tier,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.22 + Math.random() * 0.18,
      };
    }

    const nodes: Node[] = [
      ...Array.from({ length: 5 },  () => makeNode("focal")),
      ...Array.from({ length: 14 }, () => makeNode("accent")),
      ...Array.from({ length: 52 }, () => makeNode("regular")),
    ];

    let animId: number;
    let frame = 0;

    // Layered radial glow: outer bloom + lit core
    function glowNode(
      x: number, y: number, r: number,
      bloomR: number, coreAlpha: number, bloomAlpha: number,
      rgb: [number, number, number]
    ) {
      const [cr, cg, cb] = rgb;
      const bloom = c.createRadialGradient(x, y, 0, x, y, bloomR);
      bloom.addColorStop(0,   `rgba(${cr},${cg},${cb},${bloomAlpha})`);
      bloom.addColorStop(0.5, `rgba(${cr},${cg},${cb},${(bloomAlpha * 0.3).toFixed(3)})`);
      bloom.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
      c.beginPath();
      c.arc(x, y, bloomR, 0, Math.PI * 2);
      c.fillStyle = bloom;
      c.fill();

      // Lit core with inner highlight
      const coreR = r * 0.7;
      const lit = c.createRadialGradient(x - r * 0.28, y - r * 0.3, 0, x, y, coreR);
      const hi = Math.min(255, cr + 65);
      lit.addColorStop(0, `rgba(${hi},${Math.min(255,cg+65)},${Math.min(255,cb+65)},${coreAlpha})`);
      lit.addColorStop(1, `rgba(${cr},${cg},${cb},${(coreAlpha * 0.45).toFixed(3)})`);
      c.beginPath();
      c.arc(x, y, coreR, 0, Math.PI * 2);
      c.fillStyle = lit;
      c.fill();
    }

    function draw() {
      c.clearRect(0, 0, W, H);
      frame++;

      // Move
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0)  { n.x = 0;  n.vx =  Math.abs(n.vx); }
        if (n.x > W)  { n.x = W;  n.vx = -Math.abs(n.vx); }
        if (n.y < 0)  { n.y = 0;  n.vy =  Math.abs(n.vy); }
        if (n.y > H)  { n.y = H;  n.vy = -Math.abs(n.vy); }
      }

      // Edges — gradient strokes that fade at endpoints
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d >= DIST) continue;

          const t = 1 - d / DIST;
          const focal  = a.tier === "focal"  || b.tier === "focal";
          const accent = a.tier !== "regular" || b.tier !== "regular";

          const g = c.createLinearGradient(a.x, a.y, b.x, b.y);
          if (focal) {
            const a0 = t * 0.42;
            g.addColorStop(0,    "rgba(26,107,60,0)");
            g.addColorStop(0.25, `rgba(26,107,60,${a0})`);
            g.addColorStop(0.75, `rgba(13,148,136,${a0})`);
            g.addColorStop(1,    "rgba(13,148,136,0)");
          } else if (accent) {
            const a0 = t * 0.22;
            g.addColorStop(0,   "rgba(26,107,60,0)");
            g.addColorStop(0.5, `rgba(26,107,60,${a0})`);
            g.addColorStop(1,   "rgba(26,107,60,0)");
          } else {
            const a0 = t * 0.08;
            g.addColorStop(0,   "rgba(100,116,139,0)");
            g.addColorStop(0.5, `rgba(100,116,139,${a0})`);
            g.addColorStop(1,   "rgba(100,116,139,0)");
          }

          c.beginPath();
          c.moveTo(a.x, a.y);
          c.lineTo(b.x, b.y);
          c.strokeStyle = g;
          c.lineWidth = focal ? 1.2 : accent ? 0.8 : 0.5;
          c.stroke();
        }
      }

      // Nodes: painter's order — regular → accent → focal
      for (const tier of ["regular", "accent", "focal"] as Tier[]) {
        for (const n of nodes) {
          if (n.tier !== tier) continue;
          const pulse = 0.88 + 0.12 * Math.sin(frame * 0.022 + n.phase);
          const r = n.baseR * (tier !== "regular" ? pulse : 1);

          if (tier === "regular") {
            c.beginPath();
            c.arc(n.x, n.y, r, 0, Math.PI * 2);
            c.fillStyle = `rgba(148,163,184,${n.alpha.toFixed(3)})`;
            c.fill();

          } else if (tier === "accent") {
            glowNode(n.x, n.y, r, r * 5.5, 0.78, 0.13, [26, 107, 60]);

          } else {
            // Focal: extra outer corona first
            const coronaR = r * 10;
            const corona = c.createRadialGradient(n.x, n.y, r * 1.5, n.x, n.y, coronaR);
            corona.addColorStop(0, "rgba(26,107,60,0.09)");
            corona.addColorStop(0.5, "rgba(26,107,60,0.03)");
            corona.addColorStop(1, "rgba(26,107,60,0)");
            c.beginPath();
            c.arc(n.x, n.y, coronaR, 0, Math.PI * 2);
            c.fillStyle = corona;
            c.fill();

            glowNode(n.x, n.y, r, r * 7.5, 0.88, 0.24, [34, 197, 94]);
          }
        }
      }

      // Soft radial vignette — pulls attention to centre
      const vig = c.createRadialGradient(W / 2, H / 2, H * 0.22, W / 2, H / 2, Math.max(W, H) * 0.82);
      vig.addColorStop(0, "rgba(255,255,255,0)");
      vig.addColorStop(1, "rgba(248,250,252,0.52)");
      c.fillStyle = vig;
      c.fillRect(0, 0, W, H);

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
