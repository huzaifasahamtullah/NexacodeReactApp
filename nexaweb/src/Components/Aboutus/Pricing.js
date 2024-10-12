import React, { useEffect } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import './Pricing.css'; // Custom CSS for hover animations

const pricingData = [
    {
        title: "Basic",
        price: "$200",
        features: [
            { name: "Design", value: "✔️ Simple" },
            { name: "Website Pages", value: "5" },
            { name: "Responsive Design", value: "✔️" },
            { name: "Consultation & Strategy", value: "✔️ Basic" },
            { name: "Free Logo", value: "❌" },
            { name: "Content", value: "❌" },
            { name: "Hosting", value: "❌" },
            { name: "Domain", value: "❌" },
            { name: "CMS Integration", value: "❌" },
            { name: "E-Commerce", value: "❌" },
            { name: "Custom Features", value: "❌" },
            { name: "Customer Support", value: "✔️ Email Support" },
        ],
        icon: <DesignServicesIcon />, // Design icon for the Basic plan
    },
    {
        title: "Standard",
        price: "$600",
        features: [
            { name: "Design", value: "✔️ Advanced tech UI-Animation" },
            { name: "Website Pages", value: "10" },
            { name: "Responsive Design", value: "✔️" },
            { name: "Consultation & Strategy", value: "✔️ Detailed" },
            { name: "Free Logo", value: "✔️" },
            { name: "Content", value: "❌" },
            { name: "Hosting", value: "✔️" },
            { name: "Domain", value: "❌" },
            { name: "CMS Integration", value: "✔️ WordPress" },
            { name: "E-Commerce", value: "❌" },
            { name: "Custom Features", value: "❌" },
            { name: "Customer Support", value: "✔️ Phone & Email Support" },
        ],
        icon: <CodeIcon />, // Development icon for the Standard plan
    },
    {
        title: "Premium",
        price: "$1500",
        features: [
            { name: "Design", value: "✔️ Custom Design with Advanced tech UI-Animation" },
            { name: "Website Pages", value: "Unlimited" },
            { name: "Responsive Design", value: "✔️" },
            { name: "Consultation & Strategy", value: "✔️ In-Depth" },
            { name: "Free Logo", value: "✔️" },
            { name: "Content", value: "✔️" },
            { name: "Hosting", value: "✔️" },
            { name: "Domain", value: "✔️" },
            { name: "CMS Integration", value: "✔️ Custom CMS" },
            { name: "E-Commerce", value: "✔️ Basic Shop" },
            { name: "Custom Features", value: "❌" },
            { name: "Customer Support", value: "✔️ Priority Support" },
        ],
        icon: <DesignServicesIcon />, // Design icon for the Premium plan
    },
    {
        title: "Enterprise",
        price: "$4000",
        features: [
            { name: "Design", value: "✔️ Fully Custom with Advanced tech UI-Animation" },
            { name: "Website Pages", value: "Unlimited" },
            { name: "Responsive Design", value: "✔️" },
            { name: "Consultation & Strategy", value: "✔️ Fully Customized" },
            { name: "Free Logo", value: "✔️" },
            { name: "Content", value: "✔️" },
            { name: "Hosting", value: "✔️ Managed Hosting" },
            { name: "Domain", value: "✔️ Included" },
            { name: "CMS Integration", value: "✔️ Custom CMS" },
            { name: "E-Commerce", value: "✔️ Full Shop" },
            { name: "Custom Features", value: "✔️ Tailored Solutions" },
            { name: "Customer Support", value: "✔️ 24/7 Premium Support" },
        ],
        icon: <CodeIcon />, // Development icon for the Enterprise plan
    },
];

const Pricing = () => {
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
                padding: { xs: '20px 10px', sm: '40px 0' }, // Adjust padding for mobile
            }}
        >
            {/* Heading and Subheading */}
            <Typography variant="h3" className='animated-text' align="center" gutterBottom>
                Web Design & Dev Solution
            </Typography>
            <Typography variant="h5" align="center" color='white' gutterBottom>
                The Packages Pricing are One Time Only*
            </Typography>
            <Typography variant="body1" align="center" color='white' paragraph>
                Our web design and development solutions come with four pricing plans. Each plan is carefully tailored 
                to suit different project needs, ranging from basic websites to full-scale enterprise solutions. 
                Check out the features in each plan to find the best fit for your business.
            </Typography>

            {/* Pricing Cards */}
            <Grid container spacing={3} justifyContent="center">
                {pricingData.map((plan, index) => (
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
                                <Typography variant="h5" component="div" display="flex" alignItems="center">
                                    {plan.icon}
                                    <span style={{ marginLeft: '8px' }}>{plan.title}</span>
                                </Typography>
                                <Typography variant="h6" component="div" color="primary">
                                    {plan.price}
                                </Typography>
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

export default Pricing;
