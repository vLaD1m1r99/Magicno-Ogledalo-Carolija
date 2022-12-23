import { Typography, Container, Box, useTheme } from '@mui/material'
import React from 'react'
import magicnoOgledalo from '../../images/Ogledalo.png'
import { blackColor, redColor, white } from '../../constants/utils'
const WhatIs = () => {
  const theme = useTheme();
  return (
   <Box sx={{background: white, py:10}}>
   <Container sx={{display:'flex', justifyContent:'space-between', alignItems:'center', [theme.breakpoints.down('md')]: {
      flexDirection:'column-reverse'
    }}}>
    <Box sx={{display:'flex', paddingRight:'2rem', justifyContent:'center', alignItems:'center', [theme.breakpoints.down('lg')]: {
      my:'4rem'
    }}} ><Box sx={{width:'25rem', height:'25rem' }}component='img' src={magicnoOgledalo}></Box></Box>
    <Box>
    <Typography sx={{fontWeight:'bold', fontFamily: 'Alegreya'}} variant='h4' mt={5} mb={1}>Šta je magično ogledalo</Typography>
    <Typography sx={{ maxWidth:'40rem'
    , fontFamily: 'Alegreya'
    , [theme.breakpoints.down('md')]: {
      textAlign:'center'
    }}} variant='h5' >Magično ogledalo je unikatno foto ogledalo i potpuno novi HIT. Zabavljanje gostiju i domaćina je ono što radi. ČAROLIJA počinje dodirom touch screen-a. Zabeležiće sve važne trenutke putem integrisanog foto aparata, kroz zabavne animacije koje će Vas voditi kroz sve opcije. Animacije su u unikatne za svakog domaćina i ulaze u našu ponudu kao podrazumevane. Sve što treba da uradite je da stanete ispred ogledala, zauzmete pozu i sami ili sa ekipom će te nakon odbrojavanja biti uslikani. Odmah nakon toga ćeš dobiti sliku i mogućnost slanja na email sebi ili dragoj osobi. Vaša fotografija će biti izrađena za samo nekoliko sekundi i ponovo je spremno za slikanje. Kod Vas dolazi sa svojim dodacima - rekvizitima, crvenim tepihom, VIP ogradom. Na raspolaganju će te imati veliki izbor dodataka: šešira, brkova, naočara poruka...</Typography></Box>
    </Container>
    </Box>
  )
}

export default WhatIs