"use client";

import { useState } from "react";
import { useApp } from "../../contexts/AppContext";
import InvestmentForm from "../../components/InvestmentForm";
import InvestmentList from "../../components/InvestmentList";
import ExportButton from "../../components/ExportButton";

export default function Investments() {
  const { investments, deleteInvestment, calculatePerformance } = useApp();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this investment?")) {
      deleteInvestment(id);
    }
  };

  const handleSubmit = () => {
    setEditingId(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
      <InvestmentForm
        investmentId={editingId || undefined}
        onSubmit={handleSubmit}
      />
      <InvestmentList
        investments={investments}
        onEdit={handleEdit}
        onDelete={handleDelete}
        calculatePerformance={calculatePerformance}
      />
      <ExportButton investments={investments} />
    </div>
  );
}
