import React from "react";
import "./Overview.css";
import { GiCheckMark } from "react-icons/gi";
import { LuPartyPopper, LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineSick } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { BiTask } from "react-icons/bi";

const Overview = () => {
    const OverviewData = [
        {
            id: 1,
            present: 1,
            holiday: 2,
            leave: 2,
            request: 2,
            projects: 4,
            task: 3
        },
    ];

    return (
        <>
            {OverviewData.map((item) => (
                <div className="Overview" key={item.id} >
                    <div className="overview-card" >
                        <div className="overcard-left">
                            <GiCheckMark />
                            <p>Present</p>
                        </div>
                        <div className="overcard-right">
                            <p>{item.present}</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overcard-left">
                            <LuPartyPopper />
                            <p>Holiday</p>
                        </div>
                        <div className="overcard-right">
                            <p>{item.holiday}</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overcard-left">
                            <MdOutlineSick />
                            <p>Leave</p>
                        </div>
                        <div className="overcard-right">
                            <p>{item.leave}</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overcard-left">
                            <LuMessageSquareMore />
                            <p>Request</p>
                        </div>
                        <div className="overcard-right">
                            <p>{item.request}</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overcard-left">
                            <GoTasklist />
                            <p>Projects</p>
                        </div>
                        <div className="overcard-right">
                            <p>{item.projects}</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overcard-left">
                            <BiTask />
                            <p>Task</p>
                        </div>
                        <div className="overcard-right">
                            <p>{item.task}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Overview;