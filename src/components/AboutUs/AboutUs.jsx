import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { white } from '../../constants/utils'
const AboutUs = () => {
  return (
  <Box sx={{background:white, py:3}}>
  <Container sx={{
   marginY:'5rem'}}>
    <Container >
      <Typography sx={{fontWeight:'bold', fontFamily:'Alegreya'}} variant='h4' id='AboutUs'> O Nama</Typography>
    <Typography variant='h5' sx={{fontFamily:'Alegreya'}}>Magično Ogledalo Čarolija je deo veće kompanije koja je u poslovanju jos od 2001. godine pod nazivom Elabs. Više možete saznati na web sajtu elabs.rs</Typography>
    <Typography variant='h5' sx={{fontFamily:'Alegreya'}}>
    Mi se prvenstveno bavimo iznajmljivanjem Magičnog Ogledala, Teškog dima i Vatrometa. Svoje proizvode smo iznajmljivali desetine puta i na taj način učinili proslave, zabave, veselja zabavnijim za svoje klijente i njihove goste i tako stvorili bezbroj novih uspomena. </Typography>
    
    </Container>
    </Container>
    </Box>
  )
}

export default AboutUs