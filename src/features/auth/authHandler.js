/**
 * Authentication Handler with Role based Redirect
 * Implements student redirect to V2 platform after successful login
 */

export const V2_PLATFORM_URL = "https://7miwork.github.io/Dao-Yu-101-V2/";

/**
 * Handles post login redirect logic based on user role
 * @param {Object} user - Authenticated user object with role property
 * @param {Function} navigate - React Router navigate function for internal routes
 */
export const handlePostLoginRedirect = (user, navigate) => {
  if (!user) return;
  
  // Student users get redirected to external V2 platform
  if (user.role === "student") {
    window.location.href = V2_PLATFORM_URL;
    return;
  }
  
  // All other roles (teacher, admin, school) continue to internal dashboard
  if (navigate) {
    navigate("/dashboard");
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