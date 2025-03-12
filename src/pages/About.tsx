
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";

const About = () => {
  useEffect(() => {
    document.title = "About Us - BeginnerSoft";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-soft-purple/10 to-soft-dark-purple/10">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About <span className="text-gradient">BeginnerSoft</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Get to know our company, our mission, and the team behind the innovation.
          </p>
        </div>
      </section>
      
      <AboutSection />
      
      {/* Timeline Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10 space-y-12">
              <TimelineItem 
                year="2018" 
                title="Foundation" 
                description="BeginnerSoft was founded in Banepa with a vision to transform Nepal's digital landscape."
                isLeft={true}
                delay={200}
              />
              <TimelineItem 
                year="2019" 
                title="First Major Project" 
                description="Completed our first enterprise application for a leading company in Kathmandu."
                isLeft={false}
                delay={300}
              />
              <TimelineItem 
                year="2020" 
                title="Team Expansion" 
                description="Doubled our team size and moved to a larger office to accommodate growth."
                isLeft={true}
                delay={400}
              />
              <TimelineItem 
                year="2021" 
                title="International Clients" 
                description="Expanded our client base to include international businesses from Asia and Europe."
                isLeft={false}
                delay={500}
              />
              <TimelineItem 
                year="2022" 
                title="Innovation Award" 
                description="Received recognition for innovation in software development at a national tech conference."
                isLeft={true}
                delay={600}
              />
              <TimelineItem 
                year="2023" 
                title="Current Chapter" 
                description="Continuing to grow and innovate, with a focus on AI-driven solutions and digital transformation."
                isLeft={false}
                delay={700}
              />
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
      <Footer />
    </div>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  delay: number;
}

const TimelineItem = ({ year, title, description, isLeft, delay }: TimelineItemProps) => {
  return (
    <div 
      className={`flex items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 order-3'}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-soft-purple to-soft-dark-purple flex items-center justify-center text-white font-bold text-sm z-10 mx-auto flex-shrink-0">
        {year}
      </div>
      
      <div className={`w-1/2 ${isLeft ? 'pl-12 order-3' : 'pr-12 text-right'}`}></div>
    </div>
  );
};

export default About;
