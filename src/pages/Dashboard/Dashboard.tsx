import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faWallet, faCapsules, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
    return (
        React.createElement('div', { className: 'dashboard' },
            React.createElement('div', { className: 'header' },
                React.createElement('h1', null, 'Dashboard'),
                React.createElement('p', null, 'A quick data overview of the inventory.'),
                React.createElement('button', { className: 'download-btn' }, 'Download Report')
            ),
            React.createElement('div', { className: 'cards' },
                React.createElement('div', { className: 'card good' },
                    React.createElement(FontAwesomeIcon, { icon: faShieldAlt, className: 'icon' }),
                    React.createElement('h3', null, 'Good'),
                    React.createElement('p', null, 'Inventory Status'),
                    React.createElement('a', { href: '#' }, 'View Detailed Report')
                ),
                React.createElement('div', { className: 'card revenue' },
                    React.createElement(FontAwesomeIcon, { icon: faWallet, className: 'icon' }),
                    React.createElement('h3', null, 'Rs. 8,55,875'),
                    React.createElement('p', null, 'Revenue: Jan 2022'),
                    React.createElement('a', { href: '#' }, 'View Detailed Report')
                ),
                React.createElement('div', { className: 'card available' },
                    React.createElement(FontAwesomeIcon, { icon: faCapsules, className: 'icon' }),
                    React.createElement('h3', null, '298'),
                    React.createElement('p', null, 'Medicines Available'),
                    React.createElement('a', { href: '#' }, 'Visit Inventory')
                ),
                React.createElement('div', { className: 'card shortage' },
                    React.createElement(FontAwesomeIcon, { icon: faExclamationTriangle, className: 'icon' }),
                    React.createElement('h3', null, '01'),
                    React.createElement('p', null, 'Medicine Shortage'),
                    React.createElement('a', { href: '#' }, 'Review Now')
                )
            ),
            React.createElement('div', { className: 'details' },
                React.createElement('div', { className: 'detail inventory' },
                    React.createElement('div', { className: 'detail-header' },
                        React.createElement('h4', null, 'Inventory'),
                        React.createElement('a', { href: '#' }, 'Go to Configuration')
                    ),
                    React.createElement('hr'),
                    React.createElement('div', { className: 'detail-row' },
                        React.createElement('p', null, '298 Total no of Medicines'),
                        React.createElement('p', null, '24 Medicine Groups')
                    )
                ),
                React.createElement('div', { className: 'detail quick-report' },
                    React.createElement('div', { className: 'detail-header' },
                        React.createElement('h4', null, 'Quick Report'),
                        React.createElement('a', { href: '#' }, 'Go to Configuration')
                    ),
                    React.createElement('hr'),
                    React.createElement('div', { className: 'detail-row' },
                        React.createElement('p', null, '70,856 Qty of Medicines Sold'),
                        React.createElement('p', null, '5,288 Invoices Generated')
                    )
                ),
                React.createElement('div', { className: 'detail pharmacy' },
                    React.createElement('div', { className: 'detail-header' },
                        React.createElement('h4', null, 'My Pharmacy'),
                        React.createElement('a', { href: '#' }, 'Go to User Management')
                    ),
                    React.createElement('hr'),
                    React.createElement('div', { className: 'detail-row' },
                        React.createElement('p', null, '04 Total no of Suppliers'),
                        React.createElement('p', null, '05 Total no of Users')
                    )
                ),
                React.createElement('div', { className: 'detail customers' },
                    React.createElement('div', { className: 'detail-header' },
                        React.createElement('h4', null, 'Customers'),
                        React.createElement('a', { href: '#' }, 'Go to Customers Page')
                    ),
                    React.createElement('hr'),
                    React.createElement('div', { className: 'detail-row' },
                        React.createElement('p', null, '845 Total no of Customers'),
                        React.createElement('p', null, 'Adalimumab Frequently bought Item')
                    )
                )
            )
        )
    );
};

export default Dashboard;
