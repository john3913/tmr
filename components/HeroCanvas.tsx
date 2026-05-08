"use client";
import { useEffect, useRef } from "react";

interface Node3D {
  x: number; y: number; z: number;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  opacity: number;
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c = ctx;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animId: number;
    let t = 0;

    const COLS = 10;
    const ROWS = 6;
    const DEPTH = 3;

    const nodes: Node3D[] = [];
    const edges: [number, number][] = [];
    const particles: Particle[] = [];

    function buildLattice() {
      nodes.length = 0;
      edges.length = 0;
      for (let z = 0; z < DEPTH; z++) {
        for (let r = 0; r < ROWS; r++) {
          for (let col = 0; col < COLS; col++) {
            nodes.push({
              x: (col / (COLS - 1) - 0.5) * 2,
              y: (r   / (ROWS - 1) - 0.5) * 1.4,
              z: (z   / (DEPTH - 1) - 0.5) * 1.6,
            });
          }
        }
      }
      const idx = (z: number, r: number, col: number) => z * ROWS * COLS + r * COLS + col;
      for (let z = 0; z < DEPTH; z++) {
        for (let r = 0; r < ROWS; r++) {
          for (let col = 0; col < COLS; col++) {
            if (col + 1 < COLS) edges.push([idx(z, r, col), idx(z, r, col + 1)]);
            if (r + 1 < ROWS)  edges.push([idx(z, r, col), idx(z, r + 1, col)]);
            if (z + 1 < DEPTH) edges.push([idx(z, r, col), idx(z + 1, r, col)]);
          }
        }
      }
      for (let i = 0; i < 60; i++) {
        const ei = Math.floor(Math.random() * edges.length);
        particles.push({
          fromIdx: edges[ei][0],
          toIdx:   edges[ei][1],
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.005,
          opacity: 0.45 + Math.random() * 0.55,
        });
      }
    }

    function project(nx: number, ny: number, nz: number, rotY: number, rotX: number) {
      const W = canvas!.offsetWidth;
      const H = canvas!.offsetHeight;
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const rx  = nx * cosY - nz * sinY;
      const rz  = nx * sinY + nz * cosY;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const ry  = ny * cosX - rz * sinX;
      const rz2 = ny * sinX + rz * cosX;
      const fov = 2.4;
      const z = rz2 + fov;
      const scale = fov / z;
      const span = Math.min(W, H) * 0.40;
      return {
        px: W / 2 + rx * scale * span,
        py: H / 2 + ry * scale * span,
        scale,
        z: rz2,
      };
    }

    function resize() {
      const W = canvas!.offsetWidth;
      const H = canvas!.offsetHeight;
      canvas!.width  = W * dpr;
      canvas!.height = H * dpr;
      c.scale(dpr, dpr);
    }

    function draw() {
      const W = canvas!.offsetWidth;
      const H = canvas!.offsetHeight;
      c.clearRect(0, 0, W, H);

      const rotY = t * 0.06 + 0.25;
      const rotX = Math.sin(t * 0.025) * 0.16 + 0.08;

      const proj = nodes.map((n) => project(n.x, n.y, n.z, rotY, rotX));

      // Edges — slate hairlines, depth-faded
      for (const [a, b] of edges) {
        const pa = proj[a], pb = proj[b];
        const avgZ = (pa.z + pb.z) / 2;
        const alpha = Math.max(0, (avgZ + 1.0) / 2.0) * 0.13;
        c.beginPath();
        c.moveTo(pa.px, pa.py);
        c.lineTo(pb.px, pb.py);
        c.strokeStyle = `rgba(100,116,139,${alpha.toFixed(3)})`;
        c.lineWidth = 0.6;
        c.stroke();
      }

      // Nodes — small slate dots, depth-faded
      for (let i = 0; i < nodes.length; i++) {
        const p = proj[i];
        const alpha = Math.max(0, (p.z + 1.0) / 2.0) * 0.38;
        const r = p.scale * 2.2;
        c.beginPath();
        c.arc(p.px, p.py, r, 0, Math.PI * 2);
        c.fillStyle = `rgba(100,116,139,${alpha.toFixed(3)})`;
        c.fill();
      }

      // Particles — ALLETE green core + teal glow
      for (const part of particles) {
        part.progress += part.speed;
        if (part.progress >= 1) {
          const ei = Math.floor(Math.random() * edges.length);
          part.fromIdx  = edges[ei][0];
          part.toIdx    = edges[ei][1];
          part.progress = 0;
          part.speed    = 0.003 + Math.random() * 0.005;
        }
        const pa = proj[part.fromIdx], pb = proj[part.toIdx];
        const px = pa.px + (pb.px - pa.px) * part.progress;
        const py = pa.py + (pb.py - pa.py) * part.progress;
        const avgZ = (pa.z + pb.z) / 2;
        const depthAlpha = Math.max(0, (avgZ + 1.0) / 2.0);
        const alpha = depthAlpha * part.opacity;

        // Outer teal glow
        const glowR = 10;
        const glow = c.createRadialGradient(px, py, 0, px, py, glowR);
        glow.addColorStop(0, `rgba(13,148,136,${(alpha * 0.35).toFixed(3)})`);
        glow.addColorStop(1, `rgba(13,148,136,0)`);
        c.beginPath();
        c.arc(px, py, glowR, 0, Math.PI * 2);
        c.fillStyle = glow;
        c.fill();

        // Green core
        c.beginPath();
        c.arc(px, py, 2.2, 0, Math.PI * 2);
        c.fillStyle = `rgba(26,107,60,${alpha.toFixed(3)})`;
        c.fill();
      }

      // Vignette — matches #dde4ed background
      const vig = c.createRadialGradient(W / 2, H / 2, H * 0.18, W / 2, H / 2, Math.max(W, H) * 0.85);
      vig.addColorStop(0, "rgba(221,228,237,0)");
      vig.addColorStop(1, "rgba(213,221,232,0.62)");
      c.fillStyle = vig;
      c.fillRect(0, 0, W, H);

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    buildLattice();
    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}
