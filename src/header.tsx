import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from './imgs/logo.png';


export default function OtuimHeader() {
  return (
    <Box style={{
      display: 'flex', 
      placeContent: 'space-between', 
      padding: '8px', 
      borderRadius: '14px',
      opacity: '1px',
      height: '51px'}}>
       
          <img style={{
            width:'83px',
            height:'33px',
            marginTop: '5px',
            marginLeft: '5px'

          }} 
          src={logo}  height="50" alt="Otium-logo"/>
          <Button
            sx={{
              width:'100px',
              height:'35px',
              mt:'6px',
              mr:'20px',
              color:'#1A1C19',
              backgroundColor:'#83DA8C',
              textTransform:'none',
              fontSize:'14px'
            }}
            style={{

            }}
            onClick={() => {}}
            variant="contained">
              <Typography sx={{fontFamily:'poppins', fontWeight:'medium'}}>Connected</Typography>
          </Button>
    </Box>
  );
}
