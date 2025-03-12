
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    document.title = "Portfolio - BeginnerSoft";
  }, []);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "software", name: "Software" },
    { id: "ui", name: "UI/UX Design" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-soft-purple/10 to-soft-dark-purple/10">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Explore our recent projects that showcase our expertise across various industries.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 animate-fade-in animate-delay-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category.id 
                    ? 'bg-soft-purple text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <PortfolioSection />
      
      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Dive deeper into some of our most impactful projects.
            </p>
          </div>
          
          <div className="space-y-20">
            <CaseStudy 
              title="E-commerce Transformation"
              client="Nepal Handicrafts"
              image="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              challenge="The client needed to transform their physical store into a global e-commerce platform during the pandemic."
              solution="We developed a custom e-commerce solution with international shipping, payment gateways, and inventory management."
              results="Sales increased by 200% in the first year, with customers from 15 countries."
              isReversed={false}
              delay={200}
            />
            <CaseStudy 
              title="Healthcare Management System"
              client="Banepa Medical Center"
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              challenge="The medical center was struggling with paper records and inefficient appointment scheduling."
              solution="We implemented a comprehensive digital health records system with online appointment booking and telemedicine capabilities."
              results="Reduced administrative work by 40% and improved patient satisfaction scores by 35%."
              isReversed={true}
              delay={300}
            />
            <CaseStudy 
              title="Travel Booking Platform"
              client="Nepal Adventures"
              image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
              challenge="The travel agency needed a modern booking system to compete with international platforms."
              solution="We created a comprehensive travel booking platform with tour packages, hotel reservations, and adventure activities."
              results="Bookings increased by 150% and operational efficiency improved by 60%."
              isReversed={false}
              delay={400}
            />
          </div>
        </div>
      </section>
      
      <CtaSection />
      <Footer />
    </div>
  );
};

interface CaseStudyProps {
  title: string;
  client: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  isReversed: boolean;
  delay: number;
}

const CaseStudy = ({ title, client, image, challenge, solution, results, isReversed, delay }: CaseStudyProps) => {
  return (
    <div 
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full lg:w-1/2">
        <div className="rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-soft-purple/10 text-soft-purple font-medium text-sm">
          {client}
        </div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
            <p className="text-gray-600 dark:text-gray-300">{challenge}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
            <p className="text-gray-600 dark:text-gray-300">{solution}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">The Results</h4>
            <p className="text-gray-600 dark:text-gray-300">{results}</p>
          </div>
        </div>
        <button className="text-soft-purple font-medium hover:text-soft-dark-purple transition-colors">
          View Full Case Study →
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
