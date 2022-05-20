import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, IconButton, Typography } from '@mui/material';
import ClosePost from './imgs/ClosePost.png'
import PostButton from './imgs/PostButton.png'
import InputBase from '@mui/material/InputBase';
import AddImage from './imgs/Add-Image.png'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NavPhotoPost from './imgs/photo-post.png'
import NavVideoPost from './imgs/post-video.png'
import { styled, alpha } from '@mui/material/styles';


const TypographyLabel = styled(Typography)(({ theme }) => ({
  color:'white',
  paddingTop:'10px'

}))


export default function PostPage() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
      height:'100vh',
      padding:'0px 30px 0px 30px'
      
    }}
    component="form"
    noValidate
    autoComplete="off">
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        mb:'35px',
        paddingTop:'22px'
      }}>
        <IconButton>
          <img src={ClosePost} alt='close-post' height={40}/>
        </IconButton>
        <IconButton>
          <img src={PostButton} alt='post-button' height={40}/>
        </IconButton>
      </Box>
      <Box sx={{
        display:'flex',

      }}>
        <InputBase  
          sx={{
            ml:'10px'
          }}
          placeholder='Write here' fullWidth={true}  
          multiline={true}
          inputProps={{
            sx:
              {"&::placeholder": {color: "White", fontSize:'27px'}}, 
              disableUnderline: true, 
              style:{color:'white', fontSize:'27px', paddingBottom:'5px', lineHeight:'33px'},
              
            
          }}/>
      </Box>
      <Box sx={{
        display:'flex',
        margin:'45px 87px 10px 80px',
        justifyContent:'center'
        
      }}>
        <IconButton>
          <img src={AddImage} alt='Add-image' height={186}/>
        </IconButton>
      </Box>
      <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                bgcolor: '#222221',
                 "& .Mui-selected": {
                    "& .MuiSvgIcon-root": {
                        color: "#1A1C18"
                    }
                }, position: "fixed", 
                bottom: 0, 
                left: 0, 
                right: 0,
                height:'22vh'
                
            }}
        >
            <BottomNavigationAction sx={{mr:'15px'}} label={<TypographyLabel>Photo</TypographyLabel>} icon={<img src={NavPhotoPost} alt='Nav-photo' height={67}/>} />
            <BottomNavigationAction sx={{ml:'15px'}} label={<TypographyLabel>Video</TypographyLabel>} icon={<img src={NavVideoPost} alt='Nav-Video' height={67}/>}  />
           
        </BottomNavigation>

    </Box>
  );
}