import React, { useEffect, useState } from 'react';
import './App.css'; // Create a separate CSS file

const CountdownTimer = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countdownTime = 65 * 24 * 60 * 60 + 6 * 60 * 60 + 4 * 60 + 30; // Initialize with a duration in seconds
        let timer = countdownTime;

        const interval = setInterval(() => {
            const days = Math.floor(timer / (24 * 60 * 60));
            const hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((timer % (60 * 60)) / 60);
            const seconds = Math.floor(timer % 60);

            setTime({ days, hours, minutes, seconds });

            if (--timer < 0) {
                clearInterval(interval);
                setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown">
            <div className="time-container">
                <div className="time-box" data-label="Days">{time.days}</div>
                <div className="time-box" data-label="Hours">{time.hours}</div>
                <div className="time-box" data-label="Minutes">{time.minutes}</div>
                <div className="time-box" data-label="Seconds">{time.seconds}</div>
            </div>
        </div>
    );
};

export default CountdownTimer;
