import React, { createContext, useEffect, useState } from "react";
import { account } from "../appwrite/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await account.get();
      setUser(res);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
