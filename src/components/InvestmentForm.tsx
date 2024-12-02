"use client";

import { useState, useEffect } from "react";
import { Investment } from "../types/investment";

interface InvestmentFormProps {
  onSubmit: (investment: Omit<Investment, "id">) => void;
  initialValues?: Investment;
}

export default function InvestmentForm({
  onSubmit,
  initialValues,
}: InvestmentFormProps) {
  const [investment, setInvestment] = useState<Omit<Investment, "id">>({
    name: "",
    amount: 0,
    currentValue: 0,
    date: "",
    type: "stock",
    notes: "",
  });

  useEffect(() => {
    if (initialValues) {
      setInvestment(initialValues);
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(investment);
    setInvestment({
      name: "",
      amount: 0,
      currentValue: 0,
      date: "",
      type: "stock",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={investment.name}
          onChange={(e) =>
            setInvestment({ ...investment, name: e.target.value })
          }
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="amount" className="block mb-1">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={investment.amount}
          onChange={(e) =>
            setInvestment({ ...investment, amount: parseFloat(e.target.value) })
          }
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="currentValue" className="block mb-1">
          Current Value
        </label>
        <input
          type="number"
          id="currentValue"
          value={investment.currentValue}
          onChange={(e) =>
            setInvestment({
              ...investment,
              currentValue: parseFloat(e.target.value),
            })
          }
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="date" className="block mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={investment.date}
          onChange={(e) =>
            setInvestment({ ...investment, date: e.target.value })
          }
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="type" className="block mb-1">
          Type
        </label>
        <select
          id="type"
          value={investment.type}
          onChange={(e) =>
            setInvestment({
              ...investment,
              type: e.target.value as Investment["type"],
            })
          }
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="stock">Stock</option>
          <option value="bond">Bond</option>
          <option value="real estate">Real Estate</option>
          <option value="crypto">Crypto</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="notes" className="block mb-1">
          Notes
        </label>
        <textarea
          id="notes"
          value={investment.notes}
          onChange={(e) =>
            setInvestment({ ...investment, notes: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {initialValues ? "Update Investment" : "Add Investment"}
      </button>
    </form>
  );
}
