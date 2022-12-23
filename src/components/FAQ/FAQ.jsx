import React from "react";
import { Container, Box } from "@mui/material";
import Faq from "react-faq-component";
import { FAQData } from '../../constants/utils'
const styles = {
    // bgColor: 'white',
    titleTextColor: 'black',
    rowTitleColor: 'black',
    titleTextSize:'2.5rem',
    rowTitleTextSize:'1.5rem',
    rowContentTextSize:'large'
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const FAQ = () => {
    return (
      <Box sx={{py:5}}>
        <Container>
            <Faq
                data={FAQData}
                styles={styles}
            />
        </Container>
        </Box>
    );
}
export default FAQ