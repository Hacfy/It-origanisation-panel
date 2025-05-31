'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChooseSuperAdmin() {
  const [admins, setAdmins] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('superAdmins') || '[]');
    setAdmins(saved);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Select a Super Admin</h2>
      {admins.length === 0 ? (
        <p className="text-center">No super admins found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {admins.map((admin, index) => (
            <div key={index}>
              <button
                className="w-full  text-black px-6 py-14 rounded-xl shadow hover:bg-gray-100 transition duration-200"
                onClick={() => router.push(`/home?admin=${admin.firstName}`)}
              >
                {admin.firstName} {admin.lastName}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
