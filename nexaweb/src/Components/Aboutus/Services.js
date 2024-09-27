import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid"; // Import Grid
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Services() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box
        sx={{
            py: 12,
            px: 4,
            background: 'linear-gradient(to right, #4a90e2, #6dd5ed)', // Gradient colors
            color: 'white' // Text color for better contrast
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
                    >
                        Our Services & Solutions
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        align={isSmallScreen ? "center" : "left"}
                    >
                        Our achievement story is a testament to teamwork and
                        perseverance. Together, we've overcome challenges, celebrated
                        victories, and created a narrative of progress and success.
                    </Typography>

                    {/* Grid for Cards */}
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}> {/* First Box */}
                            <Card variant="outlined" sx={{ p: 3, transition: "0.7s" }}>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                    Web Design and Web Development
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Typography variant="body2" color="textSecondary">
                                    Transform your online presence with our cutting-edge web design and development solutions
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    tailored to meet your unique business needs.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    We create responsive, user-friendly websites that not
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    only captivate visitors but also drive engagement and conversions.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}> {/* Second Box */}
                            <Card variant="outlined" sx={{ p: 3, transition: "0.7s" }}>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        Mobile Application Development
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
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
                        </Grid>
                    </Grid>

                    {/* Repeat for remaining boxes if needed */}
                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Card variant="outlined" sx={{ p: 3, transition: "0.7s" }}>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        ERP Systems
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        Streamline operations and cut costs with AI-powered ERP
                                        solutions.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Predict equipment failures and avoid downtime with
                                        AI-powered maintenance.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Optimize your supply chain with AI-powered forecasting
                                        and management.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Automate tasks and free up your team for more strategic
                                        work.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card variant="outlined" sx={{ p: 3, transition: "0.7s" }}>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        Custom Software Development
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        Build amazing mobile apps for iOS and Android that your
                                        users will love.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Create powerful web apps that are easy to use and scale
                                        with your business.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Integrate our AI solutions seamlessly with your existing
                                        systems for a streamlined workflow.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Card variant="outlined" sx={{ p: 3, transition: "0.7s" }}>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        Digital Marketing
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Typography variant="body2" color="textSecondary">
                                    Unlock your brand's potential with our comprehensive digital marketing solutions tailored to reach your target audience effectively.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    From SEO to social media strategies, we enhance your online presence and drive measurable results.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card variant="outlined" sx={{ p: 3, transition: "0.7s" }}>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        SEO Optimizations
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Typography variant="body2" color="textSecondary">
                                    Boost your website's visibility and attract organic traffic with our expert SEO optimization strategies.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    We analyze, implement, and monitor key techniques to ensure your site ranks higher on search engines and reaches your target audience.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Services;
