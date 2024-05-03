import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [name, setName] = useState("");

  const login = ({ token, firstName }) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("token", token);
    setName(firstName);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("token", "");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, name, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
