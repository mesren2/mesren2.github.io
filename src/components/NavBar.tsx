
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 backdrop-blur-md", 
        scrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a 
          href="#top" 
          className="text-xl font-semibold tracking-tight transition-colors hover:text-accent"
        >
          mesren2
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</a>
          <a href="https://github.com/mesren2" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent transition-colors">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
