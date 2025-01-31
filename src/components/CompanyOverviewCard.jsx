import React from "react";
import allEmployeeIcon from "../assets/sidemenu/AllEmployee.svg";
import jobsIcon from "../assets/sidemenu/jobs.svg";
import attendanceIcon from "../assets/sidemenu/attendenceIcon.svg";
import projectsIcon from "../assets/dashboard/totalProjectIcon.svg";

const companyData = [
    {
        icon: allEmployeeIcon,
        title: "Total Employee",
        value: 560,
        date: "July 16, 2023",
        percentage: 12,
        isPositive: true,
    },
    {
        icon: jobsIcon,
        title: "Total Applicant",
        value: 1050,
        date: "July 14, 2023",
        percentage: 5,
        isPositive: true,
    },
    {
        icon: attendanceIcon,
        title: "Today Attendance",
        value: 470,
        date: "July 14, 2023",
        percentage: 8,
        isPositive: false,
    },
    {
        icon: projectsIcon,
        title: "Total Projects",
        value: 250,
        date: "July 10, 2023",
        percentage: 12,
        isPositive: true,
    },
];

const CompanyOverviewCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companyData.map((card, index) => (
                <div key={index} className="flex flex-col bg-white border-[1.5px] border-[#A2A1A833] rounded-lg max-w-sm">
                    <div className="flex items-center mb-1 p-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-100">
                            <img src={card.icon} alt={card.title} className="w-6 h-6" />
                        </div>
                        <h3 className="ml-4 text-sm text-[#16151C]">{card.title}</h3>
                    </div>

                    <div className="flex items-center justify-between mb-4 px-4">
                        <p className="text-2xl font-bold">{card.value}</p>
                        <div
                            className={`flex items-center text-sm font-medium ${card.isPositive ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
                                } rounded-lg px-2 py-1`}
                        >
                            <span>{card.isPositive ? "▲" : "▼"}</span>
                            <span className="ml-1">{card.percentage}%</span>
                        </div>
                    </div>
                    <p className="text-[#A2A1A8] w-full text-xs border-t-[1.5px] border-[#A2A1A833] px-2 py-2">Update: {card.date}</p>
                </div>
            ))}
        </div>
    );
};

export default CompanyOverviewCard;
