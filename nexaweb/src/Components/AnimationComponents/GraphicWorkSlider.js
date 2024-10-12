import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
    SentimentSatisfiedAlt,
    AssignmentTurnedIn,
    People,
    AccessTime
} from "@mui/icons-material";

const useStyles = {
  iconStyle: {
    fontSize: '50px',
    color: '#3f51b5', // Adjust icon color
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

function GraphicWorkSlider() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Array of icons and titles to display
  const graphicWorks = [
    { icon: <SentimentSatisfiedAlt sx={useStyles.iconStyle} />, title: "20 Plus Happy Clients" },
    { icon: <AssignmentTurnedIn sx={useStyles.iconStyle} />, title: "25 Plus Projects Completed" },
    { icon: <People sx={useStyles.iconStyle} />, title: "50 Plus Employees" },
    { icon: <AccessTime sx={useStyles.iconStyle} />, title: "5 Plus Years Of Experience" }
  ];

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
        className="animated-text"
        sx={{ marginBottom: '40px', color: '#fff' }}
        data-aos="fade-up" // AOS animation for the title
      >
        Our Achievements
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {graphicWorks.map((work, index) => (
          <Grid
            item xs={12} sm={6} md={3} // Adjust grid item size for different screen sizes
            key={index}
            data-aos="fade-up" // AOS animation for each card
            data-aos-delay={index * 100} // Delay the animation for staggered effect
          >
            <Box sx={useStyles.cardContainer}>
              {work.icon}
              <Typography variant="h6" sx={useStyles.title}>
                {work.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GraphicWorkSlider;
