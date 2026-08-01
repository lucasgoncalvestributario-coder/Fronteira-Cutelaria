import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  rotSpeed: number;
  isSparkBurst?: boolean;
  gravity?: number;
}

export const EmbersCanvas: React.FC<{ density?: 'low' | 'medium' | 'high' }> = ({ density = 'medium' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lastStrikeTime, setLastStrikeTime] = useState<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const countMap = { low: 35, medium: 75, high: 130 };
    const maxParticles = countMap[density];
    const particles: Particle[] = [];

    const createParticle = (overrideY?: number): Particle => {
      const colors = ['#ff6a00', '#ff3300', '#ffaa00', '#e63900', '#ff8800', '#ffffff'];
      return {
        x: Math.random() * width,
        y: overrideY !== undefined ? overrideY : height + Math.random() * 50,
        size: Math.random() * 2.8 + 0.8,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: -(Math.random() * 2.2 + 0.8),
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        decay: Math.random() * 0.006 + 0.002,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
      };
    };

    // Pre-populate background embers
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(Math.random() * height));
    }

    // Function to trigger forge hammer spark explosion (every 11s)
    const triggerForgeStrike = () => {
      const originX = width * 0.5 + (Math.random() - 0.5) * (width * 0.4);
      const originY = height * 0.75 + (Math.random() - 0.5) * 100;

      // Spawn 65 high-velocity forge strike sparks
      for (let i = 0; i < 65; i++) {
        const angle = (Math.random() * Math.PI) - Math.PI / 2 + (Math.random() - 0.5) * 0.6; // Upward spray arc
        const speed = Math.random() * 12 + 4;
        const sparkColors = ['#ffffff', '#fff3d1', '#ffaa00', '#ff6a00', '#ff3300', '#e63900'];

        particles.push({
          x: originX,
          y: originY,
          size: Math.random() * 3.5 + 1.2,
          speedX: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
          speedY: -Math.sin(angle) * speed - Math.random() * 4,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          alpha: 1.0,
          decay: Math.random() * 0.02 + 0.012, // Faster decay for fiery sparks
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2,
          isSparkBurst: true,
          gravity: 0.18, // Gravity bends the sparks downward like real anvil strikes
        });
      }

      setLastStrikeTime(Date.now());
    };

    // Set 11-second interval timer for periodic forge strikes
    const interval11s = setInterval(() => {
      triggerForgeStrike();
    }, 11000);

    // Trigger initial forge strike after 2.5s for immediate user delight
    const initialTimeout = setTimeout(() => {
      triggerForgeStrike();
    }, 2500);

    let mouseX = width / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.isSparkBurst) {
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.gravity) p.speedY += p.gravity; // Gravity pull
          p.speedX *= 0.98; // Air friction
        } else {
          p.x += p.speedX + (mouseX - width / 2) * 0.0002;
          p.y += p.speedY;
        }

        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;

        if (p.alpha <= 0 || p.y < -30 || p.x < -30 || p.x > width + 30) {
          if (p.isSparkBurst) {
            // Remove burst particles when faded
            particles.splice(i, 1);
          } else {
            particles[i] = createParticle();
          }
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.isSparkBurst ? p.size * 6 : p.size * 4;

        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        ctx.beginPath();
        if (p.isSparkBurst) {
          // Elongated spark streak for strike physics
          ctx.ellipse(0, 0, p.size * 2, p.size * 0.7, Math.atan2(p.speedY, p.speedX), 0, Math.PI * 2);
        } else if (p.size > 2) {
          ctx.rect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval11s);
      clearTimeout(initialTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-10 opacity-80"
        aria-hidden="true"
      />
    </>
  );
};

