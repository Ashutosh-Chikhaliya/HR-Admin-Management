import React, { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="bg-white p-2 ">
            <Calendar
                onChange={setDate}
                value={date}
                next2Label={null}
                prev2Label={null}
                nextLabel="➡"
                prevLabel="⬅"
                className="w-full border-none"
            />
        </div>
    );
};

export default MyCalendar;
