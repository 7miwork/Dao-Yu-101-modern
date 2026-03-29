import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
      <div className="rounded-[24px] border border-[#dbe5ff] bg-white p-10 shadow-[0_14px_36px_rgba(30,41,59,0.08)] sm:p-14">
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] text-[#1E293B] sm:text-6xl">
          Dao-Yu-101
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#475569] sm:text-lg">
          A modern learning platform for schools, teachers, parents, and students.
        </p>

        <div className="mt-10">
          <Button aria-label="Start learning with Dao-Yu-101">
            Start Learning
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
