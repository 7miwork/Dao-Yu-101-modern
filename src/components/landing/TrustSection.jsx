const trustItems = [
  "School Group",
  "Teacher Network",
  "Parent Council",
  "District Partner",
  "Learning Community",
  "Education Alliance",
];

function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-center text-base font-medium text-[#1E293B]">Built for education institutions</p>
      <p className="mt-2 text-center text-sm text-[#64748B]">
        Trusted by schools, teachers, and families who need clear learning progress and shared visibility.
      </p>
      <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-5 text-center text-sm text-[#64748B] shadow-[0_8px_20px_rgba(30,41,59,0.04)]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;
