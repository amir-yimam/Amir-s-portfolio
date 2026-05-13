import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { typingRoles } from '../data/portfolio';
//this is the hero section of the website
const CODE_SYMBOLS = [
  '{}', '<>', '/>', '[]', '=>', '&&', '||', '++', '--', '!==',
  'fn()', 'async', 'await', 'const', 'let', 'return', 'import',
  '/**', '*/', '// ...', 'export', 'class', 'interface', 'type',
];

interface FloatingSymbol {
  id: number;
  text: string;
  left: string;
  duration: number;
  delay: number;
  fontSize: string;
  opacity: number;
}

function generateSymbols(count: number): FloatingSymbol[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
    left: `${Math.random() * 100}%`,
    duration: 12 + Math.random() * 18,
    delay: Math.random() * 20,
    fontSize: `${10 + Math.random() * 8}px`,
    opacity: 0.06 + Math.random() * 0.08,
  }));
}

export default function Hero() {
  const typedText = useTypingEffect(typingRoles, 75, 38, 2000);
  const symbolsRef = useRef<FloatingSymbol[]>(generateSymbols(30));

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,212,255,0.08) 0%, transparent 60%), linear-gradient(180deg, #050b18 0%, #080f1f 50%, #050b18 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {symbolsRef.current.map((sym) => (
        <div
          key={sym.id}
          className="floating-code select-none"
          style={{
            left: sym.left,
            bottom: '-10%',
            animationDuration: `${sym.duration}s`,
            animationDelay: `${sym.delay}s`,
            fontSize: sym.fontSize,
            opacity: sym.opacity,
          }}
        >
          {sym.text}
        </div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4"
          >
            <span className="text-gradient block">Hi, I'm</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #ffffff 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Alex Chen
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 mb-8 h-8"
          >
            <span className="text-slate-400 text-lg md:text-xl font-mono">
              {'>'}{' '}
            </span>
            <span className="text-slate-300 text-lg md:text-xl font-medium">
              {typedText}
            </span>
            <span className="terminal-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          >
            I build scalable systems and elegant interfaces that push the boundaries
            of what's possible on the web. From distributed APIs to pixel-perfect UIs —
            I obsess over the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="neon-btn-fill px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={15} />
            </motion.button>

            <motion.button
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="neon-btn px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              Contact Me
            </motion.button>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-3.5 rounded-xl text-slate-400 hover:text-[#00d4ff] glass-card glass-card-hover flex items-center justify-center"
            >
              <Github size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-6 mt-12"
          >
            {[
              { value: '5+', label: 'Years exp.' },
              { value: '40+', label: 'Projects' },
              { value: '120+', label: 'OSS PRs' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold neon-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:flex items-center justify-center"
        >
          <HeroAbstractShape />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-500 text-xs font-mono"
        >
          <span>scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroAbstractShape() {
  return (
    <div className="relative w-80 h-80">
      <svg viewBox="0 0 320 320" className="w-full h-full" fill="none">
        <defs>
          <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0099bb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0099bb" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx="160" cy="160" r="120"
          fill="url(#orb1)"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="160" cy="160" r="80"
          fill="url(#orb2)"
          animate={{ scale: [1.08, 1, 1.08], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const r = 110;
          const x = 160 + r * Math.cos(rad);
          const y = 160 + r * Math.sin(rad);
          return (
            <motion.circle
              key={i}
              cx={x} cy={y} r="4"
              fill="#00d4ff"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
            />
          );
        })}

        <motion.circle
          cx="160" cy="160" r="109"
          stroke="rgba(0,212,255,0.15)"
          strokeWidth="1"
          strokeDasharray="8 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '160px 160px' }}
        />
        <motion.circle
          cx="160" cy="160" r="75"
          stroke="rgba(0,212,255,0.1)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '160px 160px' }}
        />

        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '160px 160px' }}
        >
          <polygon
            points="160,90 195,150 160,130 125,150"
            fill="rgba(0,212,255,0.08)"
            stroke="rgba(0,212,255,0.25)"
            strokeWidth="1"
          />
          <polygon
            points="160,230 195,170 160,190 125,170"
            fill="rgba(0,212,255,0.08)"
            stroke="rgba(0,212,255,0.25)"
            strokeWidth="1"
          />
        </motion.g>

        <motion.circle
          cx="160" cy="160" r="16"
          fill="rgba(0,212,255,0.15)"
          stroke="#00d4ff"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="160" cy="160" r="6" fill="#00d4ff" />
      </svg>

      
