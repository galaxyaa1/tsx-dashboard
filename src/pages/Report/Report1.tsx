import React from 'react';
import './Report1.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>Inventory &gt; Medicine Groups (02)</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Medicine Groups..." />
        <button>🔍</button>
      </div>
      <button className="add-button">+ Add New Group</button>
      <table>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>No of Medicines</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Generic Medicine</td>
            <td>02</td>
            <td><button>View Full Detail</button></td>
          </tr>
          <tr>
            <td>Diabetes</td>
            <td>32</td>
            <td><button>View Full Detail</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
