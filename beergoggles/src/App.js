import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.search.value)
  }

  return (
    <>
      <h1 className="heading">Beerg🥽ggles</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="search" className="display-none">search</label>
        <input name="search" type="text" id="search" className="search-input"/>
        <button className="search-button" type="submit">🔎</button>
      </form>
    </>
  );
}

export default App;
