import React, { useEffect, useState } from 'react';

const ClockComponent = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const timeString = date.toLocaleTimeString('en-US');
            setCurrentTime(timeString);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Thời gian hiện tại:</h1>
            <p>{currentTime}</p>
        </div>
    );
};

export default ClockComponent;