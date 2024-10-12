import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Services() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    // Initialize AOS animations on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="services">
            <Box
                sx={{
                    py: 8,
                    px: 2,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'blur(10px)',
                    color: 'white'
                }}
            >
                <Box maxWidth="lg" mx="auto">
                    <Box>
                        <Typography
                            variant="h4"
                            color="primary"
                            gutterBottom
                            align={isSmallScreen ? "center" : "left"}
                            fontWeight="bold"
                            data-aos="fade-up"
                        >
                            <h1 className="animated-text">Our Services & Solutions</h1>
                        </Typography>
                        <p className="animated-subtext" data-aos="fade-up">
                            At Nexacode Solutions, we offer a comprehensive suite of services,
                            including custom software development, mobile app solutions, and web design.
                            Our innovative, tailored approaches ensure your business stays ahead in the competitive digital landscape.
                        </p>

                        {/* Grid for Cards */}
                        <Grid container spacing={2} sx={{ mt: 3 }}>
                            {/* First Row */}
                            <Grid item xs={12} sm={4} data-aos="fade-right"> {/* 3 columns layout on larger screens */}
                                <Link to="/webdesign" style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{ p: 2, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Web Design and Web Development
                                            </Typography>
                                            <div><img src="/Images/7.png" height={200} width={200} alt="Web Design" /> {/* Restored original image size */}</div>
                                            <Typography variant="body2" color="textSecondary">
                                                Transform your online presence with our cutting-edge web design and development solutions
                                                tailored to meet your unique business needs.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                We create responsive, user-friendly websites that not only captivate visitors but also drive engagement and conversions.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={4} data-aos="fade-right">
                                <Link to="/appdesign" style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{ p: 2, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Mobile Application Development
                                            </Typography>
                                            <div><img src="/Images/2.png" height={200} width={200} alt="Mobile App Development" /> {/* Restored original image size */}</div>
                                            <Typography variant="body2" color="textSecondary">
                                                Bring your ideas to life with our innovative mobile application development services.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Designed for both iOS and Android platforms.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                We deliver intuitive, high-performance apps that enhance user experience and drive business growth.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={4} data-aos="fade-right">
                                <Link to="/digitalmarketing" style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{ p: 2, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Digital Marketing
                                            </Typography>
                                            <div><img src="/Images/4.png" height={200} width={200} alt="Digital Marketing" /> {/* Restored original image size */}</div>
                                            <Typography variant="body2" color="textSecondary">
                                                Boost your online presence with targeted digital marketing strategies.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Engage customers through social media, email campaigns, and personalized content.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>

                            {/* Second Row */}
                            <Grid item xs={12} sm={4} data-aos="fade-right">
                                <Link to="/seo" style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{ p: 2, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                SEO Optimization
                                            </Typography>
                                            <div><img src="/Images/3.png" height={200} width={200} alt="SEO Optimization" /> {/* Restored original image size */}</div>
                                            <Typography variant="body2" color="textSecondary">
                                                Improve your website’s visibility with advanced SEO techniques.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Achieve higher rankings on search engines through on-page and off-page optimization.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={4} data-aos="fade-right">
                                <Link to="/erp" style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{ p: 2, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                ERP Systems
                                            </Typography>
                                            <div><img src="/Images/5.png" height={200} width={200} alt="ERP Systems" /> {/* Restored original image size */}</div>
                                            <Typography variant="body2" color="textSecondary">
                                                Streamline operations and cut costs with AI-powered ERP solutions.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={4} data-aos="fade-right">
                                <Link to="/customsoftware" style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{ p: 2, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                        <CardContent>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Custom Software Development
                                            </Typography>
                                            <div><img src="/Images/6.png" height={200} width={200} alt="Custom Software" /> {/* Restored original image size */}</div>
                                            <Typography variant="body2" color="textSecondary">
                                                Enhance your business processes with custom software development.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Services;
