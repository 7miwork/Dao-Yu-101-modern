/**
 * Authentication Handler with Role based Redirect
 * Implements student redirect to V2 platform after successful login
 */

export const V2_PLATFORM_URL = "https://7miwork.github.io/Dao-Yu-101-V2/";

/**
 * Handles post login redirect logic with role based routing
 * @param {Object} user - Authenticated user object with role property
 * @param {Function} navigate - React Router navigate function for internal routes
 */
export const handlePostLoginRedirect = (user, navigate) => {
  if (!user) return;
  
  console.log("LOGIN SUCCESS USER:", user);
  console.log("ROLE:", user.role);

  // ✅ ONLY STUDENT gets DIRECT EXTERNAL REDIRECT
  if (user.role === "student") {
    console.log("STUDENT ROLE DETECTED → REDIRECT TO V2 PLATFORM");
    window.location.href = V2_PLATFORM_URL;
    return;
  }

  // ✅ ALL OTHER ROLES go to internal role selection screen
  console.log("NON-STUDENT ROLE → show dashboard selection");
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