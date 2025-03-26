
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">404</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up">
        The page you're looking for doesn't exist
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:opacity-90 hover:scale-105 animate-fade-up"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
