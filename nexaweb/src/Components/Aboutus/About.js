import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box maxWidth="lg" mx="auto">
            <Box>
                {/* Title Section */}
                <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                    <Typography
                        variant="h4"
                        color="primary"
                        gutterBottom
                        align={isSmallScreen ? "center" : "left"}
                        fontWeight="bold">
                        <h1 className="animated-text">About</h1>
                    </Typography>
                </ScrollAnimation>
                {/* Grid for Image and Content */}
                <Grid container spacing={4} sx={{ mt: 3, width: '100%' }}>
                    {/* Image Column */}
                    <Grid item xs={12} sm={6}> {/* 6 columns for medium screens */}
                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.5 * 1000}>
                            <Box display="flex"  justifyContent="center" alignItems="center">
                                <img
                                    src="/Images/9.png"
                                    alt="About Nexacode"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        transition: '0.7s',
                                        '&:hover': { transform: 'scale(1.05)', transition: '0.3s ease-in-out' },
                                    }}
                                />
                            </Box>
                        </ScrollAnimation>
                    </Grid>

                    {/* Content Column */}
                    <Grid item xs={12} sm={6}> {/* 6 columns for medium screens */}
                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.7 * 1000}>
                            <Card variant="outlined" className="div-inherti-opacity" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                <CardContent>
                                    <Typography variant="h6" color="inherit" gutterBottom>
                                        #1 Digital Solution With 10 Years Of Experience.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" paragraph>
                                        At Nexacode Solutions, we have been at the forefront of digital innovation for over a decade, providing top-tier solutions that empower businesses to thrive in today’s fast-paced digital landscape. With 10 years of experience in delivering cutting-edge software, mobile apps, web development, and UI/UX design, we are your trusted partner in achieving digital success.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default About;
