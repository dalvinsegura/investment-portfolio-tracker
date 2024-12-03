"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Investment, User } from "../types/investment";

interface AppContextType {
  investments: Investment[];
  addInvestment: (investment: Omit<Investment, "id">) => void;
  updateInvestment: (id: string, investment: Partial<Investment>) => void;
  deleteInvestment: (id: string) => void;
  getInvestmentById: (id: string) => Investment | undefined;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  calculatePerformance: (investment: Investment) => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const addInvestment = useCallback((investment: Omit<Investment, "id">) => {
    const newInvestment = { ...investment, id: Date.now().toString() };
    setInvestments((prev) => [...prev, newInvestment]);
  }, []);

  const updateInvestment = useCallback(
    (id: string, updatedInvestment: Partial<Investment>) => {
      setInvestments((prev) =>
        prev.map((inv) =>
          inv.id === id ? { ...inv, ...updatedInvestment } : inv
        )
      );
    },
    []
  );

  const deleteInvestment = useCallback((id: string) => {
    setInvestments((prev) => prev.filter((inv) => inv.id !== id));
  }, []);

  const getInvestmentById = useCallback(
    (id: string) => {
      return investments.find((inv) => inv.id === id);
    },
    [investments]
  );

  const login = useCallback(async (email: string, password: string) => {
    // Simulated login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({ id: "1", name: "Test User", email });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const calculatePerformance = useCallback((investment: Investment) => {
    return (
      ((investment.currentValue - investment.amount) / investment.amount) * 100
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        investments,
        addInvestment,
        updateInvestment,
        deleteInvestment,
        getInvestmentById,
        user,
        login,
        logout,
        calculatePerformance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
