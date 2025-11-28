import { Play } from "lucide-react";
import { Image } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Corporate Brand Film",
      category: "Commercial",
      description: "A cinematic brand story for a tech startup",
      video: "https://youtu.be/IY0rHtpD8QQ?si=s9-2cSYy8v5OlP4O",
      thumbnail: "\src\assets\image1 .jpg", 
    },
    {
      title: "Music Video Production",
      category: "Music",
      description: "High-energy music video with dynamic transitions",
      video: "https://youtu.be/example-video-link", // Example link
      thumbnail: "/path-to-music-thumbnail.jpg", // Example path
    },
    {
      title: "Documentary Series",
      category: "Documentary",
      description: "5-part documentary on modern innovation",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Viral content creation for major brands",
    },
    {
      title: "Wedding Cinematic",
      category: "Wedding",
      description: "Emotional storytelling for special moments",
      video: "https://youtu.be/another-example-link", // Example link
      thumbnail: "/path-to-wedding-thumbnail.jpg", // Example path
    },
    {
      title: "Product Showcase",
      category: "Commercial",
      description: "Premium product visualization and animation",
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and creative productions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const hasVideo = !!project.video;
            const Wrapper = hasVideo ? "a" : "div";
            const wrapperProps = hasVideo
              ? {
                  href: project.video,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className={`group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up hover:scale-105 ${
                  hasVideo ? "cursor-pointer" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
