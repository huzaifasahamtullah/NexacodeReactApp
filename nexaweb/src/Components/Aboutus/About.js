import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box
            sx={{
                py: 12,
                px: 4,
                backgroundColor: 'transparent',  // Transparent background
                boxShadow: 'none',               // Remove the shadow
                backdropFilter: 'blur(10px)',    // Optional: adds a blur effect for a glassy look
                color: 'white',                   // Text color for better contrast
                width: '100%',                    // Ensure the Box takes full width
            }}
        >
            <Box maxWidth="lg" mx="auto">
                <Box >
                    <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                        <Typography
                            variant="h4"
                            color="primary"
                            gutterBottom
                            align={isSmallScreen ? "center" : "left"}
                            fontWeight="bold"
                        >
                            <h1 className="animated-text">About</h1>
                        </Typography>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                        <p className="animated-subtext">#1 Digital Solution With 10 Years Of Experience.</p>
                    </ScrollAnimation>

                    {/* Grid for Cards */}
                    <Grid container spacing={4} sx={{ mt: 3, width: '100%' }}> {/* Full-width Grid */}
                        <Grid item xs={12} sm={12}> {/* First Box */}
                            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.5 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.7 * 1000}>
                                            <div><img src="/Images/nexacode2.jpg" height={600} width={900} alt="Web Design" /></div>
                                        </ScrollAnimation>
                                        <Divider sx={{ mb: 2 }} />
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.7 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                            About At Nexacode Solutions, we have been at the forefront of digital innovation for over a decade, providing top-tier solutions that empower businesses to thrive in today’s fast-paced digital landscape. With 10 years of experience in delivering cutting-edge software, mobile apps, web development, and UI/UX design, we are your trusted partner in achieving digital success.
                                            </Typography>
                                        </ScrollAnimation>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>

    );
}

export default About;
