import React from 'react'
import { Grid, Typography, Box} from '@mui/material'
import { productFeatures, redColor, redColorR, roseColor } from '../../constants/utils'
const ProductFeatures = () => {
  return (
  <Grid container 
  sx={{ marginTop:'5rem', marginBottom: '5rem',padding:'0 10rem'}}
  spacing={4}
  justifyContent="center"
  alignItems="center"
  columns={{ xs: 1, md: 3 }}>
   {productFeatures.map((productFeature, index) =>{
    const color=index % 2 === 0 ? roseColor : redColor;
    return (
 <Grid sx={{height: '300px'}}item xs={1} md={1} key={index}>
  <Box sx={{display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems: 'center'}}>
    
  <Box component='nav' sx={{borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'1.5rem', width:'10rem', height:'10rem',background: color}}
  >{productFeature.icon}</Box>
 <Typography sx={{width: '10rem', fontWeight:'bold', color:'text.secondary'}}variant='body' align='center' mt={1}>{productFeature.text}</Typography>
  </Box> 
  </Grid>
   )})}
 </Grid>
  )
}
export default ProductFeatures