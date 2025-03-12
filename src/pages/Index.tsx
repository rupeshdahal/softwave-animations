
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const Index = () => {
  useEffect(() => {
    document.title = "BeginnerSoft - Innovating Simplicity, Empowering Growth";
    
    // Initialize scroll animations
    const animateScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('opacity-100');
          element.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    // Run once on load
    animateScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed z-50 top-6 right-6">
        <ThemeSwitch />
      </div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
