import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Box, Typography, Button} from '@mui/material'
import { carouselImages } from '../../constants/utils'
import { Link } from 'react-scroll'
const ImageCarousel = () => {
  return (
   <Carousel > 
  {carouselImages.map((item, index)=>(
    <Paper key={index} sx={{position: 'relative'}}>
     <Paper sx={{
          maxWidth:'50vw',
          zIndex: 1,
          position: 'absolute',
          top: '40%',
          left: '25%',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'transparent',
          color: 'white',
          flexDirection:'column'
        }}
        elevation={0}>
          <Typography variant='h4' gutterBottom>Najluđe proslave,
venčanja i zabave ikada</Typography>
         <Link to='Offers' spy={true} smooth={true} offset={-75} duration={500}><Button sx={{backgroundColor:'primary.main', color:'white'}}>Rezervisi odmah</Button></Link>
        </Paper>
        <Box
        component='img'
        key={index}
        sx={{
          filter: 'brightness(40%)',
          display: 'block',
          maxWidth: '100vw',
          width: '100%',
        }}
        src={item.img}
        alt={`img${index}`}
      />
   </Paper>
   ))
} 

</Carousel>
  )
}

export default ImageCarousel