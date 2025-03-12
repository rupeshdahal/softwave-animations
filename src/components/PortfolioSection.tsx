
import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  delay: number;
}

const PortfolioItem = ({ title, category, image, delay }: PortfolioItemProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-gray-900/60 group-hover:from-soft-purple/40 group-hover:to-soft-dark-purple/60 transition-all duration-500"
        ></div>
        <div 
          className="w-full h-full bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="block text-sm font-medium text-gray-200 mb-2">{category}</span>
        <h3 className="text-xl font-bold flex justify-between items-center">
          {title}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ExternalLink size={18} />
          </span>
        </h3>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
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

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      delay: 200
    },
    {
      title: "Healthcare Management System",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      delay: 300
    },
    {
      title: "Travel Booking App",
      category: "Mobile Application",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
      delay: 400
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      delay: 500
    },
    {
      title: "Property Management System",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      delay: 600
    },
    {
      title: "Food Delivery Service",
      category: "Web & Mobile",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
      delay: 700
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Explore some of our recent projects that showcase our expertise in creating
            innovative digital solutions across various industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
