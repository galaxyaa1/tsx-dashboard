import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [greeting, setGreeting] = useState<string>('Good morning');
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
    const [currentDate, setCurrentDate] = useState<string>(new Date().toLocaleDateString());

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());

            const hours = now.getHours();
            if (hours < 12) {
                setGreeting('Good morning');
            } else if (hours < 18) {
                setGreeting('Good afternoon');
            } else {
                setGreeting('Good evening');
            }
        };

        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-content">
                <input type="text" className="search-bar1" placeholder="Search..." />
                <div className="language-selector">
                    <select>
                        <option value="en">English</option>
                        <option value="en-us">English (US)</option>
                        <option value="en-uk">English (UK)</option>
                    </select>
                </div>
            </div>
            <div className="right-content">
                <div className="greeting">
                    <span className="greeting-icon">🌞</span> {greeting}
                </div>
                <div className="datetime">
                    <div className="date">{currentDate}</div>
                    <div className="time">{currentTime}</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
