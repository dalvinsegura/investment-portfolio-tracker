"use client";

import { useInvestments } from "../../contexts/InvestmentContext";

export default function Investments() {
  const { investments } = useInvestments();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
      {investments.length === 0 ? (
        <p>You haven't added any investments yet.</p>
      ) : (
        <ul>
          {investments.map((investment) => (
            <li key={investment.id} className="mb-2">
              {investment.name} - ${investment.amount} ({investment.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
