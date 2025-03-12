
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import { Check } from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "Services - BeginnerSoft";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-soft-purple/10 to-soft-dark-purple/10">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Comprehensive software solutions tailored to meet your business objectives.
          </p>
        </div>
      </section>
      
      <ServicesSection />
      
      {/* How We Work Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Our proven development process ensures transparency, quality, and successful project delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="01" 
              title="Discovery" 
              description="We begin by understanding your business, goals, and requirements through detailed consultations."
              delay={200}
            />
            <ProcessStep 
              number="02" 
              title="Planning" 
              description="Our team develops a comprehensive project plan with clear milestones, timelines, and deliverables."
              delay={300}
            />
            <ProcessStep 
              number="03" 
              title="Development" 
              description="We build your solution using agile methodologies, with regular updates and iterative improvements."
              delay={400}
            />
            <ProcessStep 
              number="04" 
              title="Delivery" 
              description="The final product is thoroughly tested, deployed, and supported with ongoing maintenance as needed."
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Service <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Choose the service package that best fits your business needs and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              title="Starter" 
              price="$999" 
              description="Perfect for small businesses looking to establish their digital presence."
              features={["Website Development", "Basic SEO", "Mobile Responsive", "1 Month Support"]}
              recommended={false}
              delay={200}
            />
            <PricingCard 
              title="Business" 
              price="$2,499" 
              description="Comprehensive solution for growing businesses with advanced functionality."
              features={["Custom Web Application", "E-commerce Integration", "CMS Implementation", "UX/UI Design", "3 Months Support"]}
              recommended={true}
              delay={300}
            />
            <PricingCard 
              title="Enterprise" 
              price="Custom" 
              description="Tailored solutions for large organizations with complex requirements."
              features={["Full-Scale Software Development", "System Integration", "Advanced Security", "Dedicated Project Manager", "12 Months Support"]}
              recommended={false}
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

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ number, title, description, delay }: ProcessStepProps) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold text-soft-purple/20 absolute top-6 right-6">{number}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
  delay: number;
}

const PricingCard = ({ title, price, description, features, recommended, delay }: PricingCardProps) => {
  return (
    <div 
      className={`p-8 rounded-xl shadow-sm border relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${
        recommended ? 'bg-gradient-to-b from-soft-purple/5 to-soft-dark-purple/5 border-soft-purple' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-soft-purple text-white px-4 py-1 rounded-full text-sm font-medium">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-500">/project</span>}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-soft-purple mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-2 rounded-md font-medium transition-colors ${
          recommended ? 'bg-soft-purple hover:bg-soft-dark-purple text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default Services;
