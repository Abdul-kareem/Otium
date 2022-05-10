import React from 'react';
import logo from './logo.svg';
import './App.css';
import OtuimHeader from "./header"
import SearchBar from "./search"
import Post from "./post"
import PublishPost from "./PublishPost"


function App() {
  return (
    <div className="App">
      <OtuimHeader />
      <SearchBar />
      <Post />
      
    </div>
  );
}

export default App;
