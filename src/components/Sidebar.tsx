// Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaChartBar, FaCogs, FaUserFriends, FaBell, FaComments, FaVirus, FaLifeRing } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="/images/logo 2.png" alt="Logo" className="sidebar-logo" />
                <div className="sidebar-title">Pharma One</div>
            </div>
            <div className="user-info">
                <img src="/images/Group 3.png" alt="User" className="user-pic" />
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaHome className="sidebar-icon" /> Dashboard
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/inventory" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaBoxOpen className="sidebar-icon" /> Inventory
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/report1" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaChartBar className="sidebar-icon" /> Report1
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/report2" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaChartBar className="sidebar-icon" /> Report2
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/salesreport" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaChartBar className="sidebar-icon" /> SalesReport
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/configuration" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaCogs className="sidebar-icon" /> Configuration
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/contact-management/contacts" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaUserFriends className="sidebar-icon" /> Contacts
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/contact-management/manage" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaUserFriends className="sidebar-icon" /> Manage
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/notifications" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaBell className="sidebar-icon" /> Notifications <span className="notification-dot"></span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/chat-with-visitors" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaComments className="sidebar-icon" /> Chat with Visitors
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/covid-19" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaVirus className="sidebar-icon" /> Covid-19
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/get-technical-help" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaLifeRing className="sidebar-icon" /> Get Technical Help
                    </NavLink>
                </li>
            </ul>
            <div className="sidebar-footer">
                <span>Powered by Subash © 2022</span>
            </div>
        </div>
    );
};

export default Sidebar;
