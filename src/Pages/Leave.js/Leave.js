import React, { useEffect, useState } from "react";
import "./Leave.css";
import LeaveData from "./LeaveData";
import { Link } from "react-router-dom";
import LeaveForm from "../../Components/Form/LeaveForm";

const Leave = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("This Month");
  const [leaveType, setLeaveType] = useState("All");
  const [sickLeaveCount, setSickLeaveCount] = useState(0);
  const [urgentLeaveCount, setUrgentLeaveCount] = useState(0);

  useEffect(() => {
    const currentDate = new Date();

    const currentMonthLeaves = LeaveData.filter((leave) => {
      const leaveDate = parseDate(leave.request_time);
      return (
        leaveDate.getMonth() === currentDate.getMonth() &&
        leaveDate.getFullYear() === currentDate.getFullYear()
      );
    });

    const sickLeaves = currentMonthLeaves.filter(
      (leave) => leave.type === "Sick Leave" && leave.status === "Approved"
    ).length;

    const urgentLeaves = currentMonthLeaves.filter(
      (leave) => leave.type === "Emergency Leave" && leave.status === "Approved"
    ).length;

    setSickLeaveCount(sickLeaves);
    setUrgentLeaveCount(urgentLeaves);
  }, []);

  useEffect(() => {
    filterLeaveData("This Month", "All"); // Set default filter on mount
  }, []);

  const parseDate = (dateString) => {
    const [month, day, time, period] = dateString.split(" ");
    const currentYear = new Date().getFullYear();
    const formattedDateString = `${month} ${day} ${currentYear} ${time} ${period}`;
    return new Date(formattedDateString);
  };

  const filterLeaveData = (timeFilter, typeFilter) => {
    const currentDate = new Date();
    let filtered = LeaveData;

    if (timeFilter === "This Month") {
      filtered = filtered.filter((item) => {
        const leaveDate = parseDate(item.request_time);
        return (
          leaveDate.getMonth() === currentDate.getMonth() &&
          leaveDate.getFullYear() === currentDate.getFullYear()
        );
      });
    } else if (timeFilter === "This Year") {
      filtered = filtered.filter((item) => {
        const leaveDate = parseDate(item.request_time);
        return leaveDate.getFullYear() === currentDate.getFullYear();
      });
    }

    if (typeFilter !== "All") {
      filtered = filtered.filter((item) => item.status === typeFilter);
    }

    // Sort: Pending first, then by date (newest first)
    filtered.sort((a, b) => {
      if (a.status === "Pending" && b.status !== "Pending") return -1;
      if (b.status === "Pending" && a.status !== "Pending") return 1;
      return new Date(b.request_time) - new Date(a.request_time);
    });

    setFilteredData(filtered);
  };

  const handleTimeFilter = (event) => {
    const filter = event.target.innerText;
    setSelectedFilter(filter);
    filterLeaveData(filter, leaveType);
  };

  const handleLeaveTypeFilter = (type) => {
    setLeaveType(type);
    filterLeaveData(selectedFilter, type);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="Leave">
      <div className="Leave-main">
        <div className="Leave-box">
          <div className="Leave-box-left">
            <h2>Leaves</h2>
            <div className="leave-left-box">
              <div className="leave-card">
                <p>Sick Leave</p>
                <h1>
                  {sickLeaveCount}
                  <span>/6</span>
                </h1>
              </div>
              <div className="leave-card">
                <p>Urgent Leave</p>
                <h1>
                  {urgentLeaveCount}
                  <span>/3</span>
                </h1>
              </div>
            </div>
            <div className="leave-button">
              <p onClick={handleClick}>Request for Leave</p>
            </div>
            {openModal && (
              <div className="form-modal">
                <div className="form-content">
                  <h2>Leave Request Form</h2>
                  <LeaveForm handleClose={handleClose} />
                </div>
              </div>
            )}
          </div>
          <div className="Leave-box-right">
            <h2>Recent Leave Activity</h2>
            <div className="leave-right-box">
              <div className="leave-right-top">
                <div
                  className={`rt-left ${
                    selectedFilter === "This Month" ? "active" : ""
                  }`}
                  onClick={handleTimeFilter}
                >
                  <p>This Month</p>
                </div>
                <div
                  className={`rt-right ${
                    selectedFilter === "This Year" ? "active" : ""
                  }`}
                  onClick={handleTimeFilter}
                >
                  <p>This Year</p>
                </div>
              </div>
              <div className="leave-right-filter">
                <h4>Filter</h4>

                <div className="dropdown">
                  <p
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {leaveType === "All" ? "Select Type" : leaveType}
                  </p>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li onClick={() => handleLeaveTypeFilter("All")}>
                      <Link className="dropdown-item" to="#">
                        All
                      </Link>
                    </li>
                    <li onClick={() => handleLeaveTypeFilter("Approved")}>
                      <Link className="dropdown-item" to="#">
                        Approved
                      </Link>
                    </li>
                    <li onClick={() => handleLeaveTypeFilter("Rejected")}>
                      <Link className="dropdown-item" to="#">
                        Rejected
                      </Link>
                    </li>
                    <li onClick={() => handleLeaveTypeFilter("Pending")}>
                      <Link className="dropdown-item" to="#">
                        Pending
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="leave-right-details">
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <div className="leave-right-card" key={item.id}>
                      <div className="lr-card-left">
                        <h4>{item.type}</h4>
                        <p className={`status ${item.status.toLowerCase()}`}>
                          {item.status}
                        </p>
                      </div>
                      <div className="lr-card-right">
                        <p>
                          {item.start_time} - {item.end_time}
                        </p>
                        <div className="lr-card-box">
                          <h5>By {item.approved_by}</h5>
                          <p>{item.request_time}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No leave records found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
