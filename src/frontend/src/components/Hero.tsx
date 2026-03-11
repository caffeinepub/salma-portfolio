import { ChevronDown } from "lucide-react";
import { memo, useEffect, useState } from "react";

const techBadges = [
  { label: "C", style: "top-[15%] left-[8%]", delay: "" },
  {
    label: "Java",
    style: "top-[25%] right-[10%]",
    delay: "animate-float-delay-1",
  },
  {
    label: "Python",
    style: "top-[60%] left-[5%]",
    delay: "animate-float-delay-2",
  },
  {
    label: "Arduino",
    style: "bottom-[30%] right-[8%]",
    delay: "animate-float-delay-3",
  },
  {
    label: "Git",
    style: "top-[70%] right-[15%]",
    delay: "animate-float-delay-4",
  },
];

const rotatingTitles = [
  "Tech Enthusiast",
  "B.Tech T&T Student",
  "Problem Solver",
  "Future Software Developer",
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        setVisible(true);
      }, 400);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
      />

      {/* Floating tech badges */}
      {techBadges.map((badge) => (
        <div
          key={badge.label}
          className={`absolute hidden lg:flex ${badge.style} animate-float ${badge.delay}`}
        >
          <span className="tech-badge text-sm px-3 py-1.5 font-display">
            {badge.label}
          </span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 tech-badge mb-6 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            Available for Internships
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="neon-text block sm:inline">Salma Tabassum</span>
          </h1>

          {/* Rotating subtitle */}
          <div className="h-10 flex items-center justify-center lg:justify-start mb-4">
            <p
              className="text-base sm:text-lg font-semibold font-mono transition-all duration-400"
              style={{
                color: titleIndex % 2 === 0 ? "#00d4ff" : "#a855f7",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {rotatingTitles[titleIndex]}
            </p>
          </div>

          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Passionate B.Tech Tools &amp; Technologies student focused on
            building software solutions, learning modern technologies, and
            contributing to innovative projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#projects")}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
                color: "#0a0a0f",
              }}
            >
              View Projects
            </button>

            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("#resume")}
              className="px-6 py-3 rounded-lg font-semibold text-sm glass neon-border hover:shadow-neon transition-all duration-300 hover:scale-105 text-[#00d4ff]"
            >
              Download Resume
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 rounded-lg font-semibold text-sm glass border border-[#a855f7]/40 text-[#a855f7] hover:shadow-neon-purple transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile photo with floating CGPA & T&T badges */}
        <div className="flex-shrink-0 flex items-center justify-center relative">
          {/* Floating CGPA badge */}
          <div
            className="absolute z-20 animate-float"
            style={{ top: "-10px", right: "-24px" }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono"
              style={{
                background: "rgba(0,212,255,0.15)",
                border: "1px solid rgba(0,212,255,0.5)",
                color: "#00d4ff",
                boxShadow: "0 0 12px rgba(0,212,255,0.3)",
              }}
            >
              🎓 8.97 CGPA
            </span>
          </div>

          {/* Floating B.Tech T&T badge */}
          <div
            className="absolute z-20 animate-float-delay-2"
            style={{ bottom: "-10px", left: "-28px" }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.5)",
                color: "#a855f7",
                boxShadow: "0 0 12px rgba(168,85,247,0.3)",
              }}
            >
              ⚙️ B.Tech T&amp;T
            </span>
          </div>

          <div
            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full"
            style={{
              boxShadow:
                "0 0 0 3px #00d4ff, 0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)",
            }}
          >
            <img
              src="/assets/uploads/image-1.png"
              alt="Salma Tabassum"
              className="w-full h-full rounded-full object-cover object-center"
              style={{ border: "3px solid #0a0a0f" }}
            />
            {/* Animated orbit ring */}
            <div
              className="absolute inset-[-10px] rounded-full"
              style={{
                border: "1px dashed rgba(0,212,255,0.3)",
                animation: "spin 12s linear infinite",
              }}
            />
            <div
              className="absolute inset-[-20px] rounded-full"
              style={{
                border: "1px dashed rgba(168,85,247,0.2)",
                animation: "spin 18s linear infinite reverse",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <button
          type="button"
          onClick={() => scrollTo("#about")}
          className="animate-bounce-slow text-[#00d4ff] hover:opacity-70 transition-opacity"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default memo(Hero);
