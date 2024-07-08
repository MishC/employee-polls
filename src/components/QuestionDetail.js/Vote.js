import "./Vote.css";
import React, { useState } from 'react';

const Vote = ({question}) => {

    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected option: ${selectedOption}`);
  };
    return (<div className="Vote">
   
    <form onSubmit={handleSubmit}>
      <div>
      <label class="container">A
  <input type="radio" checked="checked" name="radio"/>
  <span class="checkmark"></span>
</label>
<label class="container">B
  <input type="radio" name="radio"/>
  <span class="checkmark"></span>
</label>
      </div>
      <button type="submit" className="vote-button">Vote</button>
    </form>
  


    </div>)
}

export default Vote;