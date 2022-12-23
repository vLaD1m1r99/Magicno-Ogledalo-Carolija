import React, {useState} from 'react'
import {Typography, Container, useTheme, Box} from '@mui/material'
import ReservationDialog from '../ReservationDialog/ReservationDialog'
import { productOffers, white } from '../../constants/utils';
import OfferCard from './OfferCard/OfferCard';
const ProductOffers = () => {
  const theme = useTheme();
  //For Form Dialog
  const [open, setOpen] = useState(false);
 return (<>
 {open && <ReservationDialog setOpen={setOpen} open={open}/>}
 {/* <Typography 
  sx={{fontWeight:'bold'}}
  id='Offers'
  variant='h3' 
  textAlign='center'>
  Ponude
  </Typography> */}
  <Box sx={{background:white, py:10}}>
  <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', 
  [theme.breakpoints.down('md')]: {
    flexDirection:'column'
  },
}}
  maxWidth='false'>
 {productOffers.map((offer, index)=> 
    <OfferCard offer={offer} key={index} setOpen={setOpen} maxWidth={index !== 1 ? 250 : 325} maxHeight={index !== 1 ? 300 : 375}/>
     )} </Container>
     </Box>
  </>)
}

export default ProductOffers