import { Investment } from "../types/investment";

interface ExportButtonProps {
  investments: Investment[];
}

export default function ExportButton({ investments }: ExportButtonProps) {
  const exportToCSV = () => {
    const headers = [
      "Name",
      "Amount",
      "Current Value",
      "Date",
      "Type",
      "Notes",
    ];
    const csvContent = [
      headers.join(","),
      ...investments.map((inv) =>
        [
          inv.name,
          inv.amount,
          inv.currentValue,
          inv.date,
          inv.type,
          inv.notes || "",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "investments.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={exportToCSV}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
    >
      Export to CSV
    </button>
  );
}
