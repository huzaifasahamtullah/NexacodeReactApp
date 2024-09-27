import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid"; // Import Grid
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ScrollAnimation from 'react-animate-on-scroll';

function Services() {
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
                color: 'white' // Text color for better contrast
            }}
        >
            <Box maxWidth="lg" mx="auto">
                <Box>
                    <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                        <Typography
                            variant="h4"
                            color="primary"
                            gutterBottom
                            align={isSmallScreen ? "center" : "left"}
                            fontWeight="bold"
                        >
                         <h1 className="animated-text">Our Services & Solutions</h1>   
                        </Typography>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                       
                            <p className="animated-subtext">  Our achievement story is a testament to teamwork and
                            perseverance. Together, we've overcome challenges, celebrated
                            victories, and created a narrative of progress and success.</p>
                          
                    </ScrollAnimation>
                    {/* Grid for Cards */}
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}> {/* First Box */}
                            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Web Design and Web Development
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                        <div><img   src="/Images/webdesing.png" height={300} width={300}></img> </div>
                                        </ScrollAnimation>
                                        <Divider sx={{ mb: 2 }} />
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Transform your online presence with our cutting-edge web design and development solutions
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                tailored to meet your unique business needs.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                We create responsive, user-friendly websites that not
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                only captivate visitors but also drive engagement and conversions.
                                            </Typography>
                                        </ScrollAnimation>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={12} sm={6}> {/* Second Box */}
                            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.3 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Mobile Application Development
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                        <div><img   src="/Images/uiux.png" height={300} width={300}></img> </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Bring your ideas to life with our innovative mobile application development services.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Designed for both iOS and Android platforms.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInX" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                We deliver intuitive, high-performance apps that enhance user experience and drive business growth.
                                            </Typography>
                                        </ScrollAnimation>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>

                    {/* Repeat for remaining boxes if needed */}
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}>
                        <ScrollAnimation animateIn="fadeInUp" duration={0.8} delay={0.2 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                    <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                ERP Systems
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                        <div><img   src="/Images/webdesing.png" height={300} width={300}></img> </div>
                                        </ScrollAnimation>
                                        <Divider sx={{ mb: 2 }} />
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Streamline operations and cut costs with AI-powered ERP
                                                solutions.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Predict equipment failures and avoid downtime with
                                                AI-powered maintenance.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Optimize your supply chain with AI-powered forecasting
                                                and management.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Automate tasks and free up your team for more strategic
                                                work.
                                            </Typography>
                                        </ScrollAnimation>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                    <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Custom Software Development
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                        <div><img   src="/Images/seo.png" height={300} width={300}></img> </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Build amazing mobile apps for iOS and Android that your
                                                users will love.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Create powerful web apps that are easy to use and scale
                                                with your business.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Integrate our AI solutions seamlessly with your existing
                                                systems and tools.
                                            </Typography>
                                        </ScrollAnimation>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}>
                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                    <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                Digital Marketing
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                        <div><img   src="/Images/webdev.png" height={300} width={300}></img> </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Unlock your brand's potential with our comprehensive digital marketing solutions tailored to reach your target audience effectively.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                From SEO to social media strategies, we enhance your online presence and drive measurable results.
                                            </Typography>
                                        </ScrollAnimation>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                                SEO Optimizations
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInUp" duration={1} delay={0.2 * 1000}>
                                        <div><img   src="/Images/uiux.png" height={300} width={300}></img> </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                Boost your website's visibility and attract organic traffic with our expert SEO optimization strategies.
                                            </Typography>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="flipInY" duration={1} delay={0.2 * 1000}>
                                            <Typography variant="body2" color="textSecondary">
                                                We analyze, implement, and monitor key techniques to ensure your site ranks higher on search engines and reaches your target audience.
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

export default Services;
