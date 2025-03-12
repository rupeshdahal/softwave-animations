
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found - BeginnerSoft";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container px-4 py-16 text-center">
        <div className="mx-auto w-40 h-40 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-soft-purple/20 to-soft-dark-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="w-40 h-40 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center z-10 relative shadow-lg">
            <div className="text-6xl font-bold text-gradient">404</div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Page Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto animate-fade-in animate-delay-100">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="animate-fade-in animate-delay-200">
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
