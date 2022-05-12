import './App.css';
import OtuimHeader from "./header"
import SearchBar from "./search"
import Post from "./post"
import PublishPost from "./PublishPost"
import { ThemeProvider } from '@mui/material/styles';
import{theme} from './theme'
import { Divider } from '@mui/material';



function App() {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <OtuimHeader />
        <SearchBar />
        <Divider />
        <Post />  
        <Divider />
        <Post />  
        <Divider />
        <Post />  
      </div>
    </ThemeProvider>
  );
}

export default App;
