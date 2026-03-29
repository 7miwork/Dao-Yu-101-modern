import { BookOpenCheck, Building2, ChartLine, HeartHandshake, Route } from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    title: "Adaptive Learning System",
    description: "Learning paths adapt to each student's pace and progression over time.",
    icon: BookOpenCheck,
  },
  {
    title: "Teacher Dashboard",
    description: "Future-ready class oversight with planning, assignments, and progress visibility.",
    icon: ChartLine,
  },
  {
    title: "Parent Tracking",
    description: "Parents can follow milestones, routines, and outcomes in a simple view.",
    icon: HeartHandshake,
  },
  {
    title: "School Management System",
    description: "Institution-level structure for classes, roles, and school-wide learning operations.",
    icon: Building2,
  },
  {
    title: "Student Learning Path",
    description: "Clear next steps keep students focused and reduce onboarding friction.",
    icon: Route,
  },
];

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h3 className="text-3xl font-semibold text-[#1E293B] sm:text-4xl">Core platform capabilities</h3>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <Card className="h-full p-7">
              <feature.icon className="text-[#5B6CFF]" />
              <h4 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{feature.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
