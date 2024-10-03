import React from "react";
import './Appdesign.css'; // Ensure to import your CSS file
import AppdesignCard from "./AppdesignCard";

const Appdesign = () => {
    return (
        <div className="portfolio-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="animated-text">Web Design Services</h1>
                    <p>Explore our innovative web design and development solutions.</p>
                </div>
                <AppdesignCard />
            </section>
        </div>
    );
};

export default Appdesign;
