
import { useEffect } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

const projects: Project[] = [
  {
    title: "BendersMC",
    description: "Minecraft server development and custom plugins",
    tags: ["Java", "Minecraft", "Game Development"],
  },
  {
    title: "Team Soulfire",
    description: "Collaborative game development projects",
    tags: ["Unity", "C#", "Game Design"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const Projects = () => {
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 
                        flex flex-col h-full reveal ${`reveal-delay-${index % 3 + 1}`}`}
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
