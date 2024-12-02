import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Investment Portfolio Tracker
      </h1>
      <p className="mb-8">Start managing your investments today!</p>
      <Link
        href="/investments"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        View Investments
      </Link>
    </div>
  );
}
