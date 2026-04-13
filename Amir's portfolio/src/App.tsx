//this is app.tsx
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const scrollProgress = useScrollProgress();
  const mousePosRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(
        !!(el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a') || el.closest('button'))
      );
    };

    const animateRing = () => {
      const dx = mousePosRef.current.x - ringPosRef.current.x;
      const dy = mousePosRef.current.y - ringPosRef.current.y;
      ringPosRef.current = {
        x: ringPosRef.current.x + dx * 0.1,
        y: ringPosRef.current.y + dy * 0.1,
      };
      setRingPos({ ...ringPosRef.current });
      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{ left: dotPos.x, top: dotPos.y }}
      />
      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{ left: ringPos.x, top: ringPos.y }}
      />

      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="noise-overlay" />

      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
