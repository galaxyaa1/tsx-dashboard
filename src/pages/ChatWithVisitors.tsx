import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <p>Overall reports related to the pharmacy.</p>
      <div className="reports-grid">
        <div className="report-card">
          <div className="report-icon">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5L12 10L7 5"></path>
              </svg>
            </span>
          </div>
          <div className="report-details">
            <h2>Rs. 8,55,875</h2>
            <p>Total Sales Report</p>
          </div>
          <button className="view-details">
            View Detailed Report
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </button>
        </div>
        <div className="report-card">
          <div className="report-icon">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shield">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </span>
          </div>
          <div className="report-details">
            <h2>523</h2>
            <p>Payment Report</p>
          </div>
          <button className="view-details">
            View Detailed Report
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
