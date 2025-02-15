import React, { useState } from "react";
import "./Form.css";

const LeaveForm = ({ handleClose }) => {
    const [isMultipleDays, setIsMultipleDays] = useState(false);
    const [leaveType, setLeaveType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");

    const handleDateChange = (e) => {
        setStartDate(e.target.value);
        setIsMultipleDays(false);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsMultipleDays(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("leaveType", leaveType);
        formData.append("startDate", startDate);
        if (isMultipleDays) {
            formData.append("endDate", endDate);
        }
        formData.append("reason", reason);
        const formObject = Object.fromEntries(formData.entries());
        console.log("Form Submitted:", formObject);
        handleClose(true)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Leave Type</p>
                <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                    <option value="">Select Leave Type</option>
                    <option value="Sick">Sick Leave</option>
                    <option value="Emergency">Emergency Leave</option>
                </select>
            </label>

            <div className="multi-day-checkbox">
                <input type="checkbox" checked={isMultipleDays} onChange={handleCheckboxChange} />
                <p>Multiple days</p>
            </div>

            <div className="form-date">
                <label>
                    <p>Start Date</p>
                    <input type="date" value={startDate} onChange={handleDateChange} required />
                </label>
                {isMultipleDays && (
                    <label>
                        <p>End Date</p>
                        <input type="date" value={endDate} onChange={handleEndDateChange} min={startDate} required />
                    </label>
                )}
            </div>

            <label>
                <p>Reason</p>
                <textarea rows="3" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
            </label>

            <div className="form-button">
                <button type="button" onClick={handleClose}>
                    Close
                </button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default LeaveForm;