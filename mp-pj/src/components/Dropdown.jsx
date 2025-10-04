import React, { useState } from 'react';

export const Dropdown = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={className}>
      <div onClick={toggleDropdown} className="relative">
        {children[0]} {/* DropdownButton */}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
          {children[1]} {/* DropdownMenu */}
        </div>
      )}
    </div>
  );
};

export const DropdownButton = ({ children, outline }) => (
  <button
    className={`text-white ${outline ? 'border border-white' : ''} px-4 py-2 rounded-md`}
  >
    {children}
  </button>
);

export const DropdownMenu = ({ children }) => (
  <div className="py-1">{children}</div>
);

export const DropdownItem = ({ href, children }) => (
  <a href={href} className="block px-4 py-2  hover:bg-gray-200">
    {children}
  </a>
);

export const DropdownDivider = () => (
  <div className="border-t border-gray-200 my-1"></div>
);