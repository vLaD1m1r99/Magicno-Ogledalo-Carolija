import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import { Box, CssBaseline } from "@mui/material";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures";
import Footer from "./components/Footer/Footer";
import ProductOffers from "./components/ProductOffers/ProductOffers";
import AboutUs from "./components/AboutUs/AboutUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import FAQ from "./components/FAQ/FAQ";
import VideoMainPage from "./components/VideoMainPage/VideoMainPage";
import WhatIs from "./components/WhatIs/WhatIs";
import GoogleFontLoader from 'react-google-font-loader';
import Current from "./components/Current/Current";
import {rose, blackColor} from './constants/utils'
<GoogleFontLoader
    fonts={[
        {
            font: 'Alegreya',
            weights: [400],
        },
    ]}
/>
const App = () => {
return (<>
<Current/>
<Box sx={{background: 'white', fontFamily:'Alegreya'
 }}>
<CssBaseline/>
<Navbar />
<VideoMainPage/>
<WhatIs/>
<ProductFeatures/>
<ProductOffers/>
<PhotoGallery/>
<AboutUs/>
<FAQ/>
<Footer/>
</Box>
</>
)
};

export default App;
