// src/components/InputField.js
import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder, className }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`p-2 block w-full border-[1px] border-[#7152F3] outline-none rounded-md shadow-sm focus:ring-[#7152F3] focus:border-[#7152F3] sm:text-sm ${className}`}
            />
        </div>
    );
};

export default InputField;
