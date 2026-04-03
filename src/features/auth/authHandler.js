/**
 * Authentication Handler with Role based Redirect
 * Implements student redirect to V2 platform after successful login
 */

export const V2_PLATFORM_URL = "https://7miwork.github.io/Dao-Yu-101-V2/";

/**
 * Handles post login redirect logic - first shows role selection screen
 * @param {Object} user - Authenticated user object
 * @param {Function} navigate - React Router navigate function for internal routes
 */
export const handlePostLoginRedirect = (user, navigate) => {
  if (!user) return;
  
  console.log("LOGIN SUCCESSFUL, navigating to role selection screen");
  
  // Always go to role selection screen first after login
  // User will select their role/dashboard manually
  if (navigate) {
    navigate("/dashboard");
  }
};

/**
 * Final redirect after user has selected their role
 * This should be called ONLY after user has made an explicit selection
 * @param {string} selectedRole - Role selected by user from UI
 * @param {Function} navigate - React Router navigate function
 */
export const handleRoleSelection = (selectedRole, navigate) => {
  console.log("ROLE SELECTED BY USER:", selectedRole);
  
  // Only after EXPLICIT user selection we redirect
  if (selectedRole === "student") {
    window.location.href = V2_PLATFORM_URL;
    return;
  }
  
  // Other roles go to their respective dashboards
  if (navigate) {
    navigate(`/${selectedRole}/dashboard`);
  }
};

/**
 * Mock login function for testing purposes
 * Replace with actual authentication implementation
 */
export const login = async (credentials) => {
  // This will be replaced with actual API call
  const mockUser = {
    id: 1,
    email: credentials.email,
    role: credentials.role || "student",
    name: "Test User"
  };
  
  return mockUser;
};