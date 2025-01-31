import React from "react";

const AttendanceTable = () => {
  const employees = [
    { name: "Leasie Watson", role: "Team Lead - Design", type: "Office", time: "09:27 AM", status: "On Time", image: "https://i.pravatar.cc/40?img=1" },
    { name: "Darlene Robertson", role: "Web Designer", type: "Office", time: "10:15 AM", status: "Late", image: "https://i.pravatar.cc/40?img=2" },
    { name: "Jacob Jones", role: "Medical Assistant", type: "Remote", time: "10:24 AM", status: "Late", image: "https://i.pravatar.cc/40?img=3" },
    { name: "Kathryn Murphy", role: "Marketing Coordinator", type: "Office", time: "09:10 AM", status: "On Time", image: "https://i.pravatar.cc/40?img=4" },
    { name: "Leslie Alexander", role: "Data Analyst", type: "Office", time: "09:15 AM", status: "On Time", image: "https://i.pravatar.cc/40?img=5" },
    { name: "Ronald Richards", role: "Phyton Developer", type: "Remote", time: "09:29 AM", status: "On Time", image: "https://i.pravatar.cc/40?img=6" },
    { name: "Jenny Wilson", role: "React JS Developer", type: "Remote", time: "11:30 AM", status: "Late", image: "https://i.pravatar.cc/40?img=7" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border-[1.5px] border-[#A2A1A833] ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#16151C]">Attendance Overview</h2>
        <button className="px-4 py-2 text-sm border rounded-lg">View All</button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#A2A1A8] text-sm border-b border-[#A2A1A833]">
            <th className="pb-2">Employee Name</th>
            <th className="pb-2">Designation</th>
            <th className="pb-2">Type</th>
            <th className="pb-2">Check In Time</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index} className="border-b text-sm">
              <td className="py-3 flex items-center space-x-3">
                <img src={emp.image} alt={emp.name} className="w-8 h-8 rounded-full" />
                <span>{emp.name}</span>
              </td>
              <td>{emp.role}</td>
              <td>{emp.type}</td>
              <td>{emp.time}</td>
              <td>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${emp.status === "On Time" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}>
                  {emp.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
