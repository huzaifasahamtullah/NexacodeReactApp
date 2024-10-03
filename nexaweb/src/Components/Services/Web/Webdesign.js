import React from "react";
import WebDesignCard from "./WebDesignCard";
import './Webdesign.css'; // Ensure to import your CSS file

const Webdesign = () => {
    return (
        <div className="portfolio-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="animated-text">Web Design Services</h1>
                    <p>Explore our innovative web design and development solutions.</p>
                </div>
                <WebDesignCard />
            </section>
        </div>
    );
};

export default Webdesign;
