import React from 'react';
import './Configuration.css';

const Configurations: React.FC = () => {
  return React.createElement('div', { className: 'configurations' },
    React.createElement('h1', null, 'Configurations'),
    React.createElement('p', null, 'Configure your pharmacy application'),
    React.createElement('div', { className: 'branding-owner-container' },
      React.createElement('table', { className: 'branding' },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', null, 'Branding'),
            React.createElement('th', null, React.createElement('button', { className: 'edit-button' }, '✎'))
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { colSpan: 2 },
              React.createElement('div', { className: 'input-group' },
                React.createElement('label', null, 'Enter Name'),
                React.createElement('input', { type: 'text', placeholder: 'Pharmacy Name' }),
                React.createElement('p', null, 'PH349TY228')
              ),
              React.createElement('p', null, 'Pharmacy ID')
            )
          )
        )
      ),
      React.createElement('table', { className: 'owner' },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', null, 'Owner'),
            React.createElement('th', null, React.createElement('button', { className: 'edit-button' }, '✎'))
          )
        ),
        React.createElement('tbody', null,
          React.createElement('tr', null,
            React.createElement('td', { colSpan: 2 },
              React.createElement('div', { className: 'input-group' },
                React.createElement('label', null, 'Enter Name'),
                React.createElement('input', { type: 'text', placeholder: 'Owner Name' }),
                React.createElement('p', null, 'user@mail.com')
              ),
              React.createElement('p', null, 'Email ID')
            )
          )
        )
      )
    ),
    React.createElement('div', { className: 'page-actions-container' },
      React.createElement('table', null,
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', null, 'Page'),
            React.createElement('th', null, 'Action')
          )
        ),
        React.createElement('tbody', null,
          ['Dashboard', 'Inventory', 'Reports', 'Configuration', 'Contact Management', 'Notifications'].map((page, index) =>
            React.createElement('tr', { key: index },
              React.createElement('td', null, page),
              React.createElement('td', null,
                React.createElement('a', { href: '#' }, '+ Add Sub Page'),
                React.createElement('button', { className: 'edit-button' }, '✎'),
                React.createElement('button', { className: 'delete-button' }, '🗑')
              )
            )
          )
        )
      ),
      React.createElement('a', { href: '#', className: 'add-new-page' }, '+ Add a New Page')
    )
  );
};

export default Configurations;
