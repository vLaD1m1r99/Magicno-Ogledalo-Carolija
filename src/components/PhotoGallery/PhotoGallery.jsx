import React, {useState} from 'react'
import  PhotoAlbum  from 'react-photo-album';
import { galeryImages } from '../../constants/utils'
import Lightbox from "yet-another-react-lightbox";
import {Fullscreen, Slideshow, Zoom, Thumbnails} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Box, Container } from '@mui/material';
const PhotoGallery = () => {
 const [index, setIndex] = useState(-1);
 const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
const photos = galeryImages.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.img,
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: photo.img,
        width: breakpoint,
        height: breakpointHeight
      };
    })
  };
});
const slides = photos.map(({ src, key, width, height, images }) => ({
    src,
    key,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

  return (
    <Box sx={{py:10}}>
  <Container >
     <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: "lazy" } }}
      />
    <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
     </Container>
     </Box>
  )
}

export default PhotoGallery