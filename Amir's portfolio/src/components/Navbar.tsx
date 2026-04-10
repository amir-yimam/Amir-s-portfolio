import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { navLinks } from '../data/portfolio';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'glass-card shadow-[0_8px_32px_rgba(0,212,255,0.08)]'
          : 'bg-transparent border border-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <motion.div
          className="flex items-center gap-2 text-[#00d4ff] font-mono font-medium text-sm"
          whileHover={{ scale: 1.02 }}
        >
          <Terminal size={16} />
          <span>alex.dev</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-slate-400 hover:text-[#00d4ff] text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-slate-400 hover:text-[#00d4ff] transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#contact')}
            className="hidden md:block neon-btn text-xs font-semibold px-4 py-2 rounded-lg"
          >
            Hire Me
          </motion.button>

          <button
            className="md:hidden text-slate-400 hover:text-[#00d4ff] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 pb-5 border-t border-[rgba(0,212,255,0.1)] mt-1"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-slate-400 hover:text-[#00d4ff] text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="neon-btn text-xs font-semibold px-4 py-2 rounded-lg text-center mt-1"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
