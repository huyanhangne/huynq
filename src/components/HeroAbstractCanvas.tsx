import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface HeroAbstractCanvasProps {
  theme: ThemeMode;
}

export const HeroAbstractCanvas: React.FC<HeroAbstractCanvasProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Neural nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      connections: number[];
      pulse: number;
      pulseSpeed: number;
    }

    const nodeCount = Math.min(38, Math.floor(width / 35));
    const nodes: Node[] = [];

    const colors = [
      'rgba(59, 130, 246, 0.85)', // Tech Blue
      'rgba(37, 99, 235, 0.8)',   // Electric Cobalt
      'rgba(16, 185, 129, 0.85)', // Emerald Green
      'rgba(52, 211, 153, 0.75)', // Mint / Neon Green
      'rgba(147, 197, 253, 0.8)', // Sky highlight
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    // Code & Linguistic symbols
    const codeTokens = [
      '{ code ∩ AI }',
      '@SpringBootApplication',
      'class CognitiveModel<T>',
      'λ -> syntax.comprehend()',
      'LLM.fineTune(pedagogy)',
      'SOLID.Liskov',
      'Stream.of(wisdom)',
      'NLP.semantics()',
      'Pragmatics & Logic',
      'State<T> bloc',
      'void inspire(Student s)',
      'Async/Await',
      'String language = "human";',
      'SpringMVC :: controller',
      'const insight = true;'
    ];

    interface FloatingCode {
      x: number;
      y: number;
      text: string;
      vx: number;
      vy: number;
      opacity: number;
      color: string;
      fontSize: number;
    }

    const floatingItems: FloatingCode[] = [];
    const codeCount = Math.min(14, Math.floor(width / 90));
    for (let i = 0; i < codeCount; i++) {
      floatingItems.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeTokens[i % codeTokens.length],
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.2,
        opacity: Math.random() * 0.4 + 0.15,
        color: i % 2 === 0 ? 'rgba(59, 130, 246, ' : 'rgba(16, 185, 129, ',
        fontSize: Math.floor(Math.random() * 3) + 11,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // 1. Draw smooth linguistic waveform ribbons
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseOffset = height * (0.35 + w * 0.18);
        const amplitude = 35 + w * 15;
        const frequency = 0.0025 + w * 0.001;
        const waveColor =
          w % 2 === 0
            ? isDark
              ? 'rgba(37, 99, 235, 0.12)'
              : 'rgba(37, 99, 235, 0.08)'
            : isDark
            ? 'rgba(16, 185, 129, 0.1)'
            : 'rgba(16, 185, 129, 0.06)';

        ctx.strokeStyle = waveColor;
        ctx.lineWidth = 1.8 + w * 0.8;

        for (let x = 0; x <= width; x += 10) {
          const y =
            baseOffset +
            Math.sin(x * frequency + time + w * 1.5) * amplitude +
            Math.cos(x * 0.001 - time * 0.5) * 15;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 2. Draw neural connections
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.22 : 0.15);
            ctx.beginPath();
            ctx.strokeStyle =
              i % 3 === 0
                ? `rgba(16, 185, 129, ${alpha})`
                : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw neural nodes with pulsing glow
      for (const node of nodes) {
        node.pulse += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;

        // Outer aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace('0.85', '0.12').replace('0.8', '0.08');
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? node.color : node.color.replace('0.85', '0.95');
        ctx.fill();

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      // 4. Draw floating code syntax snippets
      ctx.font = '12px "JetBrains Mono", monospace';
      for (const item of floatingItems) {
        ctx.fillStyle = `${item.color}${isDark ? item.opacity : item.opacity * 0.9})`;
        ctx.fillText(item.text, item.x, item.y);

        item.x += item.vx;
        item.y += item.vy;

        // Wrap around smoothly
        if (item.y < -30) {
          item.y = height + 20;
          item.x = Math.random() * width;
        }
        if (item.x < -100) item.x = width + 50;
        if (item.x > width + 100) item.x = -50;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient background glow orbs */}
      <div
        className={`absolute -top-32 -left-20 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-blue-600/15'
            : 'bg-blue-400/10'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-emerald-500/12'
            : 'bg-emerald-400/10'
        }`}
      />
      <div
        className={`absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-indigo-600/10'
            : 'bg-indigo-300/15'
        }`}
      />

      {/* Grid overlay for tech precision */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]`}
      />

      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
