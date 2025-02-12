import React, { useState } from "react";
import "./Attendence.css";
import { Link } from "react-router-dom";
import AttendenceData from "./AttendenceData";

const Attendence = () => {
    const [filterTime, setFilterTime] = useState("thisMonth");
    const [filterStatus, setFilterStatus] = useState("all");

    // Function to filter data
    const filteredData = AttendenceData.filter((item) => {
        const itemDate = new Date(item.date);
        const now = new Date();
        const isThisMonth = itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
        const isThisYear = itemDate.getFullYear() === now.getFullYear();

        const matchesTime = filterTime === "thisMonth" ? isThisMonth : isThisYear;
        const matchesStatus = filterStatus === "all" || item.status.toLowerCase() === filterStatus.toLowerCase();

        return matchesTime && matchesStatus;
    });

    return (
        <div className="Leave">
            <div className="Leave-main">
                <div className="Leave-box">
                    <div className="Leave-box-left">
                        <h2>Attendance History</h2>
                        <div className="leave-left-box">
                            <div className="leave-card">
                                <p>Present Days</p>
                                <h1>{filteredData.filter(item => item.status === "Present").length}</h1>
                            </div>
                            <div className="leave-card">
                                <p>Worked Hours</p>
                                <h1>
                                    {filteredData
                                        .filter(item => item.total_hours !== "--") // Ignore "--" values
                                        .reduce((total, item) => total + parseFloat(item.total_hours), 0)} <span>hrs</span> 
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="Leave-box-right">
                        <div className="leave-right-box">
                            <div className="leave-right-top">
                                <div className={`rt-left ${filterTime === "thisMonth" ? "active" : ""}`} onClick={() => setFilterTime("thisMonth")}>
                                    <p>This Month</p>
                                </div>
                                <div className={`rt-right ${filterTime === "thisYear" ? "active" : ""}`} onClick={() => setFilterTime("thisYear")}>
                                    <p>This Year</p>
                                </div>
                            </div>
                            <div className="leave-right-filter">
                                <h4>Filter</h4>
                                <div className="dropdown">
                                    <Link className="btn" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <p>Attendance Type</p>
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li onClick={() => setFilterStatus("all")}>All</li>
                                        <li onClick={() => setFilterStatus("Present")}>Present</li>
                                        <li onClick={() => setFilterStatus("Absent")}>Absent</li>
                                        <li onClick={() => setFilterStatus("Half Day")}>Half Day</li>
                                        <li onClick={() => setFilterStatus("Late")}>Late</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="leave-right-details">
                                {filteredData.map((item) => (
                                    <div className="leave-right-card" key={item.id}>
                                        <div className="lr-card-left">
                                            <h4>{item.date}</h4>
                                            <p className={`status ${item.status.toLowerCase()}`}>{item.status}</p>
                                        </div>
                                        <div className="lr-card-right">
                                            <div className="attendence-card">
                                                <p><span>Check In</span>{item.check_in}</p>
                                                <p><span>Check Out</span>{item.check_out}</p>
                                                <p><span>Total</span>{item.total_hours}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {filteredData.length === 0 && <p>No records found</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendence;