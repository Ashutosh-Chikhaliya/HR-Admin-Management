import React, { useState, useEffect } from "react";
import CompanyOverviewCard from "../components/CompanyOverviewCard";
import Sidemenu from "../components/Sidemenu";
import ScheduleList from "../components/ScheduleList";
import MyCalendar from "../components/MyCalendar";
import Header from "../components/Header";
import AttendanceOverviewChart from "../components/AttendanceOverviewChart";
import AttendanceTable from "../components/AttendanceTable";


const Dashboard = () => {
    const cards = [
        {
            icon: "../assets/sidemenu/AllEmployee.svg",
            title: "Total Employee",
            value: 560,
            date: "July 16, 2023",
            percentage: 12,
            isPositive: true,
        },
        {
            icon: "../assets/sidemenu/jobs.svg",
            title: "Total Applicant",
            value: 1050,
            date: "July 14, 2023",
            percentage: 5,
            isPositive: true,
        },
        {
            icon: "../assets/sidemenu/attendenceIcon.svg",
            title: "Today Attendance",
            value: 470,
            date: "July 14, 2023",
            percentage: 8,
            isPositive: false,
        },
        {
            icon: "../assets/dashboard/totalProjectIcon.svg",
            title: "Total Projects",
            value: 250,
            date: "July 10, 2023",
            percentage: 12,
            isPositive: true,
        },
    ];

    return (
        <div className="flex h-screen justify-start">
            <div className="left-0 top-0 bg-[#fafafa] ">
                <Sidemenu />
            </div>

            <div className="flex flex-col overflow-y-auto">
                {/* header */}
                <Header />

                {/* Company Overview */}
                <div className="flex  p-6 w-full justify-center">
                    <div className="w-3/5 flex flex-col">

                        <div>
                            <CompanyOverviewCard />
                        </div>

                        {/* Attendence overview */}
                        <div className="w-full border-[1.5px] border-[#A2A1A833] rounded-lg mt-5 pb-5">
                            <h3 className="text-[#16151C] font-semibold text-lg p-7">Attendance Overview</h3>
                            <AttendanceOverviewChart />
                        </div>
                    </div>

                    {/* schedule */}
                    <div className="w-2/5 ps-4">
                        <div className="bg-white p-4 rounded-lg border-[#A2A1A833] border-[1.5px]">
                            <h2 className="text-lg font-semibold">My Schedule</h2>
                            {/* Calendar Component */}
                            <div className="">
                                <MyCalendar />
                            </div>
                            {/* Schedule List */}
                            <div className="mt-6">
                                <ScheduleList />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6">
                    <AttendanceTable />
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
