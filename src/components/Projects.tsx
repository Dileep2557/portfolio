import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies. Features clean design, smooth animations, and optimized performance.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A Python-based task management application with a clean interface for organizing daily activities and tracking progress.",
      tech: ["Python", "HTML", "CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard that displays current conditions and forecasts. Built with focus on user experience and data visualization.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      title: "Data Analysis Tool",
      description: "Python script for analyzing and visualizing data sets. Demonstrates proficiency in data handling and creating meaningful insights.",
      tech: ["Python", "Data Analysis"],
      link: null,
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border bg-card"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="flex gap-3 mt-auto">
                  {project.link && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;