
import React, { useEffect } from "react";
import { Code, Globe, Search, Smartphone, Palette, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md hover:shadow-soft-purple/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 border border-transparent hover:border-soft-purple/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-soft-purple/10 group-hover:bg-soft-purple/20 rounded-lg flex items-center justify-center mb-6 text-soft-purple transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-soft-purple transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <Button variant="ghost" className="p-0 hover:text-soft-purple hover:bg-transparent">
        Learn more →
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from enterprise applications to specialized tools.",
      delay: 200
    },
    {
      icon: <Globe size={32} />,
      title: "Web Solutions",
      description: "Responsive website development, e-commerce platforms, and web applications with modern technologies.",
      delay: 300
    },
    {
      icon: <Search size={32} />,
      title: "IT Consultancy",
      description: "Strategic advice on technology implementation, digital transformation, and IT infrastructure optimization.",
      delay: 400
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Applications",
      description: "Intuitive and feature-rich mobile apps for iOS and Android platforms that engage users and drive results.",
      delay: 500
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience, improves retention, and strengthens your brand.",
      delay: 600
    },
    {
      icon: <Database size={32} />,
      title: "Database Solutions",
      description: "Efficient database design, optimization, and management services to ensure your data is secure and accessible.",
      delay: 700
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            We offer comprehensive software solutions tailored to meet your business objectives,
            combining technical expertise with creative innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
