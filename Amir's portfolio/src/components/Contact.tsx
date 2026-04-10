import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    handle: '@alexchen',
    href: 'https://github.com',
    color: 'hover:text-white',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    handle: 'Alex Chen',
    href: 'https://linkedin.com',
    color: 'hover:text-[#0a66c2]',
  },
  {
    icon: <Twitter size={18} />,
    label: 'X / Twitter',
    handle: '@alexchendev',
    href: 'https://twitter.com',
    color: 'hover:text-white',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    handle: 'hello@alexchen.dev',
    href: 'mailto:hello@alexchen.dev',
    color: 'hover:text-[#00d4ff]',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6"
      style={{
        background: 'linear-gradient(180deg, #050b18 0%, #080f22 60%, #050b18 100%)',
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
              Contact
            </span>
            <span className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="section-title mb-4">Let's Build Something</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 font-mono uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 font-mono uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 font-mono uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02, y: -1 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? 'bg-emerald-500 text-white'
                    : 'neon-btn-fill'
                }`}
              >
                {sending ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-[#050b18] border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <span>Message Sent!</span>
                    <span>✓</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-2xl p-5 mb-2">
              <div className="flex items-center gap-2 text-[#00d4ff] mb-1">
                <MapPin size={14} />
                <span className="text-xs font-semibold font-mono uppercase tracking-wide">
                  Currently Based In
                </span>
              </div>
              <p className="text-slate-300 text-sm font-medium mt-1">San Francisco, CA</p>
              <p className="text-slate-500 text-xs mt-0.5">Open to remote worldwide</p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <p className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wide mb-4">
                Find Me Online
              </p>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between py-2 px-3 rounded-xl border border-transparent hover:border-[rgba(0,212,255,0.15)] hover:bg-[rgba(0,212,255,0.04)] transition-all duration-200 text-slate-400 ${link.color} group`}
                  >
                    <div className="flex items-center gap-3">
                      {link.icon}
                      <div>
                        <div className="text-xs font-semibold">{link.label}</div>
                        <div className="text-xs text-slate-600">{link.handle}</div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-semibold">Available for work</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Currently taking on new freelance projects and full-time opportunities.
                Typical response time: under 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
