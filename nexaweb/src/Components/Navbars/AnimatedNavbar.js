// src/AnimatedNavbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { alpha } from '@mui/material/styles'; 
import { Link } from "react-scroll"; 

// Custom styled components for animation
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Optional: Adds a background color
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,  // Ensure it stays on top of other content
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: theme.transitions.create(['transform'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: alpha(theme.palette.primary.main, 0.2), // Use alpha here
  },
}));

const AnimatedNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobile view
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250, backgroundColor: '#333', height: '100vh', color: 'white' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home">
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="fixed" color="transparent">
          <StyledToolbar>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="/Images/logo.png" height={80} width={80} alt="Logo" />
            </Typography>
            {!isMobile && (
              <>
                <AnimatedButton color="inherit">
                  <Link to="home" smooth={true} duration={500}>Home</Link>
                </AnimatedButton>
                <AnimatedButton color="inherit">
                  <Link to="about" smooth={true} duration={500}>About</Link>
                </AnimatedButton>
                <AnimatedButton color="inherit">
                  <Link to="services" smooth={true} duration={500}>Services</Link>
                </AnimatedButton>
                <AnimatedButton color="inherit" href="/portfolio">Portfolio</AnimatedButton>
                <AnimatedButton color="inherit">
                  <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </AnimatedButton>
              </>
            )}
          </StyledToolbar>
        </StyledAppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Box>
    </div>
  );
};

export default AnimatedNavbar;
