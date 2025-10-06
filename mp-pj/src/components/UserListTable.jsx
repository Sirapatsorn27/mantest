// src/components/DocumentTable.jsx

import React from 'react';
import { PrinterIcon, TrashIcon } from "@heroicons/react/solid";

// --- New and Improved StatusBadge Component ---
// คอมโพเนนต์ Badge ที่ดีไซน์ใหม่ให้ดูทันสมัย
const StatusBadge = ({ status }) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  let statusClasses = '';

  switch (status) {
    case 'ผ่านการอนุมัติ':
      statusClasses = 'bg-green-100 text-green-800';
      break;
    case 'รออนุมัติ':
      statusClasses = 'bg-yellow-100 text-yellow-800';
      break;
    case 'ไม่อนุมัติ':
      statusClasses = 'bg-red-100 text-red-800';
      break;
    default:
      statusClasses = 'bg-gray-100 text-gray-800';
      break;
  }

  return (
    <span className={`${baseClasses} ${statusClasses}`}>
      {status}
    </span>
  );
};


const DocumentTable = ({ documents, isLoading, onPrint, onDelete }) => {
  if (isLoading) {
    return <div className="text-center py-16 text-gray-500">กำลังโหลดข้อมูล...</div>;
  }

  if (!documents || documents.length === 0) {
    return <div className="text-center py-16 text-gray-500">ไม่พบข้อมูลเอกสาร</div>;
  }

  return (
    // --- Container with shadow and rounded corners ---
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200">
          {/* --- Refined Table Header --- */}
          <thead className="bg-gray-50">
            <tr>
              {/* Increased padding (px-6 py-3), uppercase, and lighter text */}
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">เลขที่เอกสาร</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันที่เอกสาร</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">แผนก</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ต้นสังกัด</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HR</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ฝ่ายบริหาร</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันที่ครบกำหนด</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          {/* --- Table Body with more vertical spacing --- */}
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((doc, index) => (
              <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                {/* Increased padding (px-6 py-4) and added whitespace-nowrap */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.itemNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.documentNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.documentDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.department}</td>
                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={doc.managerStatus} /></td>
                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={doc.hrStatus} /></td>
                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={doc.adminStatus} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.dueDate}</td>
                {/* --- Refined Action Buttons --- */}
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <div className="flex items-center justify-center space-x-4">
                    <button 
                      onClick={() => onDelete(doc.id, doc.documentNumber)}
                      className="text-gray-400 hover:text-red-600 focus:outline-none"
                      title="ลบเอกสาร"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;