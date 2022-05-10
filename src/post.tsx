import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHoritIcon from '@mui/icons-material/MoreHoriz';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { styled } from '@mui/material/styles';


const PostCard = styled(Card)(({ theme }) => ({
    "& .MuiCardHeader-root": {
        backgroundColor: "#1A1C18"
    },
    '& .MuiCardContent-root':{
        backgroundColor: "#1A1C18"
    }

}))


export default function Post() {

    return (
        <PostCard>
            <CardHeader sx={{
                color:'#1A1C18',
            }}
                avatar={
                    <Avatar src="avatar1.jpg" alt="user" />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoritIcon />
                    </IconButton>
                }
                title="@Abdullareem Albashiry"
                subheader="2h. Public"
            />
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    When on, sites can't use cookies that track you across the web
                </Typography>
            </CardContent>

            <CardMedia
                component="img"
                height="194"
                image="post.jpg"
                alt="Kareem Post"
            />

            <CardActions disableSpacing={false} >
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon />
                    <Typography color="text.secondary">
                        90
                    </Typography>
                </IconButton>
                <IconButton aria-label="commant">
                    <CommentIcon />
                    <Typography color="text.secondary">
                        20
                    </Typography>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                    <Typography color="text.secondary">
                        15
                    </Typography>
                </IconButton>
                <IconButton aria-label="Dolar">
                    <AttachMoneyIcon />
                    <Typography color="text.secondary">
                        250
                    </Typography>
                </IconButton>



            </CardActions>

        </PostCard>
    );
}
