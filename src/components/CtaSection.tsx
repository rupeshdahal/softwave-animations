
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-soft-purple to-soft-dark-purple rounded-2xl p-8 md:p-12 shadow-xl shadow-soft-purple/20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how BeginnerSoft can help you achieve your business goals with our tailored software solutions.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-soft-purple">
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
