
import { useEffect, useRef } from "react";

const Hero = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight reveal">
            mesren2
          </h1>
          <div ref={aboutRef} className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground reveal reveal-delay-1">
              Game developer, computer scientist, and software engineer
            </p>
            <p className="text-lg text-muted-foreground reveal reveal-delay-2">
              BendersMC & Team Soulfire developer and contributor
            </p>
          </div>
          <div className="pt-8 reveal reveal-delay-3">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:opacity-90 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
