import { defineConfig } from "vite";
import { execSync } from "node:child_process";
import react from "@vitejs/plugin-react";

function detectRepoName() {
  const repositoryFromActions = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repositoryFromActions) {
    return repositoryFromActions;
  }

  try {
    const remote = execSync("git remote get-url origin", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    const cleaned = remote.replace(/\.git$/, "");
    const fromSsh = cleaned.includes(":") ? cleaned.split(":").pop() : cleaned;
    const repoName = fromSsh?.split("/").pop();

    if (repoName) {
      return repoName;
    }
  } catch {
    // Fall through to default repo name.
  }

  return "Dao-Yu-101-modern";
}

const repoName = detectRepoName();

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "/",
  plugins: [react()],
});
