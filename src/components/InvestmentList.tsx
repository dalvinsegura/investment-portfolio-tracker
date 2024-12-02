import { Investment } from "../types/investment";

interface InvestmentListProps {
  investments: Investment[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  calculatePerformance: (investment: Investment) => number;
}

export default function InvestmentList({
  investments,
  onEdit,
  onDelete,
  calculatePerformance,
}: InvestmentListProps) {
  return (
    <div className="space-y-4">
      {investments.map((investment) => (
        <div key={investment.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{investment.name}</h3>
          <p>Amount: ${investment.amount}</p>
          <p>Current Value: ${investment.currentValue}</p>
          <p>Date: {investment.date}</p>
          <p>Type: {investment.type}</p>
          <p>Performance: {calculatePerformance(investment).toFixed(2)}%</p>
          {investment.notes && <p>Notes: {investment.notes}</p>}
          <div className="mt-2 space-x-2">
            <button
              onClick={() => onEdit(investment.id)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(investment.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
