import React from "react";
import "./Leave.css"
import LeaveData from "./LeaveData";
import { Link } from "react-router-dom";

const Leave = () => {
    return (
        <div className="Leave">
            <div className="Leave-main">
                <div className="Leave-box">
                    <div className="Leave-box-left">
                        <h2>Leaves</h2>
                        <div className="leave-left-box">
                            <div className="leave-card">
                                <p>Sick Leave</p>
                                <h1>0<span>/6</span></h1>
                            </div>
                            <div className="leave-card">
                                <p>Urgent Leave</p>
                                <h1>0<span>/2</span></h1>
                            </div>
                        </div>
                        <div className="leave-button">
                            <p>Request for Leave</p>
                        </div>
                    </div>
                    <div className="Leave-box-right">
                        <h2>Recent Leave Activity</h2>
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
                                        <p>Select Leave Type</p>
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>Approved</li>
                                        <li>Rejected</li>
                                        <li>Pending</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="leave-right-details">
                                {LeaveData.map((item) => (
                                    <div className="leave-right-card" key={item.id}>
                                        <div className="lr-card-left">
                                            <h4>{item.type}</h4>
                                            <p
                                                className={`status ${item.status.toLowerCase()}`}
                                            >
                                                {item.status}
                                            </p>
                                        </div>
                                        <div className="lr-card-right">
                                            <p>{item.start_time} - {item.end_time}</p>
                                            <div className="lr-card-box">
                                                <h5>By {item.approved_by}</h5>
                                                <p>{item.request_time}</p>
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

export default Leave;
