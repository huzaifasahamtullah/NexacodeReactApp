import Grid from "@mui/material/Grid";
import { Box, Link, Typography, Card } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaWhatsapp } from "react-icons/fa"; // Import all icons

function FixedFooter() {
    // LinkGroup Component
    const LinkGroup = ({ header, children }) => (
        <Grid item xs={12} sm={6} lg={3}>
            <Box mb={2} textAlign="center">
                <Typography variant="h6" color="inherit" gutterBottom>
                    {header}
                </Typography>
                <Box component="ul" p={0} m={0} style={{ listStyle: "none" }}>
                    {children}
                </Box>
            </Box>
        </Grid>
    );

    // NavLink Component
    const NavLink = ({ link, label }) => (
        <Box component="li" mb={1}>
            <Link href={link} variant="body2" color="inherit" underline="hover">
                {label}
            </Link>
        </Box>
    );

    return (
        <Card
            sx={{
                py: 6,
                px: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark background for footer
                color: 'white',
                width: '100%',
            }}
        >
            <Box maxWidth="lg" mx="auto">
                <Grid container spacing={4}>
                    {/* Nexacode App Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box mb={2} textAlign="center"> {/* Center alignment for all text */}
                            <Link href="/#" underline="none">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Nexacode App
                                </Typography>
                            </Link>
                            <Typography variant="body2" color="inherit" paragraph>
                                #1 Digital Solution With 10 Years Of Experience.
                            </Typography>

                            {/* Phone Number */}
                            <Typography variant="body2" color="inherit" display="flex" justifyContent="center" alignItems="center" mb={1}>
                                <Box component="span" color="primary.main" mr={1}>
                                    <FaPhone size={20} />
                                </Box>
                                <span>+971 52 825 1053</span>
                            </Typography>

                            {/* Email */}
                            <Typography variant="body2" color="inherit" display="flex" justifyContent="center" alignItems="center" mb={1}>
                                <Box component="span" color="primary.main" mr={1}>
                                    <FaEnvelope size={20} />
                                </Box>
                                <span>nexacodesolution@gmail.com</span>
                            </Typography>

                            {/* Address */}
                            <Typography variant="body2" color="inherit" display="flex" justifyContent="center" alignItems="center">
                                <Box component="span" color="primary.main" mr={1}>
                                    <FaMapMarkerAlt size={20} />
                                </Box>
                                <span>UAE, Dubai</span>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Link Groups Section */}
                    <LinkGroup header="Resources">
                        <NavLink link="/#" label="SaaS Development" />
                        <NavLink link="/#" label="Our Products" />
                        <NavLink link="/#" label="User Flow" />
                        <NavLink link="/#" label="User Strategy" />
                    </LinkGroup>

                    <LinkGroup header="Company">
                        <NavLink link="/#" label="About Nexacode" />
                        <NavLink link="/#" label="Contact & Support" />
                        <NavLink link="/#" label="Success History" />
                        <NavLink link="/#" label="Setting & Privacy" />
                    </LinkGroup>

                    <LinkGroup header="Quick Links">
                        <NavLink link="/#" label="Premium Support" />
                        <NavLink link="/#" label="Our Services" />
                        <NavLink link="/#" label="Know Our Team" />
                        <NavLink link="/#" label="Download App" />
                    </LinkGroup>

                    {/* Social Media Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box mb={2} textAlign="center">
                            <Typography variant="h6" className="animated-text">
                                Follow Us On
                            </Typography>
                            <Box mt={2} display="flex" justifyContent="center" gap={2}>
                                {/* Facebook Icon */}
                                <Link href="https://facebook.com" color="inherit">
                                    <FaFacebookF size={24} />
                                </Link>

                                {/* Instagram Icon */}
                                <Link href="https://instagram.com" color="inherit">
                                    <FaInstagram size={24} />
                                </Link>

                                {/* LinkedIn Icon */}
                                <Link href="https://linkedin.com" color="inherit">
                                    <FaLinkedinIn size={24} />
                                </Link>

                                {/* Skype Icon */}
                                <Link href="https://skype.com" color="inherit">
                                    <FaSkype size={24} />
                                </Link>

                                {/* WhatsApp Icon */}
                                <Link href="https://whatsapp.com" color="inherit">
                                    <FaWhatsapp size={24} />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

export default FixedFooter;
