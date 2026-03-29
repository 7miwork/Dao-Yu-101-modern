import { ArrowRight, BookOpenCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-14 pt-20 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-[24px] border border-[#dbe5ff] bg-gradient-to-br from-white via-[#f7f9ff] to-[#edf8f5] p-8 shadow-[0_20px_50px_rgba(79,124,255,0.12)] sm:p-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#cdd9ff] bg-[#eef3ff] px-4 py-2 text-xs font-medium text-[#4F7CFF]">
          <GraduationCap size={14} />
          AI Learning OS
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#1E293B] sm:text-6xl">
          Dao-Yu-101
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[#475569] sm:text-lg">
          AI-powered learning platform for students, teachers, schools, and parents.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button aria-label="Start learning with Dao-Yu-101">
            Start Learning
            <ArrowRight size={16} />
          </Button>
          <Button variant="secondary" aria-label="Explore the Dao-Yu-101 platform">
            Explore Platform
            <BookOpenCheck size={16} />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
