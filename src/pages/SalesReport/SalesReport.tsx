import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure you have chart.js installed

import './SalesReport.css';

const SalesReport: React.FC = () => {
    const data = {
        labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
        datasets: [
            {
                label: 'Sales Made',
                data: [100, 50, 150, 200],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
            }
        ]
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true,
                max: 250
            }
        }
    };

    return (
        <div className="sales-report">
            <header className="header">
                <div>
                    <h1>Reports › Sales Report</h1>
                    <p>Sales related report of the pharmacy.</p>
                </div>
                <button className="download-btn">Download Report</button>
            </header>
            
            <div className="filters">
                <div className="filter">
                    <label>Date Range</label>
                    <input type="text" placeholder="01 December 2021 - 31 December 2021" />
                </div>
                <div className="filter">
                    <label>Medicine Group</label>
                    <select>
                        <option>Select Group</option>
                    </select>
                </div>
                <div className="filter">
                    <label>User Name</label>
                    <select>
                        <option>Select User Name</option>
                    </select>
                </div>
            </div>

            <div className="content">
                <div className="chart">
                    <Line data={data} options={options} />
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2485858548598</td>
                                <td>01 Dec 2021 10:25</td>
                            </tr>
                            <tr>
                                <td>2485858548577</td>
                                <td>02 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548563</td>
                                <td>03 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548545</td>
                                <td>05 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548532</td>
                                <td>10 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548504</td>
                                <td>15 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548467</td>
                                <td>16 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548423</td>
                                <td>18 Dec 2021 18:25</td>
                            </tr>
                            <tr>
                                <td>2485858548394</td>
                                <td>21 Dec 2021 18:25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesReport;
