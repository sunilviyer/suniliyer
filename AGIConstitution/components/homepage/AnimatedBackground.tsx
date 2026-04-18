'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    // Earth tone colors matching the UX spec
    const colors = [
      '#936639', // Toffee Brown
      '#a68a64', // Camel
      '#582f0e', // Dark Walnut
      '#a4ac86', // Dry Sage
      '#656d4a', // Fern
      '#333d29', // Charcoal
    ];

    // Gradient animation
    const animate = () => {
      time += 0.002;

      // Create gradient that shifts slowly
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Animate gradient stops
      const offset1 = (Math.sin(time) + 1) / 2;
      const offset2 = (Math.cos(time * 0.7) + 1) / 2;

      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(offset1 * 0.5, colors[1]);
      gradient.addColorStop(0.5 + offset2 * 0.3, colors[2]);
      gradient.addColorStop(1, colors[3]);

      // Fill canvas with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle overlay for depth
      const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      overlayGradient.addColorStop(0, 'rgba(51, 61, 41, 0.2)');
      overlayGradient.addColorStop(1, 'rgba(51, 61, 41, 0.8)');

      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ willChange: 'transform' }}
    />
  );
}
