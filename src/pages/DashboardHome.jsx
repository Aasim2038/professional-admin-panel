import React from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData, recentOrders } from '../data/mockData';

// Stat Card Component (Chote boxes)
const StatCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
            <Icon size={24} className={color.replace('bg-', 'text-')} />
        </div>
        <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">{trend}</span>
    </div>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{title}</p>
    <h3 className="text-2xl font-bold dark:text-white">{value}</h3>
  </div>
);

const DashboardHome = () => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-end">
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="₹4,50,000" icon={DollarSign} color="bg-green-500 text-green-600" trend="+12%" />
        <StatCard title="Total Orders" value="1,250" icon={ShoppingCart} color="bg-blue-500 text-blue-600" trend="+5%" />
        <StatCard title="New Customers" value="340" icon={Users} color="bg-purple-500 text-purple-600" trend="+18%" />
        <StatCard title="Growth Rate" value="+22.5%" icon={TrendingUp} color="bg-yellow-500 text-yellow-600" trend="+2%" />
      </div>

      {/* Main Graph Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-[400px]">
        <h2 className="text-lg font-bold mb-6 dark:text-white">Revenue Analytics</h2>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart data={salesData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-gray-100 dark:stroke-gray-700" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs text-gray-500" />
            <YAxis axisLine={false} tickLine={false} className="text-xs text-gray-500" />
            <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                itemStyle={{ color: '#3b82f6' }}
            />
            <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

       {/* Recent Orders Table */}
       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold dark:text-white">Recent Orders</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
         </div>
         <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
                 <thead>
                     <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700 text-sm uppercase tracking-wider">
                         <th className="pb-3 font-medium">Order ID</th>
                         <th className="pb-3 font-medium">Customer</th>
                         <th className="pb-3 font-medium">Product</th>
                         <th className="pb-3 font-medium">Amount</th>
                         <th className="pb-3 font-medium">Status</th>
                     </tr>
                 </thead>
                 <tbody>
                     {recentOrders.map((order, index) => (
                         <tr key={index} className="border-b last:border-b-0 border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                             <td className="py-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                             <td className="py-4 text-gray-600 dark:text-gray-300">{order.customer}</td>
                             <td className="py-4 text-gray-600 dark:text-gray-300">{order.product}</td>
                             <td className="py-4 font-bold text-gray-900 dark:text-white">{order.amount}</td>
                             <td className="py-4">
                                 <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                                     ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                                     order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                                     'bg-blue-100 text-blue-700'}`}>
                                     {order.status}
                                 </span>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
       </div>
    </div>
  );
};

export default DashboardHome;