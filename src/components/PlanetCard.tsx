import React from 'react';

// This is a component that takes props (properties) as input
function PlanetCard(props: { name: string; description: string }) {
  return (
    <div style={{ 
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default PlanetCard; 