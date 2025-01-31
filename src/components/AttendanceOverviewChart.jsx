import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", attendance: 70 },
    { day: "Tue", attendance: 85 },
    { day: "Wed", attendance: 90 },
    { day: "Thu", attendance: 60 },
    { day: "Fri", attendance: 75 },
    { day: "Sat", attendance: 80 },
    { day: "Sun", attendance: 65 },
];

const AttendanceOverviewChart = () => {
    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    barSize={30}
                    barCategoryGap={100}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis
                        domain={[0, 100]} // Keep percentage range
                        ticks={[0, 20, 40, 60, 80, 100]} // Custom ticks
                        tickFormatter={(tick) => `${tick}%`} // Add % to tick labels
                    />
                    <Tooltip
                        formatter={(value) => `${value}%`}
                        labelFormatter={(label) => `Day: ${label}`}
                    />
                    <Bar dataKey="attendance" fill="#6b5bfb" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceOverviewChart;
