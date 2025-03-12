
import React, { useEffect, useRef } from "react";
import { Users, BarChart, Heart } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            About <span className="text-gradient">BeginnerSoft</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Founded in Banepa, Nepal, BeginnerSoft is committed to delivering innovative software solutions
            that help businesses thrive in the digital landscape.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To revolutionize the digital landscape of Nepal and beyond by creating
              software solutions that are accessible, efficient, and transformative,
              positioning BeginnerSoft as a beacon of innovation in the global tech community.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses with cutting-edge software solutions that solve
              complex challenges, drive growth, and foster digital transformation,
              while nurturing local talent and contributing to Nepal's technological advancement.
            </p>
          </div>
        </div>

        {/* Values */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          Our Core Values
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
            <div className="w-16 h-16 bg-soft-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-soft-purple h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold mb-4">Client-Centric</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We place our clients at the heart of everything we do, striving to exceed 
              expectations and build lasting partnerships.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600">
            <div className="w-16 h-16 bg-soft-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart className="text-soft-purple h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold mb-4">Excellence</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We pursue excellence in every line of code, every design decision, and every 
              client interaction, maintaining the highest standards of quality.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700">
            <div className="w-16 h-16 bg-soft-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-soft-purple h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold mb-4">Passion</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We are passionate about technology and its power to transform businesses and lives, 
              driving us to continuously innovate and improve.
            </p>
          </div>
        </div>

        {/* CEO Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-800">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-soft-purple to-soft-dark-purple flex-shrink-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-3xl font-bold text-gradient">
                RD
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Rupesh Dahal</h3>
              <p className="text-soft-purple font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                With a vision to transform Nepal's digital landscape, Rupesh founded BeginnerSoft to create
                innovative solutions that empower businesses. His leadership and technical expertise have
                been instrumental in the company's growth and success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-soft-purple hover:text-soft-dark-purple transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-soft-purple hover:text-soft-dark-purple transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
