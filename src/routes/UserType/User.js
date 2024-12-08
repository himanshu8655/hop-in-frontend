import React from 'react';
import './User.css';

function User() {
  const handleClick = (imageName) => {
    alert(`Button clicked for ${imageName}`);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="\images\commuter.png " alt="Image 1" className="image" />
        <button className="btn" onClick={() => handleClick('Image 1')}>
          Commuter
        </button>
      </div>
      <div className="image-container">
        <img src="\images\carpool.png " alt="Image 2" className="image" />
        <button className="btn" onClick={() => handleClick('Image 2')}>
          Carpool Owner
        </button>
      </div>
    </div>
  );
}

export default User;
