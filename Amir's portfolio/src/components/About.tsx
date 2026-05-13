
  { delay: 4.9, text: '$ echo $FAVORITE_STACK', type: 'cmd' },
  { delay: 5.5, text: 'React + TypeScript + Go + Postgres', type: 'out' },
  { delay: 6.1, text: '$ npm run build --project=life', type: 'cmd' },
  { delay: 6.7, text: 'Building... ████████████ 100%', type: 'out' },
  { delay: 7.2, text: '✓ Compiled successfully.', type: 'success' },
];

const statIcons = [<Globe size={18} />, <Cpu size={18} />, <Terminal size={18} />, <Coffee size={18} />];

export default function About() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    setVisibleLines(0);
    TERMINAL_LINES.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), TERMINAL_LINES[i].delay * 1000);
    });
  }, [inView]);

  return (
    <section
      id="about"
      className="relative py-28 px-6"
      style={{
        background: 'linear-gradient(180deg, #06101e 0%, #080f22 50%, #050b18 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] font-mono text-xs tracking-widest uppercase">
              About
            </span>
            <span className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="section-title mb-4">The Human Behind the Code</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-base leading-[1.85] mb-5">
              Hey — I'm Alex. I've spent the past 5 years obsessing over the craft of
              software development, from architecting distributed systems that handle
              millions of requests to hand-crafting interfaces that users genuinely
              enjoy using.
            </p>
            <p className="text-slate-400 text-base leading-[1.85] mb-5">
              I started writing code as a teenager, modding games and building
              terrible-looking websites. That curiosity evolved into a career spanning
              Series-A startups, a brief stint at a FAANG company, and now an independent
              consultancy where I work with founders who care deeply about their product.
            </p>
            <p className="text-slate-400 text-base leading-[1.85] mb-10">
              When I'm not deep in a codebase, I'm contributing to open source, writing
              about systems design on my blog, or exploring the latest developments in
              distributed computing and AI infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="text-[#00d4ff] opacity-70">{statIcons[i]}</div>
                  <div>
                    <div className="text-xl font-bold neon-text leading-tight">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(0,212,255,0.1)]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-slate-500 ml-2 flex items-center gap-1.5">
                <Terminal size={11} />
                alex@dev ~ zsh
              </span>
            </div>

            <motion.div
              onViewportEnter={() => setInView(true)}
              viewport={{ once: true }}
              className="p-5 min-h-64 text-xs leading-[1.9]"
            >
              {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="flex gap-3">
                  {line.type === 'cmd' && (
                    <>
                      <span className="text-[#00d4ff] select-none">$</span>
                      <span className="text-slate-200">{line.text.replace('$ ', '')}</span>
                    </>
                  )}
                  {line.type === 'out' && (
                    <>
                      <span className="text-slate-600 select-none">{'>'}</span>
                      <span className="text-slate-400">{line.text.replace('> ', '')}</span>
                    </>
                  )}
                  {line.type === 'success' && (
                    <span className="text-emerald-400">{line.text}</span>
                  )}
                </div>
              ))}
              {visibleLines < TERMINAL_LINES.length && (
                <div className="flex gap-3">
                  <span className="text-[#00d4ff]">$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
