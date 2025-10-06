// CustomDropdown.jsx
import { useState } from 'react';

// ไอคอนลูกศร (SVG) สามารถใช้ library อย่าง Heroicons หรือใช้โค้ดนี้ได้เลย
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400">
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);


function UserStatusDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['ผ่านการอนุมัติ', 'รออนุมัติ'];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // ปิด dropdown เมื่อเลือกแล้ว
  };

  return (
    // ใช้ relative เพื่อให้รายการตัวเลือก absolute อยู่ภายในกรอบนี้
    <div className="relative w-64">
      {/* ส่วนที่ 1: ปุ่มที่มองเห็นและคลิกได้ */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-left"
      >
        {/* แสดงข้อความที่เลือก หรือ placeholder ถ้ายังไม่ได้เลือก */}
        <span className={selectedOption ? "text-gray-800" : "text-gray-400"}>
          {selectedOption || 'สถานะเอกสาร'}
        </span>
        
        {/* ไอคอนลูกศร */}
        <ChevronDownIcon />
      </button>

      {/* ส่วนที่ 2: รายการตัวเลือกที่จะแสดง/ซ่อน */}
      {isOpen && (
        <div 
          className="absolute z-10 mt-2 w-full origin-top-right rounded-md border border-gray-300 bg-white shadow-lg"
        >
          {/* ---> จุดสำคัญ: rounded-md ทำให้กรอบของรายการตัวเลือกเป็นมุมมน <--- */}
          <div className="py-1">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(option);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserStatusDropdown;