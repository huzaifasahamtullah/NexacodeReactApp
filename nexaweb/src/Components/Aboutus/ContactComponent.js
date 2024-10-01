import React, { useEffect } from "react";
import { Box, Card, Typography, TextField, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactComponent() {
    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div id="contact">
            <Box sx={{ p: 3, maxWidth: "80%", margin: "auto", color: "white" }}>
                <Typography variant="h4" align="center" mb={3}>
                    Contact Us
                </Typography>

                {/* Google Map iframe */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.4567894852817!2d55.17330361500528!3d24.98458988399545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73f365710f7f%3A0x8a0b19e15873b88a!2sBlue%20Space%20Business%20Center%20LLC.!5e0!3m2!1sen!2s!4v1631533927074!5m2!1sen!2s"
                    style={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        border: "none" // Optional: removes border
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <Card sx={{ p: 3, backgroundColor: "white", color: "black" }} data-aos="fade-up">
                    <Typography variant="h5" align="center" mb={2}>
                        Get in Touch
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Your Name"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Your Email"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Message"
                            multiline
                            rows={4}
                            sx={{ mb: 2 }}
                            required
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Send Message
                        </Button>
                    </form>
                </Card>
            </Box>
        </div>
    );
}

export default ContactComponent;
