import Card from "../components/ui/Card";

function DashboardPlaceholder() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <Card className="p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Dashboard Placeholder</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Multi-role dashboard shell is ready.</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Next phases will mount Student, Teacher, and School Admin views here without changing the global app
          layout.
        </p>
      </Card>
    </main>
  );
}

export default DashboardPlaceholder;
