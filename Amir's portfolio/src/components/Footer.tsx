import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 px-6 border-t"
      style={{ borderColor: 'rgba(0, 212, 255, 0.08)', background: '#050b18' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-2 text-[#00d4ff] font-mono text-sm"
          whileHover={{ scale: 1.02 }}
        >
          <Terminal size={14} />
          <span>alex.dev</span>
        </motion.div>

        <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5 flex-wrap justify-center text-center">
          <span>© {currentYear} Alex Chen. All rights reserved.</span>
          <span className="hidden md:inline text-slate-700">·</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={10} className="text-[#00d4ff] fill-[#00d4ff]" /> and Bolt AI
          </span>
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-600 font-mono">
          {['Privacy', 'Terms', 'RSS'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-[#00d4ff] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
