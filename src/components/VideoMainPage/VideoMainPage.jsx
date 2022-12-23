import { Box, Container, useTheme } from '@mui/material'
import React from 'react'
import videoBg from '../../images/Ogledalo Braca.mp4'
import { blackColor } from '../../constants/utils'
const VideoMainPage1 = () => {
  const theme = useTheme();
  return (
    <Box sx={{[theme.breakpoints.up('lg')]: {
      background: blackColor
    }}}>
   <Container sx={{width:'100%', height:'100%', mb:-0.8}} disableGutters>
   <video style={{objectFit:'cover'}} width='100%' height='100%' src={videoBg} autoPlay loop muted >

   </video>
   </Container>
   </Box>)
}

export default VideoMainPage1