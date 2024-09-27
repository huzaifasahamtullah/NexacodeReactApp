import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function FixedFooter() {
    // LinkGroup Component
    const LinkGroup = ({ header, children }) => {
        return (
            <Grid item xs={12} sm={6} lg={2}>
                <Box mb={2}>
                    <Typography variant="h6" color="textPrimary">
                        {header}
                    </Typography>
                    <Box component="ul" p={0} m={0} style={{ listStyle: "none" }}>
                        {children}
                    </Box>
                </Box>
            </Grid>
        );
    };

    // NavLink Component
    const NavLink = ({ link, label }) => {
        return (
            <Box component="li" mb={1}>
                <Link href={link} variant="body2" color="textSecondary" underline="hover">
                    {label}
                </Link>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                py: 8,
                px: 4,
                backgroundColor: 'rgba(0,0,0,0.7)', // Example of semi-transparent background
                backdropFilter: 'blur(10px)',
                color: 'white',
                width: '100%',
            }}
        >
            <Box maxWidth="lg" mx="auto">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box mb={2}>
                            <Link href="/#" underline="none">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Nexacode App
                                </Typography>
                            </Link>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                Sed ut perspiciatis undmnis iste natus error sit voluptatem totam rem aperiam.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" display="flex" alignItems="center">
                                <Box component="span" color="primary.main" mr={1}>
                                    {/* SVG icon for phone */}
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_941_15626)">
                                            <path
                                                d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                </Box>
                                +012 (345) 678 99
                            </Typography>
                        </Box>
                    </Grid>

                    <LinkGroup header="Resources">
                        <NavLink link="/#" label="SaaS Development" />
                        <NavLink link="/#" label="Our Products" />
                        <NavLink link="/#" label="User Flow" />
                        <NavLink link="/#" label="User Strategy" />
                    </LinkGroup>

                    <LinkGroup header="Company">
                        <NavLink link="/#" label="About TailGrids" />
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

                    <Grid item xs={12} sm={6} lg={3}>
                        <Box mb={2}>
                            <Typography variant="h6" color="textPrimary">
                                Follow Us On
                            </Typography>
                            <Box mt={2} display="flex" gap={2}>
                                {/* Example social icons */}
                                <Link href="javascript:void(0)" color="inherit">
                                    <svg width="20" height="20" fill="currentColor">
                                        {/* Facebook icon SVG */}
                                    </svg>
                                </Link>
                                <Link href="javascript:void(0)" color="inherit">
                                    <svg width="20" height="20" fill="currentColor">
                                        {/* Twitter icon SVG */}
                                    </svg>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default FixedFooter;
