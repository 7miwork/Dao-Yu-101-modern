import Card from "../../components/ui/Card";

function DashboardPlaceholder() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <Card className="p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4F7CFF]">Dashboard Placeholder</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#1E293B] sm:text-4xl">Role-based dashboard layer is ready.</h1>
        <p className="mt-4 max-w-2xl text-[#475569]">
          Upcoming phases will mount Student, Teacher, and Parent experiences on top of this shared app shell.
        </p>
      </Card>
    </main>
  );
}

export default DashboardPlaceholder;
