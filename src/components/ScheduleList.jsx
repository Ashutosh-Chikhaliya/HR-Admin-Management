import React from "react";

const ScheduleList = () => {
    const schedule = [
        { time: "09:30 AM", title: "Practical Task Review", role: "UI/UX Designer" },
        { time: "12:00 PM", title: "Resume Review", role: "Magento Developer" },
        { time: "01:30 PM", title: "Final HR Round", role: "Sales Manager" },
        { time: "09:30 AM", title: "Practical Task Review", role: "Front-end Developer" },
        { time: "11:00 AM", title: "TL Meeting", role: "React JS Developer" },
    ];

    return (
        <div className="bg-white rounded-lg ">
            <h3 className="text-sm  text-[#16151C]">Wednesday, 06 July 2023</h3>
            <ul className="mt-2 pb-6">
                {schedule.map((item, index) => (
                    <li key={index} className="p-3 flex gap-6 items-center">
                        <div> <span className="block font-bold">{item.time}</span></div>
                        <div>
                            <img src="src/assets/dashboard/BorderLine.svg" alt="" />
                        </div>
                        <div>
                            <span className="block text-gray-600 text-sm">{item.role}</span>
                            <span className="block text-black font-bold">{item.title}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleList;
