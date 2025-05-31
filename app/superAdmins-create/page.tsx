'use client';

import { useState } from 'react';
import ChooseSuperAdmin from '@/components/Admins/chooseSuperAdmin';
import CreateSuperAdmin from '@/components/Admins/createSuperAdmin';

export default function ChooseSuperAdminPage() {
  const [view, setView] = useState<'menu' | 'create' | 'view'>('menu');

  return (
    <div className="w-full mx-auto p-6 justify-center  items-center align-middle text-center min-h-screen">
      {view === 'menu' && (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">Super Admin Panel</h1>
          <button
            className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-700 p-5"
            onClick={() => setView('create')}
          >
            Create Super Admin
          </button>
          <button
            className=" bg-green-600 text-white py-2 rounded hover:bg-green-700 p-5"
            onClick={() => setView('view')}
          >
            View Super Admins
          </button>
        </div>
      )}

      {view === 'create' && (
        <div>
          <button
            className="mb-4 text-blue-600 underline"
            onClick={() => setView('menu')}
          >
            ← Back to Menu
          </button>
          <CreateSuperAdmin />
        </div>
      )}

      {view === 'view' && (
        <div>
          <button
            className="mb-4 text-blue-600 underline"
            onClick={() => setView('menu')}
          >
            ← Back to Menu
          </button>
          <ChooseSuperAdmin />
        </div>
      )}
    </div>
  );
}
