import React, {useState} from 'react'
import { Dialog, DialogContent, Box, useTheme,DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import currentImg from '../../images/Current.jpg'
import { blackColor } from '../../constants/utils';
const Current = () => {
 const theme = useTheme();
 const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog sx={{background:blackColor, padding:0,
 }} maxWidth='sm'  open={open} onClose={handleClose} >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          size="large"
          sx={{
            position: 'absolute',
            right: '1.5em',
            top: '1em',
            color: 'white',
          }}
        >
          <CloseIcon fontSize='inherit'/>
        </IconButton>
     <DialogContent sx={{padding:0, lineHeight:0}}>
      <Box component='img' src={currentImg} sx={{width:'100%'}}></Box>
     </DialogContent>
    </Dialog>
  )
}

export default Current