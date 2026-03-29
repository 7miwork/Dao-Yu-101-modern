import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  Gamepad2,
  GraduationCap,
  Orbit,
  Sparkles,
  Workflow,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const features = [
  {
    title: "AI Personalized Learning",
    description: "Adaptive lessons tailored to each learner's pace, strengths, and goals.",
    icon: Sparkles,
  },
  {
    title: "Gamified XP / Level System",
    description: "Motivating progress loops with quests, streaks, XP, and smart achievements.",
    icon: Gamepad2,
  },
  {
    title: "Multi Role System",
    description: "Student, Teacher, and School dashboards in one synchronized ecosystem.",
    icon: Building2,
  },
  {
    title: "Modular Learning Architecture",
    description: "Island-based modules that scale from micro-lessons to full curriculums.",
    icon: Workflow,
  },
];

const steps = [
  {
    title: "Choose learning path",
    description: "Pick curriculum islands by subject, level, and classroom goals.",
    icon: Orbit,
  },
  {
    title: "AI adapts content",
    description: "The engine continuously personalizes lessons, pacing, and challenge.",
    icon: BrainCircuit,
  },
  {
    title: "Progress through gamification",
    description: "Learners unlock XP, levels, and quests while building mastery.",
    icon: Gamepad2,
  },
];

const logos = ["School Logo", "District Partner", "Learning Network", "Academy Group", "Campus Hub", "EdTech Partner"];

const cardAnimation = {
  hidden: { opacity: 0, y: 24 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  }),
};

function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl border border-slate-700/40 bg-slate-900/40 p-8 shadow-glow backdrop-blur-xl sm:p-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-200">
            <GraduationCap size={14} />
            AI Learning OS
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Dao-Yu-101
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            AI-powered learning platform for students, teachers and schools
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button>
              Get Started
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary">
              Explore Platform
              <BookOpenCheck size={16} />
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10">
        <Card className="grid gap-6 p-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Problem</p>
            <h2 className="mt-3 text-2xl font-medium text-white">Traditional systems are static and one-size-fits-all.</h2>
            <p className="mt-4 text-slate-300">
              Students fall behind, teachers burn out, and schools struggle to personalize outcomes at scale.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Solution</p>
            <h2 className="mt-3 text-2xl font-medium text-white">Adaptive AI learning that grows with every user.</h2>
            <p className="mt-4 text-slate-300">
              Dao-Yu-101 orchestrates personalized learning journeys, progress gamification, and institution-level insights.
            </p>
          </div>
        </Card>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Core platform capabilities</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={cardAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/50"
            >
              <feature.icon className="text-cyan-300" />
              <h4 className="mt-4 text-lg font-semibold text-white">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">How it works</h3>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 text-slate-200 backdrop-blur-md transition duration-300 hover:border-cyan-300/40"
            >
              <p className="text-xs tracking-widest text-cyan-300">STEP {index + 1}</p>
              <step.icon size={18} className="mt-3 text-cyan-200" />
              <p className="mt-3 text-lg font-medium">{step.title}</p>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Trusted by educators</h3>
        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {logos.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-slate-700/50 bg-slate-900/30 px-4 py-5 text-center text-sm text-slate-300 transition duration-300 hover:border-slate-500 hover:text-slate-200"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-14">
        <Card className="border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-500/20 p-10 text-center shadow-glow sm:p-14">
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">Start building the future of education</h3>
          <Button className="mt-8 bg-white text-slate-900 hover:bg-slate-100">
            Join Dao-Yu-101
            <ArrowRight size={16} />
          </Button>
        </Card>
      </section>
    </main>
  );
}

export default LandingPage;
