import React from 'react'
import {PrinterIcon, TrashIcon } from "@heroicons/react/solid";

const Usermainpage = () => {
  return (
   <div className="p-8 bg-white min-h-screen rounded-md">
    <h2 className="text-2xl font-semibold text-gray-500 mb-8">รายการ</h2>
    <hr className="border-t border-gray-300 mb-8" />
    <div className="mb-6">
      <div className="flex items-end space-x-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-500 mb-2">ค้นหา</label>
          <select className="border-2 rounded-md w-64 px-4 py-2 text-gray-400">
            <option value="" disabled selected hidden>สถานะเอกสาร</option>
            <option value="ผ่านการอนุมัติ">ผ่านการอนุมัติ</option>
            <option value="รออนุมัติ">รออนุมัติ</option>
          </select>
        </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </div>
  </div>
    {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm text-gray-700">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-2 text-left px-3">No.</th>
              <th className="py-2 text-left px-3">เลขที่เอกสาร</th>
              <th className="py-2 text-left px-3">วันที่เอกสาร</th>
              <th className="py-2 text-left px-3">แผนก</th>
              <th className="py-2 text-left px-3">ต้นสังกัด</th>
              <th className="py-2 text-left px-3">HR</th>
              <th className="py-2 text-left px-3">ฝ่ายบริหาร</th>
              <th className="py-2 text-left px-3">วันที่ครบกำหนด</th>
              <th className="py-2 text-center px-3">พิมพ์</th>
              <th className="py-2 text-center px-3">ลบเอกสาร</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-3">1</td>
              <td className="py-3 px-3">PQ24110012</td>
              <td className="py-3 px-3">23/11/2024</td>
              <td className="py-3 px-3">เชื่อมเชฟ</td>
              <td className="py-3 px-3 text-green-600">ผ่านการอนุมัติ</td>
              <td className="py-3 px-3 text-green-600">ผ่านการอนุมัติ</td>
              <td className="py-3 px-3 text-green-600">ผ่านการอนุมัติ</td>
              <td className="py-3 px-3">29/12/2024</td>
              <td className="py-3 text-center">
                <PrinterIcon className="inline w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
              </td>
              <td className="py-3 text-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm flex items-center justify-center space-x-1">
                  <TrashIcon className="w-4 h-4" />
                  <span>ลบ</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
    


export default Usermainpage;