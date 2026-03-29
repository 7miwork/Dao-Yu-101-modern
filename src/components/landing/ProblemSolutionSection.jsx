import Card from "../ui/Card";

function ProblemSolutionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Card className="grid gap-10 p-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-[#64748B]">Problem</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1E293B] sm:text-4xl">Learning tools are often fragmented.</h2>
          <p className="mt-4 leading-relaxed text-[#475569]">
            Teachers, parents, and students use separate systems, making it hard to track progress and coordinate
            support.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-[#4F7CFF]">Solution</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1E293B] sm:text-4xl">One platform for every education role.</h2>
          <p className="mt-4 leading-relaxed text-[#475569]">
            Dao-Yu-101 connects school management, classroom guidance, parent tracking, and student learning paths in a
            single trusted system.
          </p>
        </div>
      </Card>
    </section>
  );
}

export default ProblemSolutionSection;
