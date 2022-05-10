import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { cyan } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({

  borderColor: cyan[900],
  color: cyan[900],
  '&:hover': {
    borderColor: cyan[800],
    color: cyan[800],
  },
 
});


export default function PublishPost() {


  return (
<Card>
 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          id="outlined-multiline-static"
        
          multiline
          rows={4}
          defaultValue="What's in your mind ..."
        />
  </Box>
  <Divider />
  <Stack
    direction="row"
    alignItems="center"
    
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
    spacing={1}
  >
      <Chip icon={<AddPhotoAlternateIcon />} label="Image"  variant="outlined" color="success" />
      <Chip icon={<VideoCallIcon />} label="video" variant="outlined" color="error"/>
      <BootstrapButton variant="outlined" endIcon={<SendIcon />}>
  Posr
</BootstrapButton>
  </Stack>
  
  
</Card>
    
 
  );
}
