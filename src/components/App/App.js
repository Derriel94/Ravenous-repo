import React from 'react';
import './App.css';
import BusinessList from '~/desktop/ravenous/src/components/BusinessList/BusinessList.js';
import SearchBar from '~/desktop/ravenous/src/components/SearchBar/SearchBar.js';

function App() {
  return (
  	<div className="App">
  <h1>ravenous</h1>
  	<SearchBar />
  	<BusinessList />
</div>
  );
}

export default App;
