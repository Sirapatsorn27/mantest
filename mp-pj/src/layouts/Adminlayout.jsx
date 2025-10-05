import React, { useState } from 'react'; 
import { Outlet } from 'react-router-dom';

import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';



const Adminlayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Navbar - Fixed at top */}
      <AdminNavbar 
        onToggleSidebar={toggleSidebar} 
        onToggleMobileSidebar={toggleMobileSidebar}
      />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Overlay for mobile - Enhanced with smooth transition */}
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300"
            onClick={toggleMobileSidebar}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <AdminSidebar 
          isCollapsed={isSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={toggleMobileSidebar}
        />

        {/* Content Area - Scrollable with responsive padding */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50 w-full">
          <div className="min-h-full">
            {/* Responsive Container */}
            <div className="w-full max-w-[100vw] mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 xl:px-10 xl:py-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Adminlayout;
