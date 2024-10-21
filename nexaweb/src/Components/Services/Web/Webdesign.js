import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import { Web, Build, Devices, AutoAwesome, Close } from '@mui/icons-material';
import AOS from "aos";
import "aos/dist/aos.css";
import './Webdesign.css'; // Ensure this is the correct path to your CSS

const colors = {
    primary: "#1976d2",
    secondary: "#1565c0",
    light: "#e3f2fd",
    dark: "#0d47a1",
};

const cardData = [
    {
        icon: <Web sx={{ fontSize: 45, mr: 2, color: '#004d40' }} />,
        title: "Transforming the Digital Landscape",
        content: "Web design and development have become the cornerstone of every business's online presence. Modern web design trends are essential for engaging visitors and building a professional platform.",
        backgroundColor: "linear-gradient(135deg, #e0f7fa, #80deea)",
        color: "#004d40",
    },
    {
        icon: <Build sx={{ fontSize: 45, mr: 2, color: '#880e4f' }} />,
        title: "Custom Websites that Deliver",
        content: "Our custom web development services ensure a tailored approach that meets your unique business needs and goals.",
        backgroundColor: "linear-gradient(135deg, #fce4ec, #f06292)",
        color: "#880e4f",
    },
    {
        icon: <Devices sx={{ fontSize: 45, mr: 2, color: '#01579b' }} />,
        title: "Design & SEO Optimization",
        content: "From responsive design to SEO optimization, our web development services ensure that your business stays ahead in the digital world, whether you need e-commerce or UI/UX design.",
        backgroundColor: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        color: "#01579b",
    },
    {
        icon: <AutoAwesome sx={{ fontSize: 45, mr: 2, color: '#4a148c' }} />,
        title: "Innovative Web Design Services",
        content: "Ready to transform your website? Contact NexaCode Solution for innovative web design and development services tailored to your specific needs.",
        backgroundColor: "linear-gradient(135deg, #e1bee7, #ab47bc)",
        color: "#4a148c",
    },
];

const Webdesign = () => {
    const [open, setOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [visible, setVisible] = useState([]);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-cubic', delay: 200, once: true });
    }, []);

    // Scroll detection for fade-in effect
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element) => {
                const position = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (position < windowHeight - 100) {
                    setVisible((prev) => [...prev, element]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLearnMoreClick = (images) => {
        setSelectedImages(images);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Hero Section */}
            <Paper
                elevation={8}
                sx={{
                    p: 8,
                    mb: 6,
                    background: `linear-gradient(to right, ${colors.light}, #bbdefb)`,
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                data-aos="fade-up"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))",
                        zIndex: 1,
                    }}
                />
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        animation: "scroll 10s linear infinite",
                        color: colors.dark,
                    }}
                >
                    Web Design and Development Blog
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    sx={{ color: '#424242', zIndex: 2 }}
                    gutterBottom
                >
                    Explore insights, trends, and tips on web design and development.
                </Typography>

                <Box
                    sx={{
                        position: 'relative',
                        mt: 4,
                        mb: 4,
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0))",
                            borderRadius: 4,
                            zIndex: 1
                        }
                    }}
                    data-aos="zoom-in"
                >
                    <CardMedia
                        component="img"
                        image="/Images/Web design 2.jpg"
                        alt="Web Design and Development Blog"
                        sx={{
                            height: { xs: 250, sm: 450 },
                            borderRadius: 4,
                            position: 'relative',
                            zIndex: 0,
                            transition: "transform 0.5s ease",
                            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
                            "&:hover": {
                                transform: "scale(1.08)"
                            }
                        }}
                    />
                </Box>

                <Box textAlign="center" data-aos="fade-up" data-aos-delay="600">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleLearnMoreClick(["/Images/app dpm 6", "/Images/app dpm 6.jpg"])}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            backgroundColor: colors.primary,
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                backgroundColor: colors.secondary,
                                transform: "scale(1.05)",
                                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)"
                            }
                        }}
                    >
                        Learn More
                    </Button>
                </Box>
            </Paper>

            {/* Blog Content in Cards */}
            <Grid container spacing={6}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card
                            elevation={8}
                            sx={{
                                p: 4,
                                background: card.backgroundColor,
                                color: card.color,
                                borderRadius: 4,
                                transition: "transform 0.4s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.06)",
                                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)"
                                }
                            }}
                            data-aos="fade-up"
                            className={`fade-in ${visible.includes(document.querySelector(`.fade-in:nth-of-type(${index + 1})`)) ? 'visible' : ''}`}
                        >
                            <CardContent>
                                {card.icon}
                                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body2">
                                    {card.content}
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleLearnMoreClick(["/Images/app dpm 6", "/Images/app dpm 6.jpg"])}
                                        sx={{
                                            backgroundColor: card.color,
                                            '&:hover': {
                                                backgroundColor: 'darken(card.color, 10%)',
                                            }
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modal for Image Viewing */}
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                <DialogTitle>
                    Image Gallery
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {selectedImages.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`Selected ${index + 1}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '8px',
                                    marginBottom: '10px',
                                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)"
                                }}
                            />
                        ))}
                    </Box>
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default Webdesign;
