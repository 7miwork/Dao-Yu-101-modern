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
    <section className="mx-auto max-w-6xl px-6 py-8">
      <p className="text-center text-sm font-medium text-[#64748B]">Trusted by schools, teachers, and families</p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-4 text-center text-sm text-[#64748B]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;
