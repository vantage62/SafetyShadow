'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoader } from './LoaderContext';

export function ScrollStory() {
  const { imagesRef, isFramesLoaded } = useLoader();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const frameCount = 193;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isFramesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let lastRenderedFrame = -1;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const obj = { frame: 0 };

    const render = (rawIndex: number) => {
      const index = Math.min(frameCount - 1, Math.max(0, Math.round(rawIndex)));
      if (index === lastRenderedFrame) return;
      lastRenderedFrame = index;

      const ctx = canvas.getContext('2d');
      if (!ctx || width === 0 || height === 0) return;

      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShift_x = (width - img.width * ratio) / 2;
      const centerShift_y = (height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }

      render(obj.frame);
    };

    handleResize();

    const initialDraw = setInterval(() => {
      if (imagesRef.current[0]?.complete) {
        render(0);
        clearInterval(initialDraw);
      }
    }, 30);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=3800',
        pin: true,
        scrub: 0.25,
      }
    });

    tl.to(obj, {
      frame: frameCount - 1,
      ease: 'none',
      onUpdate: () => render(obj.frame),
      duration: 1
    }, 0);

    window.addEventListener('resize', handleResize);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      clearInterval(initialDraw);
      window.removeEventListener('resize', handleResize);
    };
  }, [isFramesLoaded, imagesRef]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full transform-gpu" />
      </div>
    </div>
  );
}
