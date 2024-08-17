import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Countdown = () => {
  const [counter, setCounter] = useState(15); // Start the counter at 15
  const navigate = useNavigate();

  useEffect(() => {
    if (counter === 0) {
      navigate('/'); // Redirect to the home page when counter reaches 0
    }

    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0)); 
    }, 1000);

    return () => clearInterval(timer); 
  }, [counter, navigate]);

  return (
    <div className="error-msg">
      <h1> {counter} </h1>
    </div>
  );
};

export default Countdown;
