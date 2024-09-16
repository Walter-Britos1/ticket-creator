import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import useFilters from '@/hooks/useFilters';

export default function FiltersMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    filterStatus,
    filterDifficulty,
    filterCreatedTime,
    handleStatusChange,
    handleDifficultyChange,
    handleCreatedTimeChange,
    applyFilters 
  } = useFilters();

  const handleApplyFilters = () => {
    applyFilters(); 
    setMenuOpen(false); 
  };

  return (
    <div> 
      <button
        className={`absolute top-7 left-4 z-20 text-sm font-medium transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-[250px]' : 'translate-x-0'}`}
        onClick={() => setMenuOpen(!menuOpen)}
        title='Filters'
      >
        {menuOpen ? <ArrowLeft className='text-2xl' /> : <ArrowRight className='text-2xl' />}
      </button>
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-6'>
          <h2 className='text-lg font-bold mb-4'>Filters</h2>
          <label className='text-sm font-medium'>Filter by Status</label>
          <select 
            className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4'
            value={filterStatus}
            onChange={handleStatusChange}
          >
            <option value="">All</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <label className='text-sm font-medium'>Filter by Difficulty</label>
          <select
            className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4'
            value={filterDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>
          <label className='text-sm font-medium'>Filter by Created Time</label>
          <select
            className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-6'
            value={filterCreatedTime}
            onChange={handleCreatedTimeChange}
          >
            <option value="">All</option>
            <option value="last-3-days">Last 3 Days</option>
            <option value="last-7-days">Last 7 Days</option>
            <option value="this-month">This Month</option>
          </select>
          <button 
            className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition'
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)} 
        />
      )}
    </div>
  );
}
