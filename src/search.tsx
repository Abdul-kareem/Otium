import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from './imgs/search-Icon.png'
import { Button } from '@mui/material';
import settingsIcon from './imgs/settings-icon.svg'
import avatar from "./imgs/Avatar-Square.png"
import { width } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor: alpha('#E3F5E0', 0.9),
    '&:hover': {
        backgroundColor: alpha("#E3F5E0", 0.8),
    },
    marginRight: 10,
    marginLeft: 3,
    display:'flex'

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    alignItems: 'center',
    display:'flex'
}));



export default function SearchBar() {



    return (
            
        <Box sx={{
            height: '50px',
        }}>
            <Box sx={{
                    backgroundColor:'#1A1C18',
                    height:'38px',
                    display:'flex',
                    }}>
                <Button sx={{
                    height:'36px',
                    width:'40px',
                    boxShadow:'none',
                    minWidth:'0px',
                    mt:'2px',
                    ml:'5px',
                    backgroundColor:'#83DA8C',
                    borderRadius:"10px"}} variant="contained"><img src={avatar} alt="settings-icon" height={24} />
                </Button>
                <Search sx={{flexGrow:1}}>
                    <SearchIconWrapper>
                        <img src={SearchIcon} alt='settings-icon' height={16}/>
                    </SearchIconWrapper>
                    <InputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Button sx={{
                    width:'45px',
                    height:'37px',
                    mr: '10px',
                    minWidth:'0px',
                    backgroundColor:'#83DA8C',
                    borderRadius:"10px",
                 }} variant="contained">

                        <img src={settingsIcon} alt="settings-icon" height={22} />
                </Button>
            </Box>
        </Box>
    );  
}
