"use client";
import { useEffect, useState } from "react";
import { getVisitedLinks } from "@/lib/userTracking";

export default function VisitedLinks() {
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    setVisited(getVisitedLinks());
  }, []);

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Visited Links</h3>
      <ul className="space-y-1 text-sm text-gray-600">
        {visited.length > 0 ? (
          visited.map((link, i) => <li key={i}>{link}</li>)
        ) : (
          <li>No links visited yet</li>
        )}
      </ul>
    </div>
  );
}
