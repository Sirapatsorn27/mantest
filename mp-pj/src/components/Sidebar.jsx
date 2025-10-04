import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`w-60 bg-neutral-600 text-white min-h-screen  ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="p-5">
        
        {/* Menu Links */}
        <div className="space-y-3 text-xl">
          <NavLink to="/" className={({ isActive }) => `block py-2 px-4 rounded-md text-slate-50 hover:bg-neutral-500 hover:text-white transition-colors ${isActive ? 'bg-neutral-500' : ''}`}>
            หน้าแรก
          </NavLink>
          <NavLink to="/requestform" className={({ isActive }) => `block py-2 px-4 rounded-md text-slate-50 hover:bg-neutral-500 hover:text-white transition-colors ${isActive ? 'bg-neutral-500' : ''}`}>
            ใบขออัตรากำลังคน
          </NavLink>
          <NavLink to="/approve" className={({ isActive }) => `block py-2 px-4 rounded-md text-slate-50 hover:bg-neutral-500 hover:text-white transition-colors ${isActive ? 'bg-neutral-500' : ''}`}>
            อนุมัติกำลังคน
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `block py-2 px-4 rounded-md text-slate-50 hover:bg-neutral-500 hover:text-white transition-colors ${isActive ? 'bg-neutral-500' : ''}`}>
            DashBoard
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
