import React from 'react'
import {Card, CardContent,CardActions ,Typography, Button, Container, Box, useTheme} from '@mui/material'
import EuroIcon from '@mui/icons-material/Euro';
import CheckIcon from '@mui/icons-material/Check';
import { roseColor } from '../../../constants/utils';
const OfferCard = ({offer, setOpen, maxWidth, maxHeight}) => {
  const theme = useTheme();
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Card raised={true} sx={{ 
     minWidth: {maxWidth},
      minHeight:{maxHeight}, borderRadius:'1rem',background:roseColor, margin:'0 2rem',
    [theme.breakpoints.down('md')]:{
      margin:'2rem 0'
    },
    }}>
      <CardContent>
        <Typography sx={{fontWeight:'bold'}}variant='h4' gutterBottom textAlign='center'>
          {offer.name}
        </Typography>
        <Typography variant="h4" textAlign='center'>
        {offer.price}<EuroIcon/>
        </Typography>
        <Container sx={{display:'flex',
        flexDirection:'column', justifyContent:'center', alignItems:'start', marginTop:'1rem'}}>
       {offer.includes.map((include, index)=>
       (<Box key={index} sx={{display:'flex'}} >
        <CheckIcon/> <Typography key={index} gutterBottom>{include}</Typography>
       </Box>)
       )}
       </Container>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button sx={{mb:'0.75rem', background:'black'}} variant='contained' size="small" onClick={handleClickOpen}>Rezervisi</Button>
      </CardActions>
    </Card>
  )
}

export default OfferCard