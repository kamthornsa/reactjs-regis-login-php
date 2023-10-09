import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [role, setRole_] = useState(localStorage.getItem("role")); // Added role state

  // Function to set the authentication token
  // const setToken = (newToken) => {
  //   setToken_(newToken);
  // };
  const setTokenAndRole = (newToken, newRole) => {
    // Modified function to set token and role
    setToken_(newToken);
    setRole_(newRole);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }

    if (role) {
      // Added effect for role
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
  }, [token, role]); // Added role dependency

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      role, // Added role
      setTokenAndRole, // Modified to setTokenAndRole
    }),
    [token, role] // Added role dependency
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
