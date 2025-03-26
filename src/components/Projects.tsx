
import { useEffect } from "react";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "BendersMC",
    description: "Minecraft server development and custom plugins",
    tags: ["Java", "Minecraft", "Game Development"],
    github: null, // No GitHub repository
  },
  {
    title: "Team Soulfire",
    description: "Collaborative game development projects",
    tags: ["Java", "Minecraft", "Game Development"],
    github: "https://github.com/TeamSoulfire",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mesren2/portfolio",
  },
  {
    title: "Starborne",
    description: "Sci-Fi space exploration game",
    tags: ["Unity", "C#", "Sci-Fi", "Game Design"],
    github: "https://github.com/mesren2/starborne",
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.github !== undefined && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`text-muted-foreground hover:text-accent transition-colors ${project.github === null ? 'pointer-events-none line-through opacity-50' : ''}`}
                      aria-label={project.github === null ? `${project.title} (No GitHub repository)` : `${project.title} GitHub repository`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
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
