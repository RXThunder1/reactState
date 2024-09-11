import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setMessage(msg);
    setColor(color);
  };

  const ballStyle = {
    backgroundColor: color,
    color: 'white',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '20px auto'
  };

  return (
    <div style={ballStyle} onClick={handleClick}>
      {message}
    </div>
  );
};

export default EightBall;