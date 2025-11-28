import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Video editing background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient-shift bg-300%" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
              Video Editor & Content Creator
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            SAJID
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-shift">
              AFZAL
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Crafting cinematic stories through cutting-edge video editing and post-production
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
