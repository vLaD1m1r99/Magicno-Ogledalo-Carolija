import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem,Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { navItems, roseColor, redColor } from '../../constants/utils';
import logo from '../../images/magicno logo png.png'
// Sredi linkove kad je mobilni prikaz
const Navbar = (props) => {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link style={{cursor:'pointer'}} to='Home' spy={true} smooth={true} offset={0} duration={500}>
      <Box
            component="img"
            src={logo}
            width={35}
            height={45}
            my={2}
          >
          </Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <Link style={{ cursor:'pointer', width:240, textAlign:'center', marginTop:'1rem'}} key={item.title} to={item.link} spy={true}smooth={true}  offset={-75} duration={500}>
                <Typography variant="body" sx={{ my: 2 }}>{item.title}</Typography>
              </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box id='Home' sx={{ height:'6vh', display:'flex' }}
    >
      <AppBar component="nav" sx={{background: roseColor}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{cursor:'pointer', flexGrow: 1, display: { xs: 'none', sm: 'block', maxWidth:'7vw' }}}>
           <Link to='Home' spy={true} smooth={true} offset={0} duration={500}>
          <Box
            component="img"
            src={logo}
            width={35}
            height={45}
          >
          </Box>
          </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm:  'block', marginLeft:'auto' },
        }}>
            {navItems.map((item) => (
              <Link style={{marginRight:'1rem', cursor:'pointer', '&:hover': {
              backgroundColor: 'white'
             },}} key={item.title} to={item.link} spy={true}smooth={true}  offset={-150} duration={500}>
                {item.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>)
  
}

export default Navbar
