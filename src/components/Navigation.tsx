'use client';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useLoader } from './LoaderContext';
import gsap from 'gsap';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { isIntroComplete } = useLoader();
  const navRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isIntroComplete && navRef.current) {
      // 1. Diagonal blurring entrance from the top-right
      gsap.fromTo(navRef.current,
        { 
          y: -80, 
          x: 200, 
          autoAlpha: 0, 
          xPercent: -50,
          filter: 'blur(20px)'
        },
        { 
          y: 0, 
          x: 0, 
          autoAlpha: 1, 
          xPercent: -50, 
          filter: 'blur(0px)',
          duration: 1.6, 
          ease: 'power4.out' 
        }
      );

      // 2. Glowing particle burst effect
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        gsap.fromTo(particles,
          { 
            x: 100,
            y: -40,
            scale: 0, 
            autoAlpha: 1 
          },
          {
            x: () => (Math.random() - 0.8) * 300,
            y: () => (Math.random() - 0.2) * 200,
            scale: () => Math.random() * 1.5 + 0.5,
            autoAlpha: 0,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.015,
            delay: 0.1
          }
        );
      }
    } else if (navRef.current && !isIntroComplete) {
      gsap.set(navRef.current, { autoAlpha: 0 });
    }
  }, [isIntroComplete]);

  return (
    <>
      {/* Particle System Container */}
      <div ref={particlesRef} className="fixed top-10 left-1/2 z-40 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1.5 h-1.5 bg-zinc-300 rounded-full shadow-[0_0_12px_2px_rgba(212,212,216,0.6)]"
          />
        ))}
      </div>

      <nav ref={navRef} className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out py-3 px-6 md:px-8 flex items-center justify-between rounded-full w-[90%] md:w-[70%] max-w-5xl opacity-0 invisible",
        // Apple iOS Liquid Glass Specification
        "backdrop-blur-[24px] backdrop-saturate-[180%] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.15)]",
        scrolled ? "bg-white/[0.08]" : "bg-white/[0.02]"
      )}>
        <div className="flex items-center gap-3 text-white">
          <div className="w-9 h-9 min-w-9 min-h-9 max-w-9 max-h-9 rounded-full overflow-hidden border border-white/20 bg-black flex items-center justify-center shrink-0">
            <img src="/logo.svg" alt="Safety Shadow Logo" className="w-full h-full object-cover block" width={36} height={36} />
          </div>
          <span className="font-semibold tracking-wide text-base md:text-lg">Safety Shadow</span>
        </div>
      </nav>
    </>
  );
}
