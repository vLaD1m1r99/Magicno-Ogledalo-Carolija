import React from 'react'
import { Container, Grid, Box, Link} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { instagramPath, facebookPath, email, phoneNumber } from '../../constants/utils';
import logo from '../../images/magicno logo png.png'
const Footer = () => {
  return (
    <Box 
    id='Contact'
    bgcolor='#323232'
    color='white'
    px={{xs:3, sm:10}}
    py={{xs:5, sm:5}}>
      
     <Container>
      <Grid container spacing={5}>
       <Grid item xs={12} md={4} sx={{display:'flex', alignItems:'center'}}>
        <Box component='img'  sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 75,
          height: 100,
        }}
        src={logo}
        alt='Logo'></Box>
       </Grid>
       <Grid item xs={12} md={4}>
        <Box sx={{display:'flex'}}borderBottom={1} mb={2}>Pratite nas</Box>
        <Box sx={{display:'flex', justifyContent:'start', flexDirection:'column'}}>
      <Link sx={{display:'flex', justifyContent:'flex-start'}} color='white' mb={1} href={instagramPath} underline='none' rel="noreferrer"
      target='_blank'><InstagramIcon sx={{marginRight:'0.5rem'}}fontSize='medium'/> Instagram</Link>
        <Link sx={{display:'flex', justifyContent:'flex-start'}} color='white' href={facebookPath} underline='none' rel="noreferrer"
      target='_blank'><FacebookIcon sx={{marginRight:'0.5rem'}}fontSize='medium'/>Facebook</Link>
        </Box>
       </Grid>
       <Grid item xs={12} md={4}>
        <Box borderBottom={1} mb={2}>Kontakt</Box>
        <Box sx={{display: 'flex', justifyContent:'start'}} mb={1}><MailIcon sx={{marginRight:'1rem'}}/>{email}</Box>
        <Box sx={{display: 'flex', justifyContent:'start'}}><CallIcon sx={{marginRight:'1rem'}}/>{phoneNumber}</Box>
       </Grid>
      </Grid>
     </Container>
    </Box>
  )
}

export default Footer