
import React from "react";
import { Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 opacity-0 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-soft-purple/10 text-soft-purple font-medium text-sm">
              <Code size={16} className="mr-2" />
              <span>Crafting Digital Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Innovating <span className="text-gradient">Simplicity</span>,<br />
              Empowering <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 md:pr-10 animate-delay-100">
              BeginnerSoft transforms ideas into impactful software solutions. Based in Banepa, 
              Nepal, we blend technical expertise with creative innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-delay-200">
              <Button size="lg" className="rounded-md text-white bg-soft-purple hover:bg-soft-dark-purple">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-md">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="w-full lg:w-1/2 relative opacity-0 animate-fade-in animate-delay-300">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-soft-purple/20 to-soft-dark-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Main logo element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-tr from-soft-purple to-soft-dark-purple rounded-2xl flex items-center justify-center shadow-lg shadow-soft-purple/20 animate-logo-spin">
                  <div className="w-24 h-24 bg-white dark:bg-soft-black rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">BS</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-0 p-3 bg-white dark:bg-soft-black rounded-lg shadow-md animate-bounce">
                <Code size={24} className="text-soft-purple" />
              </div>
              <div className="absolute bottom-10 right-0 p-3 bg-white dark:bg-soft-black rounded-lg shadow-md animate-bounce [animation-delay:1s]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-soft-purple to-soft-dark-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
