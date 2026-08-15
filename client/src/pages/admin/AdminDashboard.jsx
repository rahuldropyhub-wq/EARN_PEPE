import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Search, Download, FileText, FileSpreadsheet, FileJson, 
  Calendar, Users, Filter, ChevronDown 
} from 'lucide-react';
import { isToday, isYesterday, isTomorrow, isWithinInterval, startOfDay, endOfDay, parseISO } from 'date-fns';
import { getRegistrations } from '../../services/registrationService';
import { logoutAdmin } from '../../services/authService';
import { downloadCSV, downloadExcel, downloadPDF } from '../../utils/exportUtils';

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all'); // all, today, yesterday, tomorrow, custom
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getRegistrations();
        // Sort newest first
        data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setRegistrations(data);
      } catch (error) {
        console.error("Failed to load registrations:", error);
      }
    };
    loadData();
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  // Filter logic
  const filteredData = useMemo(() => {
    return registrations.filter(item => {
      // 1. Search Filter
      const searchString = searchTerm.toLowerCase();
      const matchesSearch = 
        item.fullName.toLowerCase().includes(searchString) ||
        item.email.toLowerCase().includes(searchString) ||
        item.phonePeNumber.includes(searchString) ||
        item.contactNumber.includes(searchString);

      if (!matchesSearch) return false;

      // 2. Date Filter
      if (dateFilter === 'all') return true;

      const itemDate = parseISO(item.timestamp);

      if (dateFilter === 'today') return isToday(itemDate);
      if (dateFilter === 'yesterday') return isYesterday(itemDate);
      if (dateFilter === 'tomorrow') return isTomorrow(itemDate);
      
      if (dateFilter === 'custom' && startDate && endDate) {
        return isWithinInterval(itemDate, {
          start: startOfDay(new Date(startDate)),
          end: endOfDay(new Date(endDate))
        });
      }

      return true; // Fallback if custom dates not set yet
    });
  }, [registrations, searchTerm, dateFilter, startDate, endDate]);

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* Top Navigation */}
      <header className="bg-[#051408] border-b border-green-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <Users size={18} className="text-black" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Admin Dashboard</h1>
              <p className="text-xs text-green-500">EarnPepe Campaign</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-500/10"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#050a06] border border-green-500/20 p-5 rounded-2xl">
            <p className="text-gray-500 text-sm font-medium mb-1">Total Registrations</p>
            <p className="text-3xl font-black text-white">{registrations.length}</p>
          </div>
          <div className="bg-[#050a06] border border-green-500/20 p-5 rounded-2xl">
            <p className="text-gray-500 text-sm font-medium mb-1">Filtered Results</p>
            <p className="text-3xl font-black text-green-400">{filteredData.length}</p>
          </div>
          <div className="bg-[#050a06] border border-green-500/20 p-5 rounded-2xl flex flex-col justify-center">
            <p className="text-gray-500 text-sm font-medium mb-3">Export Data</p>
            <div className="flex gap-2">
              <button onClick={() => downloadCSV(filteredData)} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-xs py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors" title="Download CSV">
                <FileJson size={14} /> CSV
              </button>
              <button onClick={() => downloadExcel(filteredData)} className="flex-1 bg-green-900/50 hover:bg-green-800/60 text-green-400 text-xs py-2 rounded-lg flex items-center justify-center gap-1.5 border border-green-500/30 transition-colors" title="Download Excel">
                <FileSpreadsheet size={14} /> Excel
              </button>
              <button onClick={() => downloadPDF(filteredData)} className="flex-1 bg-red-900/40 hover:bg-red-800/50 text-red-400 text-xs py-2 rounded-lg flex items-center justify-center gap-1.5 border border-red-500/30 transition-colors" title="Download PDF">
                <FileText size={14} /> PDF
              </button>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-[#050a06] border border-green-500/20 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col lg:flex-row gap-4 lg:items-end">
          
          {/* Search */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Search size={16} />
              </div>
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black border border-green-500/20 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>

          {/* Date Filter Dropdown */}
          <div className="w-full lg:w-48">
            <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Date Range</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Filter size={16} />
              </div>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full bg-black border border-green-500/20 rounded-xl py-2.5 pl-10 pr-8 text-sm text-white appearance-none focus:outline-none focus:border-green-500 transition-colors cursor-pointer"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="custom">Custom Range</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Custom Date Pickers */}
          {dateFilter === 'custom' && (
            <div className="flex gap-2 w-full lg:w-auto">
              <div className="flex-1 lg:w-40">
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-black border border-green-500/20 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-green-500 [color-scheme:dark]"
                />
              </div>
              <div className="flex-1 lg:w-40">
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-black border border-green-500/20 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-green-500 [color-scheme:dark]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="bg-[#050a06] border border-green-500/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/50 border-b border-green-500/20">
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact No.</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">PhonePe No.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-500/10">
                {filteredData.length > 0 ? (
                  filteredData.map((reg) => (
                    <tr key={reg.id} className="hover:bg-green-500/5 transition-colors">
                      <td className="px-5 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-300">
                          {new Date(reg.timestamp).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-600">
                          {new Date(reg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{reg.fullName}</div>
                        <div className="text-xs text-gray-600">ID: {reg.id.split('-')[1] || reg.id}</div>
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-400">
                        {reg.email}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-400">
                        {reg.contactNumber}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          {reg.phonePeNumber}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-5 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Search size={32} className="text-gray-700 mb-2" />
                        <p className="text-base">No registrations found</p>
                        <p className="text-xs text-gray-600">Try adjusting your filters or search term.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
