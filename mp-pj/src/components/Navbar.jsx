import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, DropdownDivider } from './Dropdown';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const currentUser = {
    firstname: "nakล่าสมบัติ",
    lastname: "Doefdfggdgdf",
    role: "Admin",
  };

  const signOut = () => {
    console.log("User signed out");
  };

  return (
    <nav className="bg-neutral-600 shadow-lg sticky top-0 z-50">
      <div className='container mx-auto px-6'>
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center -ml-[80px] group">
            <img
              src="/images/nakla.svg"
              alt="Manpower"
              className="h-15 w-auto group-hover:scale-110 transition-transform"
            />
          </Link>

          {/*  Notification and Profile */}
          <div className="flex items-center gap-4 mr-[5px]">
            {/* noti */}
            <button className="p-2 hover:bg-neutral-500 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* User Profile with Dropdown */}
            <Dropdown className="relative hover:bg-neutral-500 rounded-xl">
              <DropdownButton
                className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-8">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-medium text-xl flex-shrink-0">
                    {currentUser.firstname.charAt(0)}
                  </div>

                  {/* User Info */}
                  <div className="text-left">
                    <div className="text-xl font-medium text-white">
                      {currentUser.firstname}
                    </div>
                    <div className="text-sm text-gray-400">
                      {currentUser.role}
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </DropdownButton>

              <DropdownMenu className="absolute right-0 mt-1 w-full bg-white shadow-lg rounded-md text-xl">
                <DropdownItem className="px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Link to="/profile" className="block w-full">
                    My profile
                  </Link>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem
                  onClick={signOut}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;