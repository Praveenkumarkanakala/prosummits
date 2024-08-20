import React, { useEffect, useState } from 'react';
import './App.css'; 

const CountdownTimer = () => {
    const [time, setTime] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const targetDate = new Date('2024-10-21T07:59:59').getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTime({
                    days: String(days).padStart(2, '0'),
                    hours: String(hours).padStart(2, '0'),
                    minutes: String(minutes).padStart(2, '0'),
                    seconds: String(seconds).padStart(2, '0')
                });
            } else {
                clearInterval(interval);
                setTime({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
            }
        };

        const interval = setInterval(calculateTimeLeft, 1000);

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

