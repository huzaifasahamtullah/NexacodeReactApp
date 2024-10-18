import React from "react";
import './Webdesign.css'; // Ensure to import your CSS file

const Webdesign = () => {
    return (
        <div className="portfolio-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="animated-text">Web Design and Development Blog</h1>
                    <p>Explore insights, trends, and tips on web design and development.</p>
                </div>

                {/* Single Image for Blog */}
                <div className="blog-image-container">
                    <img 
                        src="/Images/BlogWebDesign.jpg" 
                        alt="Web Design and Development Blog" 
                        className="blog-image" 
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} 
                    />
                </div>

                {/* Blog Content */}
                <div className="blog-content">
                    <h2>Transforming the Digital Landscape with Web Design & Development</h2>
                    <p>
                        Web design and development have become the cornerstone of every business's online presence.
                        Whether you're looking to enhance user experience or ensure responsive design across devices, 
                        modern web design trends are essential for engaging visitors and building a professional platform.
                    </p>
                    <p>
                        At NexaCode Solution, we specialize in crafting custom websites that not only look great but 
                        are optimized for SEO and performance. Our team combines the latest technologies with a deep 
                        understanding of user behavior to build websites that deliver results.
                    </p>
                    <p>
                        From responsive design to SEO optimization, our web development services ensure that your business 
                        stays ahead in the digital world. Whether you need e-commerce development, UI/UX design, or web hosting, 
                        our solutions cater to your specific needs.
                    </p>
                    <p>
                        Ready to transform your website? Contact NexaCode Solution for innovative web design and development services.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Webdesign;
