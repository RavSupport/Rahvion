import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Cpu,
  Monitor,
  HardDrive,
  Wifi,
  MemoryStick,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Info,
  ChevronDown,
  ChevronUp,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 }
  })
};

const CopyableCommand = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden mt-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-white/40 ml-2">PowerShell (Administrator)</span>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <code className="text-[#7ec8e3] font-mono text-sm md:text-base tracking-wide select-all">
          {command}
        </code>
        <button
          onClick={handleCopy}
          aria-label="Copy command"
          className="ml-4 shrink-0 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
};

const ScoreBar = ({ label, score, color, icon: Icon }) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2 w-40 shrink-0">
      <Icon size={16} className={color} />
      <span className="text-sm text-white/70">{label}</span>
    </div>
    <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${(score / 9.9) * 100}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`h-full rounded-full bg-gradient-to-r ${color.replace('text-', 'from-').replace('-400', '-500')} to-blue-400`}
      />
    </div>
    <span className="text-white font-semibold w-10 text-right">{score.toFixed(1)}</span>
  </div>
);

const AccordionFAQ = ({ question, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-white">{question}</span>
        {open ? <ChevronUp size={18} className="text-blue-400 shrink-0" /> : <ChevronDown size={18} className="text-white/40 shrink-0" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-6 pb-5 text-white/65 leading-relaxed text-sm border-t border-white/10 pt-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const exampleScores = [
  { label: 'Processor (CPU)', score: 8.4, color: 'text-blue-400', icon: Cpu },
  { label: 'RAM', score: 7.9, color: 'text-purple-400', icon: MemoryStick },
  { label: 'Graphics', score: 6.2, color: 'text-yellow-400', icon: Monitor },
  { label: 'Gaming Graphics', score: 6.1, color: 'text-orange-400', icon: Monitor },
  { label: 'Disk (Storage)', score: 8.8, color: 'text-emerald-400', icon: HardDrive },
];

const WindowsExperienceIndexPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Windows Experience Index Guide | Rahvion — Personal IT Department</title>
        <meta
          name="description"
          content="Learn how to check your Windows Experience Index (WEI) scores in Windows 11 using WinSAT via PowerShell. Understand CPU, RAM, Graphics, and Disk scores and what they mean for your PC."
        />
      </Helmet>

      <section className="relative min-h-screen py-24 text-white">
        <MathGridBackground />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">

          {/* ── Hero ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <BarChart3 size={14} />
              Windows 11 / Legacy Tool
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Windows Experience Index
            </h1>
            <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              A quick way to see how your PC's hardware stacks up — still built into Windows 11
              via the <strong className="text-white/90">WinSAT</strong> (Windows System Assessment Tool),
              even though the visual dashboard was removed.
            </p>
          </motion.div>

          {/* ── What Is It ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/15 rounded-lg">
                <Info size={20} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">What is the Windows Experience Index?</h2>
            </div>
            <p className="text-white/65 leading-relaxed mb-4">
              The Windows Experience Index is a legacy feature introduced in <strong className="text-white/85">Windows Vista</strong> and
              carried through <strong className="text-white/85">Windows 7</strong>. It assigns numerical scores — from{' '}
              <strong className="text-white/85">1.0 to 9.9</strong> — to five hardware components:
            </p>
            <ul className="space-y-2 text-white/65">
              {[
                { icon: Cpu, label: 'Processor (CPU)', desc: 'General compute performance' },
                { icon: MemoryStick, label: 'RAM (Memory)', desc: 'Memory speed and capacity' },
                { icon: Monitor, label: 'Graphics (Desktop)', desc: 'Standard 2D/UI rendering' },
                { icon: Monitor, label: 'Gaming Graphics (3D)', desc: 'DirectX gaming performance' },
                { icon: HardDrive, label: 'Primary Disk (Storage)', desc: 'Read/write throughput' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon size={16} className="text-blue-400 shrink-0" />
                  <span><strong className="text-white/85">{label}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/65 leading-relaxed mt-4">
              Microsoft removed the graphical dashboard in Windows 8, but the underlying tool
              <strong className="text-white/85"> WinSAT</strong> is still present and fully functional in
              Windows 11.
            </p>
          </motion.div>

          {/* ── Step 1: Check Scores ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/15 rounded-lg text-emerald-400 font-bold text-sm w-9 h-9 flex items-center justify-center rounded-full">
                1
              </div>
              <h2 className="text-2xl font-bold">Check Your Current Scores</h2>
            </div>
            <p className="text-white/65 leading-relaxed mb-2">
              Open <strong className="text-white/85">PowerShell as Administrator</strong> and run:
            </p>
            <CopyableCommand command="Get-CimInstance Win32_WinSAT" />
            <p className="text-white/50 text-xs mt-3 leading-relaxed">
              <strong className="text-white/70">How to open PowerShell as Administrator:</strong>{' '}
              Right-click the Start menu → "Windows Terminal (Admin)" or search for "PowerShell", right-click, and choose "Run as administrator".
            </p>
            <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <p className="text-sm text-emerald-300/80 leading-relaxed">
                <CheckCircle2 size={14} className="inline mr-2 text-emerald-400" />
                This reads the cached scores from the last time WinSAT was run — it's instant and
                doesn't stress your hardware. If the values come back blank or zero, proceed to Step 2.
              </p>
            </div>
          </motion.div>

          {/* ── Step 2: Refresh Scores ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/15 rounded-lg text-purple-400 font-bold text-sm w-9 h-9 flex items-center justify-center rounded-full">
                2
              </div>
              <h2 className="text-2xl font-bold">Refresh Your Scores</h2>
            </div>
            <p className="text-white/65 leading-relaxed mb-2">
              If your scores are outdated (after a hardware upgrade) or show blank values, open{' '}
              <strong className="text-white/85">Command Prompt as Administrator</strong> and run:
            </p>
            <CopyableCommand command="winsat formal" />
            <div className="flex items-start gap-3 mt-4 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <RefreshCw size={16} className="text-yellow-400 mt-0.5 shrink-0" />
              <p className="text-sm text-yellow-300/80 leading-relaxed">
                This runs all five sub-tests in sequence. It typically takes <strong className="text-yellow/90">3–5 minutes</strong> and
                will briefly stress your CPU, RAM, and disk. Your screen may flicker during the graphics tests — this is normal.
                After it completes, re-run the PowerShell command in Step 1 to see updated scores.
              </p>
            </div>
          </motion.div>

          {/* ── What the Scores Mean ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/15 rounded-lg">
                <BarChart3 size={20} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Understanding Your Scores</h2>
            </div>

            <p className="text-white/65 leading-relaxed mb-6">
              The <strong className="text-white/85">WinSPRLevel</strong> (your overall "base score") is set
              by whichever component scores <em>lowest</em> — it identifies your PC's{' '}
              <strong className="text-white/85">weakest link</strong>, not its average.
              Here's a sample output for a mid-range modern PC:
            </p>

            <div className="space-y-4 mb-6">
              {exampleScores.map((s) => (
                <ScoreBar key={s.label} {...s} />
              ))}
            </div>

            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl mb-6">
              <p className="text-sm text-blue-300/80 leading-relaxed">
                <strong className="text-blue-300">WinSPRLevel (Overall) = 6.1</strong> — determined by
                Gaming Graphics, the weakest component in this example, even though CPU and disk score much higher.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { range: '1.0 – 3.9', label: 'Basic', desc: 'Handles web browsing, documents, and email.', color: 'border-red-500/30 bg-red-500/5 text-red-300' },
                { range: '4.0 – 6.9', label: 'Capable', desc: 'Runs most mainstream apps and light gaming.', color: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-300' },
                { range: '7.0 – 9.9', label: 'Powerful', desc: 'Handles demanding workloads and modern gaming.', color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300' },
              ].map(({ range, label, desc, color }) => (
                <div key={range} className={`border rounded-xl p-4 ${color}`}>
                  <div className="text-lg font-bold">{range}</div>
                  <div className="font-semibold mt-0.5">{label}</div>
                  <div className="text-xs opacity-70 mt-1 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Important Note ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="bg-yellow-500/5 border border-yellow-500/25 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/15 rounded-lg">
                <AlertTriangle size={20} className="text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-yellow-300">Important Limitations</h2>
            </div>
            <p className="text-white/65 leading-relaxed">
              The Windows Experience Index is a <strong className="text-white/85">quick, high-level overview</strong> only.
              Scores top out at <strong className="text-white/85">9.9</strong>, so modern flagship hardware tends to cluster near
              the ceiling, making it hard to distinguish between a mid-range and a top-tier GPU, for example.
            </p>
            <p className="text-white/65 leading-relaxed mt-3">
              For deeper, real-world benchmarking, use dedicated tools such as:
            </p>
            <ul className="mt-3 space-y-1.5 text-white/65">
              {[
                { name: 'Cinebench', desc: 'CPU rendering performance' },
                { name: '3DMark', desc: 'GPU and gaming performance' },
                { name: 'CrystalDiskMark', desc: 'Storage read/write speeds' },
                { name: 'UserBenchmark', desc: 'Overall system comparison' },
              ].map(({ name, desc }) => (
                <li key={name} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  <strong className="text-white/85">{name}</strong>
                  <span className="text-white/40">—</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── FAQ ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Terminal size={22} className="text-blue-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              <AccordionFAQ question="Why does the Get-CimInstance command return blank values?">
                WinSAT has likely never been run on this machine or the cached results were cleared.
                Run <code className="bg-white/10 px-1 rounded text-blue-300">winsat formal</code> in an
                elevated Command Prompt to generate fresh scores, then re-run the PowerShell command.
              </AccordionFAQ>
              <AccordionFAQ question="Do I need to re-run winsat after upgrading hardware?">
                Yes. WinSAT caches the last assessment. After swapping a GPU, adding RAM, or upgrading
                storage, run <code className="bg-white/10 px-1 rounded text-blue-300">winsat formal</code> again
                to update all five component scores.
              </AccordionFAQ>
              <AccordionFAQ question="Is WinSAT available on Windows 11?">
                Yes. Microsoft removed the graphical Windows Experience Index dashboard in Windows 8, but
                the underlying <strong>WinSAT</strong> executable and its WMI data remain fully functional
                on Windows 10 and Windows 11 as of the current release.
              </AccordionFAQ>
              <AccordionFAQ question="What is the difference between CPUScore and WinSPRLevel?">
                <code className="bg-white/10 px-1 rounded text-blue-300">CPUScore</code> reflects only
                your processor performance. <code className="bg-white/10 px-1 rounded text-blue-300">WinSPRLevel</code> is
                the overall "base score" and equals the <em>lowest</em> individual component score — it's your
                system's weakest link, not an average.
              </AccordionFAQ>
              <AccordionFAQ question="Should I rely on WEI to decide if my PC can run a game?">
                Not alone. WEI provides a rough category (basic / capable / powerful) but won't tell you if your
                GPU can handle a specific game at 1080p 60 fps. Check the game's minimum and recommended specs
                and cross-reference with a dedicated benchmark like 3DMark or GPU hierarchy charts from hardware
                review sites.
              </AccordionFAQ>
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="text-center border border-white/10 rounded-2xl p-10 bg-white/3"
          >
            <h2 className="text-2xl font-bold mb-3">Need Help Interpreting Your Results?</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Rahvion's Personal IT Department can walk you through your system scores, identify upgrade
              priorities, and recommend performance improvements — all remotely.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-8 py-3 rounded-xl"
            >
              Talk to a Technician
            </a>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
};

export default WindowsExperienceIndexPage;
