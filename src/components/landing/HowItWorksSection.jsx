import { motion } from "framer-motion";
import { BrainCircuit, CircleUserRound, Trophy } from "lucide-react";
import Card from "../ui/Card";

const steps = [
  {
    title: "Choose your role and learning path",
    description: "Start as student, teacher, parent, or school account with guided onboarding.",
    icon: CircleUserRound,
  },
  {
    title: "AI adapts your experience",
    description: "Content, goals, and feedback adjust continuously to real progress signals.",
    icon: BrainCircuit,
  },
  {
    title: "Track progress and celebrate growth",
    description: "Dashboards and gamified milestones keep everyone aligned and motivated.",
    icon: Trophy,
  },
];

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h3 className="text-2xl font-semibold text-[#1E293B] sm:text-3xl">How it works</h3>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full p-6">
              <p className="text-xs font-medium text-[#4F7CFF]">Step {index + 1}</p>
              <step.icon size={18} className="mt-3 text-[#6C63FF]" />
              <p className="mt-3 text-lg font-medium text-[#1E293B]">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{step.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
