import React from 'react';

function AboutMe(props) {
  return (
    <div className="about-me">
      <p>Hello World, My name's {props.name}! I'm {props.age} years old, and I like {props.favoriteFood} 🍽️</p>
    </div>

    
  );
}

export default AboutMe;