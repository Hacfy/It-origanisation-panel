'use client';

import { useState, } from 'react';

export default function CreateSuperAdmin() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Load existing super admins from localStorage
    const existing = JSON.parse(localStorage.getItem('superAdmins') || '[]');

    // Add new one
    const updated = [...existing, formData];

    // Save to localStorage
    localStorage.setItem('superAdmins', JSON.stringify(updated));

    alert('Super Admin created!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">Create Super Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  );
}
