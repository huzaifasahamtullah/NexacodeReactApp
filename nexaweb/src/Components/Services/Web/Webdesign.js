import React, { useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Paper, Box } from "@mui/material";
import { Web, Build, Devices, AutoAwesome } from '@mui/icons-material';
import AOS from "aos";
import "aos/dist/aos.css";

const Webdesign = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once
        });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Hero Section */}
            <Paper 
                elevation={3} 
                sx={{ 
                    p: 6, 
                    mb: 6, 
                    background: "linear-gradient(to right, #ebf8ff, #cfe2ff)", 
                    borderRadius: 2 
                }}
                data-aos="fade-up" // AOS Animation applied here
            >
                <Typography 
                    variant="h3" 
                    component="h1" 
                    align="center" 
                    fontWeight="bold" 
                    gutterBottom 
                    sx={{ 
                        animation: "bounce 1.5s infinite", 
                        "@keyframes bounce": {
                            "0%, 100%": { transform: "translateY(0)" },
                            "50%": { transform: "translateY(-10px)" },
                        }
                    }}
                >
                    Web Design and Development Blog
                </Typography>
                <Typography 
                    variant="h6" 
                    align="center" 
                    color="textSecondary"
                    gutterBottom
                >
                    Explore insights, trends, and tips on web design and development.
                </Typography>

                {/* Hero Image */}
                <CardMedia
                    component="img"
                    image="/Images/Web design 2.jpg"
                    alt="Web Design and Development Blog"
                    sx={{
                        height: { xs: 200, sm: 400 },
                        borderRadius: 2,
                        mt: 4,
                        mb: 4,
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)"
                        }
                    }}
                    data-aos="zoom-in" // AOS Animation applied here
                />
            </Paper>

            {/* Blog Content in Cards */}
            <Grid container spacing={4}>
                {/* Card 1 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={5}
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 3,
                            background: "linear-gradient(135deg, #e0f7fa, #80deea)", 
                            color: "#004d40",
                            transition: "transform 0.3s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.05)", 
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" 
                            } 
                        }}
                        data-aos="fade-right" // AOS Animation applied here
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Web sx={{ fontSize: 40, mr: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Transforming the Digital Landscape
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            Web design and development have become the cornerstone of every business's online presence. 
                            Modern web design trends are essential for engaging visitors and building a professional platform.
                        </Typography>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={5}
                        sx={{ 
                            p: 3,
                            background: "linear-gradient(135deg, #fce4ec, #f06292)", 
                            color: "#880e4f",
                            transition: "transform 0.3s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.05)", 
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" 
                            },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                        data-aos="fade-left" // AOS Animation applied here
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Build sx={{ fontSize: 40, mr: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Custom Websites that Deliver
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            At NexaCode Solution, we specialize in crafting custom websites that are optimized for SEO 
                            and performance, combining the latest technologies with a deep understanding of user behavior.
                        </Typography>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={5}
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 3,
                            background: "linear-gradient(135deg, #ffecb3, #ffca28)", 
                            color: "#e65100",
                            transition: "transform 0.3s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.05)", 
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" 
                            } 
                        }}
                        data-aos="fade-right" // AOS Animation applied here
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Devices sx={{ fontSize: 40, mr: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Responsive Design & SEO Optimization
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            From responsive design to SEO optimization, our web development services ensure that your business 
                            stays ahead in the digital world, whether you need e-commerce or UI/UX design.
                        </Typography>
                    </Card>
                </Grid>

                {/* Card 4 */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        elevation={5}
                        sx={{ 
                            p: 3,
                            background: "linear-gradient(135deg, #e1bee7, #ab47bc)", 
                            color: "#4a148c",
                            transition: "transform 0.3s ease-in-out", 
                            "&:hover": { 
                                transform: "scale(1.05)", 
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" 
                            },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                        data-aos="fade-left" // AOS Animation applied here
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AutoAwesome sx={{ fontSize: 40, mr: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Innovative Web Design Services
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            Ready to transform your website? Contact NexaCode Solution for innovative web design and development 
                            services tailored to your specific needs.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Webdesign;
