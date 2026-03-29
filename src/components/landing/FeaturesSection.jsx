import { motion } from "framer-motion";
import { BrainCircuit, ChartLine, Gamepad2, HeartHandshake } from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    title: "Adaptive Learning",
    description: "AI adjusts pace, challenge, and sequence to fit each learner profile.",
    icon: BrainCircuit,
  },
  {
    title: "Teacher Dashboard",
    description: "Future-ready controls for class planning, insights, and intervention.",
    icon: ChartLine,
  },
  {
    title: "Parent Tracking",
    description: "Role-ready visibility into learning progress, habits, and milestones.",
    icon: HeartHandshake,
  },
  {
    title: "Gamified Learning",
    description: "Student engagement loops with quests, levels, and meaningful rewards.",
    icon: Gamepad2,
  },
];

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h3 className="text-2xl font-semibold text-[#1E293B] sm:text-3xl">Core education capabilities</h3>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full p-6">
              <feature.icon className="text-[#4F7CFF]" />
              <h4 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
