import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputAdornment, Alert, Fade} from '@mui/material';
import {styled} from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function FormDialog(props) {
  //This is for alert
  const [alertOn, setAlertOn] = useState({visible: false, text: '', severity: ''});
  //This is for telepfhone input
  const TextFieldTelephone = styled(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
}));
  //This is for FormDialog
 const {open, setOpen} = props;
  const handleClose = () => {
    setOpen(false);
  };
  // This is for date & time
    const [value, setValue] = useState(
    dayjs(new Date().toLocaleString())
  );

  const handleChange = (newValue) => {
    setValue(newValue);}
//This is for emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7fv719l', 'template_4p1hujb', form.current, '7gdkUqap1aYHQzX_6')
      .then((result) => {
          console.log(result.text);
          result.text === 'OK' ? setAlertOn({visible: true, text:  'Uspesno ste poslali rezervaciju. Molimo Vas budite dostupni kako bi Vas kontaktirali u najkracem mogucem roku.', severity:'success'}) : setAlertOn({visible: true, text:  'Doslo je do greske! Molimo Vas pokusajte ponovo ili nas kontaktirajte direktno.', severity:'error'}) ;
      }, (error) => {
          console.log(error.text);
      });
    setTimeout(()=>handleClose(), 5000);
  };
  return (
      <Dialog open={open}>
        {alertOn.visible && <Fade in={alertOn.visible} timeout={500}><Alert variant="filled" severity="success">
       {alertOn.text}
      </Alert>
      </Fade>
     }
        <DialogTitle>Posaljite Rezervaciju</DialogTitle>
        <form ref={form} onSubmit={sendEmail}>
        <DialogContent>
          <DialogContentText>
            Da biste poslali rezervaciju za Vas dogadjaj, molimo Vas da popunite prazna polja i unesete validnu email adresu, kao i kontakt telefon kako bismo mogli da Vas kontaktiramo. Obavezno odaberite datum i vreme pocetka dogadjaja.
          </DialogContentText>
          
          <TextField
            name='user_email'
            autoFocus
            margin="dense"
            id="email"
            label="Email Adresa"
            type="email"
            fullWidth
            variant="standard"
            required
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ), }}
          />
          <TextFieldTelephone
            name='phoneNumber' 
            id="mobileNumber"
            label="Broj Telefona"
            type="number"
            margin="dense"
            fullWidth
            variant="standard"
            required
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneIcon />
            </InputAdornment>
          ), }}
/>
          <TextField
            name='message'
            maxRows={5}
            multiline
            margin="dense"
            id="text"
            label="Opisite dogadjaj i posebne zahteve"
            type="text"
            fullWidth
            variant="standard"
            required
             InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <CelebrationIcon />
            </InputAdornment>
          ), }}
          />
           <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DateTimePicker
          ampm={false}
          type="datetime-local"
          label="Datum i vreme"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params}
            name='date_time'
            margin="dense"
            variant="standard"
            required />
          }
        />
        </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' value='send'>Rezervisi</Button>
          
        </DialogActions>
        </form>
      </Dialog>
      
  );
}