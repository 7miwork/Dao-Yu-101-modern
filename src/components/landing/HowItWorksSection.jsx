import { BookOpenCheck, School, UserPlus } from "lucide-react";
import Card from "../ui/Card";

const steps = [
  {
    title: "Create account",
    description: "Register in a few steps and set up your role.",
    icon: UserPlus,
  },
  {
    title: "Join school or class",
    description: "Connect to your institution and access the right workspace.",
    icon: School,
  },
  {
    title: "Start learning",
    description: "Follow your plan and track progress with clear guidance.",
    icon: BookOpenCheck,
  },
];

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h3 className="text-3xl font-semibold text-[#1E293B] sm:text-4xl">How it works</h3>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title}>
            <Card className="h-full p-7">
              <p className="text-xs font-medium text-[#4F7CFF]">Step {index + 1}</p>
              <step.icon size={18} className="mt-3 text-[#6C63FF]" />
              <p className="mt-3 text-lg font-medium text-[#1E293B]">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
