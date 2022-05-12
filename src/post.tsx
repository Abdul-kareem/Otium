import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import kareem from './imgs/Kareem.png'
import postPhoto from './imgs/Post-Photo.png'
import moreIcon from './imgs/more-icon.png'
import CommentsIcon from './imgs/Comments-icon.png'
import likesIcon from './imgs/likes-icon.png'
import mirrosIcon from './imgs/mirros-icon.png'



export default function Post() {

    return (
        <Card sx={{backgroundColor:'#1A1C18', fontSize:'12px'}}>
            <CardHeader 
                sx={{
                    textAlign:'start',
                    color:'#FCFDF6',
                    padding:'8px 15px 5px 8px',
                    
                }}
                avatar={
                    
                    <Avatar src={kareem} alt="user" sx={{mr:"-5px"}} />
                    
                }
                action={
                    <IconButton aria-label="settings" sx={{mr:'18px'}} >
                        <img src={moreIcon} alt="more-icon" style={{width:'14px', height:'3px'}} />
                    </IconButton>
                }
                title={<Typography sx={{fontSize:'13px',  fontWeight:'Medium'}}>@Abdulkareem Albashiri</Typography>}
                subheader= {<Typography style={{fontSize:'11px', fontWeight:'light'}}>2h. Public</Typography>}  
                subheaderTypographyProps={{color:'#FCFDF6'}}
            />
            <CardContent sx={{
                textAlign:'start',
                padding:'8px 16px 8px 24px'

                }}>
                <Typography variant="body2" color="#FCFDF6" sx={{fontFamily:'poppins', fontWeight:'semiBold'}}>
                    Donec ligula enim, viverra vitae efficitur a, dapibus a metus. Mauris. Etiam efficitur lorem diam, eu placerat ex aliquam etrt lorem efficitur.
                </Typography>
            </CardContent>

            <CardMedia
                component="img"
                height="197"
                image={postPhoto}
                alt="Kareem Post"
            />

            <CardActions disableSpacing={false} sx={{justifyContent:'center', paddingLeft:'44px'}}>
                <IconButton aria-label="add to favorites" sx={{marginRight:'40px'}}>
                    <img src={likesIcon} alt="likes-icon" style={{
                        width:'18px', 
                        height:'16px', 
                        paddingRight:'10px'
                        }} />
                    <Typography color="#FCFDF6" sx={{fontSize:'13px'}}>
                        90
                    </Typography>
                </IconButton>
                <IconButton aria-label="commant" sx={{marginRight:'50px'}}>
                    <img src={CommentsIcon} alt="Comments-icon" style={{
                        width:'18px', 
                        height:'17px',
                        paddingRight:'10px' 
                    }} />
                    <Typography color="#FCFDF6" sx={{fontSize:'13px'}} >
                        20
                    </Typography>
                </IconButton>
                <IconButton aria-label="share" sx={{marginRight:'50px'}}>
                    <img src={mirrosIcon} alt="mirros-icon" style={{
                        width:'14px', 
                        height:'16px',
                        paddingRight:'10px' 
                    }} />
                    <Typography color="#FCFDF6" sx={{fontSize:'13px'}}>
                        15
                    </Typography>
                </IconButton>
            </CardActions>

        </Card>
    );
}
