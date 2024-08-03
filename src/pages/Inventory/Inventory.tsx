import React from 'react';
import './Inventory.css';

interface InventoryCardProps {
  count: string;
  title: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  iconClass: string;
}

const InventoryCard: React.FC<InventoryCardProps> = ({ count, title, description, buttonText, buttonClass, iconClass }) => (
  <div className="card">
    <div className="card-content">
      <div className={`icon ${iconClass}`}></div>
      <h2>{count}</h2>
      <p>{title}</p>
    </div>
    <button className={`btn ${buttonClass}`}>{buttonText}</button>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Inventory</h1>
        <p>List of medicines available for sales.</p>
        <button className="add-button">+ Add New Item</button>
      </div>
      <div className="cards">
        <InventoryCard
          count="298"
          title="Medicines Available"
          description="View Full List"
          buttonText="View Full List"
          buttonClass="btn-blue"
          iconClass="fas fa-pills icon-medicine"
        />
        <InventoryCard
          count="02"
          title="Medicine Groups"
          description="View Groups"
          buttonText="View Groups"
          buttonClass="btn-green"
          iconClass="fas fa-layer-group icon-group"
        />
        <InventoryCard
          count="01"
          title="Medicine Shortage"
          description="Resolve Now"
          buttonText="Resolve Now"
          buttonClass="btn-red"
          iconClass="fas fa-exclamation-triangle icon-shortage"
        />
      </div>
    </div>
  );
};

export default App;
