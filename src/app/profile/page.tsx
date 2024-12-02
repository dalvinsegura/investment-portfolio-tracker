"use client";

import { useApp } from "../../contexts/AppContext";

export default function Profile() {
  const { user } = useApp();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
