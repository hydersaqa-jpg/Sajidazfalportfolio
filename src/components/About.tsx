import { Sparkles, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Sparkles, label: "Projects Completed", value: "150+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "80+" },
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate video editor and content creator with over 5 years of experience 
                transforming raw footage into compelling visual stories. My expertise spans across 
                commercial ads, social media content, documentaries, and cinematic productions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a keen eye for detail and a deep understanding of storytelling, I specialize in 
                color grading, motion graphics, and creating seamless transitions that captivate audiences.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Final Cut Pro"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-secondary rounded-full text-sm border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-fade-in-up">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
