import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { cyan } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function OtuimBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                bgcolor: '#A1CFD0',
                 "& .Mui-selected": {
                    "& .MuiSvgIcon-root": {
                        color: "#1A1C18"
                    }
                }, position: "fixed", 
                bottom: 14, 
                left: 10, 
                right: 10,
                borderRadius:'10px'
            }}
        >
            <BottomNavigationAction icon={<HomeIcon />} />
            <BottomNavigationAction icon={<AddIcon />} />
            <BottomNavigationAction icon={<NotificationsIcon />} />
        </BottomNavigation>
      
    );
}
