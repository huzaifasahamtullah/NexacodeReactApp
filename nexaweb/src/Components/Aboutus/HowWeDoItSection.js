import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Cloud, DesignServices, Code, CheckCircle, RocketLaunch, Build } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const useStyles = {
  iconStyle: {
    fontSize: '50px',
    color: '#3f51b5', // Adjust icon color if needed
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff', // White background for the card
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for card effect
    color: '#000', // Black text for better readability on white background
  },
  title: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  description: {
    marginTop: '10px',
  }
};

const steps = [
  { icon: <Cloud sx={useStyles.iconStyle} />, title: 'Domain and Hosting', description: 'Get the right domain and hosting for smooth, scalable performance.' },
  { icon: <DesignServices sx={useStyles.iconStyle} />, title: 'Design', description: 'We create interactive, visually appealing designs for your Website.' },
  { icon: <Code sx={useStyles.iconStyle} />, title: 'Development & CMS Integration', description: 'Transform designs into responsive websites with CMS integration.' },
  { icon: <CheckCircle sx={useStyles.iconStyle} />, title: 'Testing & Quality Assurance', description: 'We ensure seamless performance and maintain quality through detailed testing.' },
  { icon: <RocketLaunch sx={useStyles.iconStyle} />, title: 'Launch & Monitoring', description: 'Launch confidently with ongoing Website performance tracking.' },
  { icon: <Build sx={useStyles.iconStyle} />, title: 'Maintenance & Support', description: 'Keep your site updated with regular maintenance and SEO.' }
];

const HowWeDoItSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration
    });
  }, []);

  return (
    <Box sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      backdropFilter: 'blur(10px)',
      padding: '40px 0',
    }}>
      <Typography
        variant="h4"
        align="center"
        className='animated-text'
        sx={{ marginBottom: '40px', color: '#fff' }}
        data-aos="fade-up" // AOS animation for the title
      >
        How We Do It
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid
            item xs={12} sm={6} md={4}
            key={index}
            data-aos="fade-up" // AOS animation for each card
            data-aos-delay={index * 100} // Delay the animation for staggered effect
          >
            <Box sx={useStyles.cardContainer}>
              {step.icon}
              <Typography variant="h6" sx={useStyles.title}>
                {step.title}
              </Typography>
              <Typography variant="body1" sx={useStyles.description}>
                {step.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeDoItSection;
