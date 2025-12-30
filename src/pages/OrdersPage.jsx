import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import { recentOrders } from '../data/mockData';

const OrdersPage = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Logic to filter orders based on status
  const filteredOrders = statusFilter === 'All' 
    ? recentOrders 
    : recentOrders.filter(order => order.status === statusFilter);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Orders Management</h1>
            <p className="text-gray-500 text-sm mt-1">Manage and track all your customer orders.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            + Create New Order
        </button>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-4 justify-between items-center">
        
        {/* Filter Buttons */}
        <div className="flex space-x-2">
            {['All', 'Pending', 'Shipped', 'Delivered'].map((status) => (
                <button 
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        statusFilter === status 
                        ? 'bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400' 
                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700'
                    }`}
                >
                    {status}
                </button>
            ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search by Order ID..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                        <th className="px-6 py-4 font-medium">Order ID</th>
                        <th className="px-6 py-4 font-medium">Customer</th>
                        <th className="px-6 py-4 font-medium">Date</th>
                        <th className="px-6 py-4 font-medium">Total</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredOrders.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold mr-3">
                                        {order.customer.charAt(0)}
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">{order.customer}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">Oct 24, 2025</td>
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{order.amount}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-700 border border-green-200' : 
                                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' : 
                                    'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                                    {order.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <Eye size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {/* Pagination (Fake) */}
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-sm text-gray-500">
            <p>Showing 1-5 of 20 results</p>
            <div className="flex gap-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">Prev</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;