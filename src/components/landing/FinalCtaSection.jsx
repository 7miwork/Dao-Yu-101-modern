import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <Card className="border-[#cdd9ff] bg-gradient-to-br from-[#eef2ff] via-white to-[#f7f9fc] p-10 text-center sm:p-14">
        <h3 className="text-3xl font-semibold text-[#1E293B] sm:text-4xl">Start building the future of education</h3>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#475569]">
          Bring students, teachers, parents, and schools into one trusted learning operating system.
        </p>
        <Button className="mt-8" aria-label="Join Dao-Yu-101 now">
          Join Dao-Yu-101
          <ArrowRight size={16} />
        </Button>
      </Card>
    </section>
  );
}

export default FinalCtaSection;
