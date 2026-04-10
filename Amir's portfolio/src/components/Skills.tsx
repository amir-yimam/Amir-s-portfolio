import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={16} />,
  Backend: <Server size={16} />,
  Databases: <Database size={16} />,
  Tools: <Wrench size={16} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);
  const displaySkills =
    activeCategory ? skills[activeCategory] : Object.values(skills).flat();

  return (
    <section
      id="skills"
      className="relative py-28 px-6"
      style={{
        background: 'linear-gradient(180deg, #050b18 0%, #080f22 50%, #050b18 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] font-mono text-xs tracking-widest uppercase">
              Tech Stack
            </span>
            <span className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            A curated toolkit refined through years of building production systems,
            open-source contributions, and relentless tinkering.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all duration-200 ${
              activeCategory === null
                ? 'bg-[#00d4ff] text-[#050b18]'
                : 'glass-card text-slate-400 hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.3)]'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-[#050b18]'
                  : 'glass-card text-slate-400 hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.3)]'
              }`}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory ?? 'all'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3"
        >
          {displaySkills.map((skill) => (
            <motion.div
              key={skill}
              variants={badgeVariants}
              whileHover={{ scale: 1.08, y: -4 }}
              className="skill-badge px-4 py-2 rounded-xl text-sm font-medium cursor-default select-none"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-5 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-[#00d4ff] mb-3">
                {categoryIcons[cat]}
                <span className="text-xs font-semibold font-mono uppercase tracking-wide">
                  {cat}
                </span>
              </div>
              <div className="text-3xl font-bold text-gradient-cyan">
                {skills[cat].length}
              </div>
              <div className="text-xs text-slate-500 mt-1">technologies</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
