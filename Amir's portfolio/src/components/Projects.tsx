import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6"
      style={{
        background: 'linear-gradient(180deg, #050b18 0%, #06101e 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern" />

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
              Portfolio
            </span>
            <span className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="section-title mb-4">Selected Work</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            A selection of projects I'm proud of — each one solving a real problem
            with clean architecture and thoughtful UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 neon-btn px-7 py-3.5 rounded-xl text-sm font-semibold"
          >
            <Github size={16} />
            View All on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group glass-card rounded-2xl overflow-hidden cursor-default relative"
      style={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f22] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#00d4ff] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" />

        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg glass-card text-slate-300 hover:text-[#00d4ff] transition-colors"
          >
            <Github size={14} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg glass-card text-slate-300 hover:text-[#00d4ff] transition-colors"
          >
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="text-slate-500 group-hover:text-[#00d4ff] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1"
          />
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md font-mono"
              style={{
                background: 'rgba(0, 212, 255, 0.06)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                color: '#64748b',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0, 212, 255, 0.2)' }}
      />
    </motion.div>
  );
}
