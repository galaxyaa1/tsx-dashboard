import React from 'react';
import './Report2.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="header">Reports</h1>
      <p className="sub-header">Overall reports related to the pharmacy.</p>
      <div className="report-container">
        <div className="report-card">
          <i className="fas fa-money-bill-wave card-icon"></i>
          <h2 className="report-value">Rs. 8,55,875</h2>
          <p className="report-title">Total Sales Report</p>
          <button className="report-button">View Detailed Report</button>
        </div>
        <div className="report-card">
          <i className="fas fa-shield-alt card-icon"></i>
          <h2 className="report-value">523</h2>
          <p className="report-title">Payment Report</p>
          <button className="report-button">View Detailed Report</button>
        </div>
      </div>
    </div>
  );
}

export default App;
