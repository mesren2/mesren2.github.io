
import { useEffect } from "react";
import { Github, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string | null;
  inDevelopment?: boolean;
  about?: string | null;
};

const projects: Project[] = [
  {
    title: "BendersMC",
    description: "Minecraft server development and custom plugins",
    tags: ["Java", "Minecraft", "Game Development"],
    github: null,
    about: "https://discord.gg/bendersmc",
  },
  {
    title: "Team Soulfire",
    description: "Collaborative game development projects",
    tags: ["Java", "Minecraft", "Game Development"],
    github: null,
    about: null,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mesren2/mesren2.github.io",
    about: null,
  },
  {
    title: "Starborne",
    description: "Sci-Fi space exploration game",
    tags: ["Unity", "C#", "Sci-Fi", "Game Design"],
    github: "https://github.com/mesren2/starborne",
    inDevelopment: true,
    about: "/starborne",
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
    <section id="projects" className="py-20 px-6 relative bg-gradient-to-b from-background via-background/95 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 
                        flex flex-col h-full reveal ${`reveal-delay-${index % 3 + 1}`}`}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    {/* In development tag - bottom left */}
                    <div>
                      {project.inDevelopment && (
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                          In development
                        </Badge>
                      )}
                    </div>
                    
                    {/* Buttons - bottom right */}
                    <div className="flex items-center gap-2">
                      {/* About button */}
                      {project.about ? (
                        project.title === "Starborne" ? (
                          <Link to={project.about}>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="rounded-full"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </Link>
                        ) : (
                          <a 
                            href={project.about} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="rounded-full"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </a>
                        )
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="rounded-full opacity-50 pointer-events-none"
                          disabled
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      )}
                      
                      {/* GitHub button */}
                      {project.github && project.title !== "Starborne" ? (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="rounded-full"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="rounded-full opacity-50 pointer-events-none"
                          disabled
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
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
