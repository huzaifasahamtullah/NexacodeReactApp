import React, { useState } from 'react';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './Webdesign.css';
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

function WebDesignCard() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/Images/Web Design 1.jpg", title: "Web Design and Web Development", description: "Transform your online presence with cutting-edge web design and development solutions." },
    { src: "/Images/Web Design 2.jpg", title: "Responsive Design", description: "Create websites that seamlessly adapt to different devices and screen sizes." },
    { src: "/Images/Web Design 3.jpg", title: "UI/UX Design", description: "Design engaging user interfaces and experiences that captivate visitors." },
    { src: "/Images/Web Design 4.jpg", title: "Custom Web Applications", description: "Build custom web applications tailored to your unique business requirements." },
    { src: "/Images/Web Design 5.jpg", title: "E-Commerce Solutions", description: "Develop e-commerce platforms that enhance the online shopping experience." },
    { src: "/Images/Web Design 6.jpg", title: "SEO Optimization", description: "Optimize your website for search engines to improve visibility and rankings." },
    { src: "/Images/Web Design 7.jpg", title: "CMS Integration", description: "Integrate powerful content management systems for seamless content updates." },
    { src: "/Images/Web Design 8.jpg", title: "Web Hosting", description: "Offer reliable and secure web hosting solutions for businesses of all sizes." },
    { src: "/Images/Web Design 9.jpg", title: "Maintenance & Support", description: "Provide ongoing maintenance and support to ensure your website runs smoothly." },
    { src: "/Images/Web Design 10.jpg", title: "Analytics & Reporting", description: "Track website performance with in-depth analytics and reporting tools." },
    { src: "/Images/Web Design 11.jpg", title: "E-Commerce Development", description: "Drive sales with custom e-commerce solutions tailored to your business." }
  ];

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <Grid container spacing={2} className="portfolio-item" data-aos="fade-up">
        {images.map((image, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <div className="portfolio-grid-card" onClick={() => handleClickOpen(image)}>
              <img 
                src={image.src} 
                alt={image.title} 
                className="portfolio-image" 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
              />
              <div className="overlay">
                <Typography variant="h5" className="project-title">
                  {image.title}
                </Typography>
                <Typography variant="body2" className="animated-text">
                  {image.description}
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedImage?.title}</DialogTitle>
        <DialogContent>
          <img src={selectedImage?.src} alt={selectedImage?.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <Typography variant="body1" style={{ marginTop: '16px' }}>
            {selectedImage?.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WebDesignCard;
