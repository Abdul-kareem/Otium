import './App.css';
import OtuimHeader from "./header"
import SearchBar from "./search"
import Post from "./post"
import PublishPost from "./PublishPost"
import { ThemeProvider } from '@mui/material/styles';
import{theme} from './theme'
import { Divider } from '@mui/material';
import Profile from './Profile'
import Navigation from './Navigation'
 main
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';


 main

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
 main
      
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<> <OtuimHeader />
        <SearchBar />
        <Divider />
        <Post />  
        <Divider />
        <Post />  
        <Divider />
        <Post />  
  <Navigation />  </>} />
  <Route path="/createPost" element={<PublishPost />} />
  <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
       {/* <OtuimHeader />

        {/* <OtuimHeader />
 main
        <SearchBar />
        <Divider />
        <Post />  
        <Divider />
        <Post />  
        <Divider />
        <Post />  
 main
  <Navigation /> */ }
       {/* <PublishPost /> */}
      
     
     

        <Navigation/> */}
        <PublishPost />
 main
      </div>
    </ThemeProvider>
  );
}

export default App;
