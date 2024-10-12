import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Box, IconButton } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import './Pricing.css'; // Custom CSS for hover animations
import { Instagram } from '@mui/icons-material';

const DigitalMarketingPricingData = [
    {
        title: "Starter",
        price: "$300",
        features: [
            { name: "SEO Optimization", value: "✔️ Basic" },
            { name: "Social Media Management", value: "✔️ 1 Platform" },
            { name: "Content Creation", value: "❌" },
            { name: "Email Campaigns", value: "❌" },
            { name: "Ad Campaigns", value: "✔️ Any Social Media e.g Facebook Ads or Instagram Ads" },
            { name: "Monthly Reports", value: "❌" },
            { name: "Consultation", value: "✔️ Basic" },
            { name: "Support", value: "✔️ Email Support" },
        ],
    },
    {
        title: "Growth",
        price: "$700",
        features: [
            { name: "SEO Optimization", value: "✔️ Advanced" },
            { name: "Social Media Management", value: "✔️ 2 Platforms" },
            { name: "Content Creation", value: "✔️ 5 Posts/Month" },
            { name: "Email Campaigns", value: "✔️ 2 Campaigns" },
            { name: "Ad Campaigns", value: "✔️  Facebook Ads, Instagram Ads" },
            { name: "Monthly Reports", value: "✔️ Detailed" },
            { name: "Consultation", value: "✔️ Strategy & Review" },
            { name: "Support", value: "✔️ Phone & Email Support" },
        ],
    },
    {
        title: "Professional",
        price: "$1500",
        features: [
            { name: "SEO Optimization", value: "✔️ Full Suite" },
            { name: "Social Media Management", value: "✔️ 5 Platforms" },
            { name: "Content Creation", value: "✔️ 15 Posts/Month" },
            { name: "Email Campaigns", value: "✔️ 5 Campaigns" },
            { name: "Ad Campaigns", value: "✔️ Google Ads, Facebook Ads, Instagram Ads, Pinterest Ads & LinkedIn Ads" },
            { name: "Monthly Reports", value: "✔️ Comprehensive" },
            { name: "Consultation", value: "✔️ Full Strategy" },
            { name: "Support", value: "✔️ Priority Support" },
        ],
    },
    {
        title: "Enterprise",
        price: "$5000",
        features: [
            { name: "SEO Optimization", value: "✔️ Enterprise Solutions" },
            { name: "Social Media Management", value: "✔️ Unlimited Platforms" },
            { name: "Content Creation", value: "✔️ 30+ Posts/Month" },
            { name: "Email Campaigns", value: "✔️ Unlimited Campaigns" },
            { name: "Ad Campaigns", value: "✔️ Custom Ad Solutions" },
            { name: "Monthly Reports", value: "✔️ Custom Reports" },
            { name: "Consultation", value: "✔️ Tailored Strategies" },
            { name: "Support", value: "✔️ 24/7 Premium Support" },
        ],
    },
];

const DigitalMarketingPricing = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                backdropFilter: 'blur(10px)',
                padding: { xs: '20px 10px', sm: '40px 0' },
            }}
        >
            {/* Heading and Subheading */}
            <Typography variant="h3" className='animated-text' align="center" gutterBottom>
                Digital Marketing Services
            </Typography>
            <Typography variant="h5" align="center" color='white' gutterBottom>
                One-time Pricing for Comprehensive Digital Marketing
            </Typography>
            <Typography variant="body1" align="center" color='white' paragraph>
                We offer a range of digital marketing packages designed to boost your online presence. Choose from our tailored plans, whether you're just starting or need an enterprise-level solution.
            </Typography>

            {/* Pricing Cards */}
            <Grid container spacing={3} justifyContent="center">
                {DigitalMarketingPricingData.map((plan, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={3} 
                        key={index} 
                        data-aos="fade-up" 
                        data-aos-delay={index * 100}
                    >
                        <Card className="pricing-card">
                            <CardContent>
                                {/* Card Header with Social Media Icons */}
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h5" component="div">
                                        {plan.title}
                                    </Typography>
                                    {/* Social Media Icons */}
                                    <Box>
                                    <IconButton aria-label="Google" color="primary">
                                            <GoogleIcon />
                                        </IconButton>
                                        <IconButton aria-label="Facebook" color="primary">
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton aria-label="Instagram" color="primary">
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton aria-label="LinkedIn" color="primary">
                                            <LinkedInIcon />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <Typography variant="h6" component="div" color="primary">
                                    {plan.price}
                                </Typography>

                                {/* <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
                                    Get a Quote
                                </Button> */}

                                {/* Table of Features */}
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Features</TableCell>
                                            <TableCell>Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {plan.features.map((feature, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{feature.name}</TableCell>
                                                <TableCell>{feature.value}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DigitalMarketingPricing;
