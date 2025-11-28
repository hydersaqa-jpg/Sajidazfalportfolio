import { Film, Palette, Zap, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Expert in non-linear editing, pacing, and storytelling across all major platforms",
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and grading to create the perfect mood and atmosphere",
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Dynamic animations, lower thirds, and visual effects that enhance the narrative",
    },
    {
      icon: Layers,
      title: "Post-Production",
      description: "Complete post-production workflow from raw footage to final delivery",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-primary">Do</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video editing services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
