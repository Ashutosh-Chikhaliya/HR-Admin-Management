import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Importing hamburger icon

const Sidemenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Menu Button (visible on smaller screens) */}
            <button
                className="fixed top-4 left-4 z-50 bg-[#7152f3] text-white p-2 rounded-md md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FiMenu size={24} />
            </button>

            {/* Sidebar Container */}
            <div className={`fixed h-screen bg-[#fafafa] p-5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full "} pt-5 md:translate-x-0 md:relative md:w-64 z-1`}>
                <div className="container flex flex-col justify-between h-full p-5 rounded-2xl">
                    <div className="flex flex-col gap-2">
                        {/* Logo */}
                        <div>
                            <img src="src/assets/logo/logoText.svg" alt="Logo" />
                        </div>

                        {/* Sidebar Menu Items */}
                        <div className="flex flex-col mt-5">
                            {[
                                { to: "/dashboard", icon: "dashboard.svg", label: "Dashboard" },
                                { to: "/dashboard", icon: "allEmployee.svg", label: "All Employees" },
                                { to: "/dashboard", icon: "allDepartment.svg", label: "All Department" },
                                { to: "/dashboard", icon: "attendenceIcon.svg", label: "Attendance" },
                                { to: "/dashboard", icon: "payroll.svg", label: "Payroll" },
                                { to: "/dashboard", icon: "jobs.svg", label: "Jobs" },
                                { to: "/dashboard", icon: "candidates.svg", label: "Candidates" },
                                { to: "/dashboard", icon: "leaves.svg", label: "Leaves" },
                                { to: "/dashboard", icon: "holidays.svg", label: "Holidays" },
                                { to: "/dashboard", icon: "settings.svg", label: "Settings" },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className="flex items-center hover:bg-[#E6E2F8] px-3 py-3 gap-5 hover:rounded-r-lg cursor-pointer"
                                >
                                    <img src={`src/assets/sidemenu/${item.icon}`} alt={item.label} />
                                    <div>{item.label}</div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Light & Dark Mode Buttons */}
                    <div className="flex w-full">
                        <button className="bg-[#7152f3] w-1/2 h-full p-3 gap-4 rounded-lg text-white flex justify-center items-center cursor-pointer">
                            <img src="src/assets/sidemenu/lightMode.svg" alt="Light Mode" />
                            <p>Light</p>
                        </button>
                        <button className="bg-[#A2A1A81A] w-1/2 h-full p-3 gap-4 rounded-lg text-black flex justify-center items-center cursor-pointer">
                            <img src="src/assets/sidemenu/darkMode.svg" alt="Dark Mode" />
                            <p>Dark</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidemenu;
