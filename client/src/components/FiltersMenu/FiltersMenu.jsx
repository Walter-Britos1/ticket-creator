import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function FiltersMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Botón de abrir/cerrar menú */}
      <button
        className={`absolute top-7 left-4 z-20 text-sm font-medium transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-[250px]' : 'translate-x-0'}`}
        onClick={() => setMenuOpen(!menuOpen)}
        title='Filters'
      >
        {menuOpen ? <ArrowLeft className='text-2xl' /> : <ArrowRight className='text-2xl' />}
      </button>

      {/* Menu de Filtros */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-6'>
          <h2 className='text-lg font-bold mb-4'>Filters</h2>

          {/* Filtrar por estado */}
          <label className='text-sm font-medium'>Filter by Status</label>
          <select className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4'>
            <option value="">All</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>

          {/* Filtrar por dificultad */}
          <label className='text-sm font-medium'>Filter by Difficulty</label>
          <select className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4'>
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>

          {/* Filtrar por tiempo de creación */}
          <label className='text-sm font-medium'>Filter by Created Time</label>
          <select className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-6'>
            <option value="">All</option>
            <option value="last-3-days">Last 3 Days</option>
            <option value="last-7-days">Last 7 Days</option>
            <option value="this-month">This Month</option>
          </select>

          {/* Botón para aplicar filtros */}
          <button className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition'>
            Apply Filters
          </button>
          {/* Botón para resetear los filtros */}
          <button className='w-full bg-gray-200 text-gray-700 mt-2 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition'>
            Reset Filters
          </button>
        </div>
      </div>

      {/* Overlay cuando el menú está abierto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic en el overlay
        />
      )}
    </div>
  );
}
