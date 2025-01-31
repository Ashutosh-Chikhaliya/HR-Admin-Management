import React from "react";

const Button = ({ type, onClick, children, className }) => {
    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={`py-2 px-4 bg-[#7152F3] w-full text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
