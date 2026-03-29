import Card from "../ui/Card";

function ProblemSolutionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <Card className="grid gap-6 p-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#64748B]">Problem</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#1E293B]">Traditional education is difficult to personalize.</h2>
          <p className="mt-4 text-[#475569]">
            Students learn at different speeds, teachers carry heavy planning workloads, and parents often lack clear
            progress visibility.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#4F7CFF]">Solution</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#1E293B]">A calm, adaptive platform for every learning role.</h2>
          <p className="mt-4 text-[#475569]">
            Dao-Yu-101 combines AI-guided content, classroom tooling, parent tracking, and role-ready architecture in
            one scalable system.
          </p>
        </div>
      </Card>
    </section>
  );
}

export default ProblemSolutionSection;
