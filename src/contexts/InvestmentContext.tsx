"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Investment } from "../types/investment";

interface InvestmentContextType {
  investments: Investment[];
  addInvestment: (investment: Omit<Investment, "id">) => void;
  updateInvestment: (id: string, investment: Partial<Investment>) => void;
  deleteInvestment: (id: string) => void;
}

const InvestmentContext = createContext<InvestmentContextType | undefined>(
  undefined
);

export const useInvestments = () => {
  const context = useContext(InvestmentContext);
  if (!context) {
    throw new Error("useInvestments must be used within an InvestmentProvider");
  }
  return context;
};

export const InvestmentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [investments, setInvestments] = useState<Investment[]>([]);

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

  return (
    <InvestmentContext.Provider
      value={{ investments, addInvestment, updateInvestment, deleteInvestment }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};
