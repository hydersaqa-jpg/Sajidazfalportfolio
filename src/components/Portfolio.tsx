import { useState } from "react";
import { Play, X } from "lucide-react";

const Portfolio = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "Corporate Brand Film",
      category: "Commercial",
      description: "A cinematic brand story for a tech startup",
      video: "https://youtu.be/IY0rHtpD8QQ?si=s9-2cSYy8v5OlP4O",
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80", 
    },
    {
      title: "Music Video Production",
      category: "Music",
      description: "High-energy music video with dynamic transitions",
      video: "https://youtu.be/example-video-link", 
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Documentary Series",
      category: "Documentary",
      description: "5-part documentary on modern innovation",
      thumbnail: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Viral content creation for major brands",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "Wedding Cinematic",
      category: "Wedding",
      description: "Emotional storytelling for special moments",
      video: "https://youtu.be/another-example-link", // Example link
      thumbnail: "https://images.unsplash.com/photo-1519741497674-6114d186b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Product Showcase",
      category: "Commercial",
      description: "Premium product visualization and animation",
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const getEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("/").pop()?.split("?")[0] || "";
    } else if (url.includes("watch?v=")) {
      videoId = new URL(url).searchParams.get("v") || "";
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  };
/*  */
  const handleProjectClick = (videoUrl?: string) => {
    if (videoUrl) setPlayingVideo(videoUrl);
  };

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

            return (
              <div
                key={index}
                onClick={() => handleProjectClick(project.video)}
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
                  {/* Overlay with Play button, appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>
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
              </div>
            );
          })}
        </div>
      </div>

      {playingVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking on the video
          >
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform"
            >
              <X size={24} />
            </button>
            <iframe
              src={getEmbedUrl(playingVideo)}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
