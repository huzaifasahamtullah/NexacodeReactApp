import React, { useState } from 'react';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './Appdesign.css';

function AppdesignCard() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/Images/App dpm 1.jpg", title: "Stunning App UI Design", description: "Transform your app's interface with visually appealing and user-friendly designs." },
    { src: "/Images/App dpm 2.jpg", title: "Responsive App Design", description: "Ensure your app looks great on all devices with responsive design principles." },
    { src: "/Images/App dpm 3.jpg", title: "Intuitive UI/UX Design", description: "Craft engaging user experiences that captivate and retain users." },
    { src: "/Images/App dpm 4.jpg", title: "Custom Mobile Applications", description: "Build tailor-made mobile applications that meet your unique business needs." },
    { src: "/Images/App dpm 5.jpg", title: "Seamless Navigation", description: "Design intuitive navigation that enhances user experience and accessibility." },
    { src: "/Images/App dpm 6.jpg", title: "User-Centric Design", description: "Focus on user needs and preferences to create an app that resonates with your audience." },
    { src: "/Images/App dpm 7.jpg", title: "Feature-Rich Applications", description: "Develop applications packed with features that enhance functionality and usability." },
    { src: "/Images/App dpm 8.jpg", title: "Engaging Animations", description: "Incorporate animations that add flair and engagement to your app's interface." },
    { src: "/Images/App dpm 12.jpg", title: "Accessibility Focused Design", description: "Create apps that are accessible to all users, ensuring a broader reach." },
    { src: "/Images/App dpm 10.jpg", title: "Performance Optimized Apps", description: "Ensure your app performs smoothly with optimized design and development practices." },
    { src: "/Images/App dpm 11.jpg", title: "Brand-Centric Designs", description: "Align your app's design with your brand identity for a cohesive user experience." },
    { src: "/Images/App dpm 13.jpg", title: "Structured UI/UX Design", description: "Align your app's design with your with structured layout for a cohesive user experience." }
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
      <Grid container spacing={2} className="portfolio-item" data-aos="fade-right">
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

export default AppdesignCard;
