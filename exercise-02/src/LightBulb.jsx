import React, { useState } from 'react';

function LightBulb() {
  // Create state to track whether the bulb is on (defaults to false)
  const [isOn, setIsOn] = useState(false);
  
  // Function to toggle the light state
  const toggleLight = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div className="light-bulb">
      <img 
        src={isOn ? "light-on.png" : "light-off.png"} 
        alt={isOn ? "Light bulb on" : "Light bulb off"} 
        onClick={toggleLight}
        style={{ cursor: 'pointer', width: '100px' }}
      />
    </div>
  );
}

export default LightBulb;