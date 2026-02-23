'use client';

import { useEffect, useRef } from 'react';

const SKILLS = [
  'HTML',
  'CSS',
  'ES5',
  'TypeScript',
  'REST',
  'JSON',
  'GSAP',
  'Data Science',
  'Wordpress',
  'PHP',
  'Python',
  'Node JS',
  'Git',
  '_lodash',
  'SASS',
  'JQuery',
  'SQI',
  'Gulp',
  'npm',
  'BEM',
  'Gagan',
];

function fibonacciSpherePoint(index, count) {
  const phi = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / Math.max(count - 1, 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = phi * index;

  return {
    x: Math.cos(theta) * radius,
    y,
    z: Math.sin(theta) * radius,
  };
}

export default function SkillGlobeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const points = SKILLS.map((text, i) => ({
      text,
      ...fibonacciSpherePoint(i, SKILLS.length),
      baseSize: text.length > 9 ? 15 : 17,
    }));

    let width = 0;
    let height = 0;
    let dpr = 1;
    let radius = 150;
    let raf = 0;
    let hovering = false;
    let targetVX = 0.0028;
    let targetVY = -0.0035;
    let vx = targetVX;
    let vy = targetVY;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.36;
    };

    const rotate = () => {
      const sinX = Math.sin(vx);
      const cosX = Math.cos(vx);
      const sinY = Math.sin(vy);
      const cosY = Math.cos(vy);

      for (const point of points) {
        const y1 = point.y * cosX - point.z * sinX;
        const z1 = point.y * sinX + point.z * cosX;
        const x2 = point.x * cosY + z1 * sinY;
        const z2 = -point.x * sinY + z1 * cosY;

        point.x = x2;
        point.y = y1;
        point.z = z2;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const depth = 1.7;
      const focal = radius * 1.65;
      const cx = width / 2;
      const cy = height / 2;

      const ordered = [...points].sort((a, b) => a.z - b.z);
      for (const point of ordered) {
        const perspective = focal / (focal + point.z * radius * depth * 0.42);
        const x = point.x * radius * perspective + cx;
        const y = point.y * radius * perspective + cy;
        const size = point.baseSize * (0.7 + perspective * 0.58);
        const alpha = Math.max(0.22, Math.min(0.95, 0.28 + ((point.z + 1) / 2) * 0.84));

        ctx.font = `${600 + Math.floor(perspective * 180)} ${size}px var(--font-display), "Space Grotesk", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(100, 255, 218, ${alpha})`;
        ctx.shadowColor = 'rgba(100, 255, 218, 0.28)';
        ctx.shadowBlur = Math.max(0, (perspective - 0.8) * 12);
        ctx.fillText(point.text, x, y);
      }
    };

    const animate = () => {
      vx += (targetVX - vx) * 0.06;
      vy += (targetVY - vy) * 0.06;

      rotate();
      draw();
      raf = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const xNorm = x * 2 - 1;
      const yNorm = y * 2 - 1;

      targetVY = -xNorm * 0.014;
      targetVX = yNorm * 0.01;
    };

    const onPointerEnter = () => {
      hovering = true;
    };

    const onPointerLeave = () => {
      hovering = false;
      targetVX = 0.0028;
      targetVY = -0.0035;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        targetVX = 0;
        targetVY = 0;
      } else if (!hovering) {
        targetVX = 0.0028;
        targetVY = -0.0035;
      }
    };

    resize();
    animate();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerenter', onPointerEnter);
    canvas.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerenter', onPointerEnter);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="tag-globe-shell">
      <canvas ref={canvasRef} className="tag-globe-canvas" aria-label="Interactive skill globe" />
      <p className="tag-note">Move cursor over the globe to rotate and inspect depth</p>
    </div>
  );
}
