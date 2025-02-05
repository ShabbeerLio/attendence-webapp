import React, { useEffect, useState } from "react";
import "./Home.css";
import Overview from "../../Components/Overview/Overview";
import { IoFingerPrint } from "react-icons/io5";

const Home = () => {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        })
    );
    const [date, setDate] = useState("");
    const [capturedTime, setCapturedTime] = useState("");
    const [capturedDate, setCapturedDate] = useState("");

    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            setTime(
                currentDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            );
            const formattedDate = currentDate.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
            });
            setDate(formattedDate);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let stopwatchInterval;

        if (isRunning) {
            stopwatchInterval = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        } else {
            clearInterval(stopwatchInterval);
        }

        return () => clearInterval(stopwatchInterval);
    }, [isRunning]);

    const handleCaptureTime = () => {
        setCapturedTime(time);
        setCapturedDate(date);

        if (!isRunning) {
            setStartTime(new Date());
            setElapsedTime(0);
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    };

    const formatElapsedTime = (elapsed) => {
        const hours = Math.floor(elapsed / 3600);
        const minutes = Math.floor((elapsed % 3600) / 60);
        const seconds = elapsed % 60;
        return `${hours} hr ${minutes} min ${seconds} sec`;
    };

    const progressWidth = Math.min((elapsedTime / 600) * 100, 100); // Max 100%

    const [hourMinuteSecond, AMPM] = time.split(" ");
    const [hour, minute, second] = hourMinuteSecond.split(":");

    return (
        <div className="Home">
            <div className="Home-main">
                <div className="Home-box">
                    <div className="Home-left">
                        <div className="timer-head">
                            <p>
                                <span>{AMPM}</span>
                            </p>
                            <h1>
                                {hour} <span>:</span> {minute}
                            </h1>
                            <p>
                                <span>{second}</span>
                            </p>
                        </div>
                        <div className="timer-date">
                            <p>{date}</p>
                        </div>
                        <div className="timer-button" onClick={handleCaptureTime}>
                            <p>
                                <IoFingerPrint />
                            </p>
                            <h5>{isRunning ? "Check Out" : "Check In"}</h5>
                        </div>
                        <div className="timer-time">
                            {capturedTime && <p>{capturedTime}</p>}
                        </div>
                        <div className="timer-stopwatch">
                            <span style={{ width: `${progressWidth}%` }}></span>
                            <p>{formatElapsedTime(elapsedTime)}</p>
                        </div>
                    </div>
                    <div className="Home-right">
                        <p>Overview</p>
                        <Overview />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;