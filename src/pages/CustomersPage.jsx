import React from 'react';
import { Search, Mail, Phone, MapPin, MoreVertical } from 'lucide-react';

const CustomersPage = () => {
  // Fake Customer Data (Yahin define kar diya taaki easy rahe)
  const customers = [
    { id: 1, name: 'Rahul Verma', email: 'rahul@gmail.com', role: 'Customer', status: 'Active', location: 'Mumbai, India' },
    { id: 2, name: 'Priya Sharma', email: 'priya.s@outlook.com', role: 'VIP Member', status: 'Active', location: 'Delhi, India' },
    { id: 3, name: 'Amit Patel', email: 'amit.p@tech.com', role: 'Customer', status: 'Inactive', location: 'Gujarat, India' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah.w@gmail.com', role: 'Customer', status: 'Active', location: 'New York, USA' },
    { id: 5, name: 'Mohd Aasim', email: 'aasim@dev.com', role: 'Admin', status: 'Active', location: 'Hyderabad, India' },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Customers</h1>
            <p className="text-gray-500 text-sm mt-1">Total {customers.length} active customers found.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            + Add Customer
        </button>
      </div>

      {/* Cards List for Customers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
            <div key={customer.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                        {customer.name.charAt(0)}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{customer.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{customer.role}</p>
                
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                        <Mail size={16} className="text-gray-400" />
                        {customer.email}
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-gray-400" />
                        {customer.location}
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                        {customer.status}
                    </span>
                    <button className="text-blue-600 text-sm font-medium hover:underline">View Profile</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersPage;