'use client';

import React, { useRef, useEffect } from 'react';

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
      const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const nums = '0123456789';
      const alphabet = katakana + latin + nums;

      const fontSize = 16;
      const columns = canvas.width / fontSize;
      const rainDrops: number[] = [];

      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }

      const draw = () => {
        // The background color needs to be opaque to work with the blur effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0'; // Classic green matrix color
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      };

      const animate = () => {
        draw();
        animationFrameId = window.requestAnimationFrame(animate);
      };
      
      animate();
    };

    setup();
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default CodeRain;
