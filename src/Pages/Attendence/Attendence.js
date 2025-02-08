import React from "react";
import "./Attendence.css";
import LeaveData from "../Leave.js/LeaveData";
import { Link } from "react-router-dom";
import AttendenceData from "./AttendenceData";

const Attendence = () => {
  return (
    <div className="Leave">
            <div className="Leave-main">
                <div className="Leave-box">
                    <div className="Leave-box-left">
                        <h2>Attendence History</h2>
                        <div className="leave-left-box">
                            <div className="leave-card">
                                <p>Present Days</p>
                                <h1>0</h1>
                            </div>
                            <div className="leave-card">
                                <p>Worked Hours</p>
                                <h1>0</h1>
                            </div>
                        </div>
                    </div>
                    <div className="Leave-box-right">
                        {/* <h2>Recent Leave Activity</h2> */}
                        <div className="leave-right-box">
                            <div className="leave-right-top">
                                <div className="rt-left">
                                    <p>This Month</p>
                                </div>
                                <div className="rt-right">
                                    <p>This Year</p>
                                </div>
                            </div>
                            <div className="leave-right-filter">
                                <h4>Filter</h4>
                                <div className="dropdown">
                                    <Link className="btn " to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <p>Attendence Type</p>
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>Present</li>
                                        <li>Absent</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="leave-right-details">
                                {AttendenceData.map((item) => (
                                    <div className="leave-right-card" key={item.id}>
                                        <div className="lr-card-left">
                                            <h4>{item.date}</h4>
                                            <p
                                                className={`status ${item.status.toLowerCase()}`}
                                            >
                                                {item.status}
                                            </p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Attendence;
