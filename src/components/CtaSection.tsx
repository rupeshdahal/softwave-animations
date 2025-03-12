
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cta-animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 backdrop-blur-sm"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div 
          ref={ctaRef}
          className="max-w-4xl mx-auto bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-800 rounded-2xl p-8 md:p-12 shadow-xl shadow-teal-500/20 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 backdrop-blur-none">Ready to Transform Your Digital Presence?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how BeginnerSoft can help you achieve your business goals with our tailored software solutions.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-teal-600 dark:text-teal-700 dark:hover:text-teal-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
