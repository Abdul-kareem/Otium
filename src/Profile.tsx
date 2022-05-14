import React, { useEffect } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';



export default function Profile() {
    return (
         <Box height="90vh" >
          <Box position="relative">
            <img
              width="100%"
              src="https://scontent.fsah1-1.fna.fbcdn.net/v/t31.18172-8/15025229_1296093053795270_786023145360423540_o.jpg?_nc_cat=110&ccb=1-6&_nc_sid=e3f864&_nc_ohc=9VEcIFzEnkgAX_VtIQp&_nc_ht=scontent.fsah1-1.fna&oh=00_AT_jwyQMeOy3nEwhysr3R_wL_ksT44saCqSs0KiNcY3hVg&oe=62A59A9C"
              alt="background"
              height="130"
            
            />
            <Box sx={{position: "absolute", top: 100, left: 15 }}>
             
<Avatar sx={{ bgcolor: green[500], width: 65, height: 70  }} variant="rounded"  alt="Kareem" src="https://scontent.fsah2-1.fna.fbcdn.net/v/t31.18172-8/14207738_1211964935541416_5074799484637314902_o.jpg?_nc_cat=101&ccb=1-6&_nc_sid=174925&_nc_ohc=V3BM5ieWBXcAX8mPWdz&_nc_ht=scontent.fsah2-1.fna&oh=00_AT-jpAjZR48J4mfyXc8pJ4zVNoyOz7w5lhwXwnfvECwgdg&oe=62A61AE7">
</Avatar>
            </Box>
          </Box>
          <Box textAlign="left" padding="0px 85px">
            <Typography>
              Kareem Najeeb
            </Typography>
            <Typography color="#555" marginRight="1rem">
                <strong style={{ color: "black", padding: "3px" }}>
                  1
                </strong>
                Following
                <strong style={{ color: "black", padding: "3px" }}>
                  152
                </strong>
                Followers
              </Typography>
          </Box>
        </Box>
      
  
  );
} 
