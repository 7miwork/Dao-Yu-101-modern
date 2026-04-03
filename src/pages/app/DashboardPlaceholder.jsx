import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { handleRoleSelection } from "../../features/auth";

function DashboardPlaceholder() {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    console.log("User selected role:", role);
    handleRoleSelection(role, navigate);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <Card className="p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4F7CFF]">Select Dashboard</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#1E293B] sm:text-4xl">Welcome back</h1>
        <p className="mt-4 max-w-2xl text-[#475569]">
          Please select which dashboard you would like to access:
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button onClick={() => handleSelectRole("student")}>
            Student Dashboard
          </Button>
          
          <Button variant="secondary" onClick={() => handleSelectRole("teacher")}>
            Teacher Dashboard
          </Button>
          
          <Button variant="secondary" onClick={() => handleSelectRole("admin")}>
            Admin Dashboard
          </Button>
        </div>
      </Card>
    </main>
  );
}

export default DashboardPlaceholder;
