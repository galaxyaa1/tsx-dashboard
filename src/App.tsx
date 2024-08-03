// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Inventory from './pages/Inventory/Inventory';
import Report1 from './pages/Report/Report1';
import Report2 from './pages/Report2/Report2';
import SalesReport from './pages/SalesReport/SalesReport';
import Configuration from './pages/Configuration';
import Contacts from './pages/Contacts/Contacts';
import Notifications from './pages/Notifications';
import ChatWithVisitors from './pages/ChatWithVisitors';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/report1" element={<Report1 />} />
                        <Route path="/report2" element={<Report2 />} />
                        <Route path="/salesreport" element={<SalesReport />} />
                        <Route path="/configuration" element={<Configuration />} />
                        <Route path="/contact-management/contacts" element={<Contacts />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/chat-with-visitors" element={<ChatWithVisitors />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
