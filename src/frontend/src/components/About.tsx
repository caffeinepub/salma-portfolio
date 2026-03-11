import {
  Code2,
  Database,
  GitBranch,
  Lightbulb,
  MapPin,
  Network,
  Rocket,
  User,
} from "lucide-react";
import { memo, useEffect, useRef } from "react";

const interests = [
  { icon: Code2, label: "Software Development" },
  { icon: Network, label: "Computer Networks" },
  { icon: Database, label: "Database Systems" },
  { icon: GitBranch, label: "Data Structures & Algorithms" },
];

const stats = [
  { value: "8.97", label: "CGPA", color: "#00d4ff" },
  { value: "3+", label: "Projects", color: "#a855f7" },
  { value: "2nd", label: "Year", color: "#00d4ff" },
  { value: "pin", label: "Warangal", color: "#a855f7", isIcon: true },
];

const currentStatus = [
  "Open to internship opportunities",
  "Learning new technologies daily",
  "Building real-world projects",
];

const identityTags = [
  { label: "Tech Enthusiast", icon: Lightbulb, color: "#00d4ff" },
  { label: "B.Tech T&T Student", icon: User, color: "#a855f7" },
  { label: "Problem Solver", icon: Code2, color: "#a855f7" },
  { label: "Future Software Developer", icon: Rocket, color: "#00d4ff" },
];

function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal");
            for (let i = 0; i < items.length; i++) {
              const el = items[i];
              setTimeout(() => el.classList.add("visible"), i * 100);
            }
          }
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00d4ff] font-mono text-sm mb-2">01. WHO AM I</p>
          <h2 className="section-heading">
            About <span className="neon-text">Me</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 reveal">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-4 text-center"
              style={{ border: `1px solid ${stat.color}30` }}
            >
              <div
                className="text-2xl sm:text-3xl font-bold font-display mb-1"
                style={{ color: stat.color }}
              >
                {stat.isIcon ? (
                  <span className="flex items-center justify-center gap-1">
                    <MapPin
                      className="w-6 h-6 inline"
                      style={{ color: stat.color }}
                    />
                  </span>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content left */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 reveal">
              <p className="text-foreground/80 leading-relaxed">
                I am a{" "}
                <span className="text-[#00d4ff] font-semibold">
                  B.Tech Tools &amp; Technologies
                </span>{" "}
                student at{" "}
                <span className="text-[#a855f7] font-semibold">
                  Kakatiya Institute of Technology &amp; Science, Warangal
                </span>
                . I enjoy solving problems, developing applications, and
                continuously improving my programming skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 reveal">
              <h3 className="font-display font-semibold text-lg mb-4 text-[#00d4ff]">
                Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00d4ff]/30 transition-all"
                  >
                    <Icon className="w-4 h-4 text-[#a855f7] flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Identity tags 2x2 */}
            <div className="glass rounded-2xl p-6 reveal">
              <h3 className="font-display font-semibold text-lg mb-4 text-[#a855f7]">
                Who I Am
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {identityTags.map(({ label, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 p-3 rounded-xl transition-all hover:scale-105"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                    <span
                      className="text-xs font-semibold font-mono"
                      style={{ color }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content right */}
          <div className="space-y-6">
            {/* Current status */}
            <div className="glass rounded-2xl p-6 reveal border border-[#00d4ff]/20">
              <p className="text-[#00d4ff] font-mono text-xs mb-4">
                {"// current_status"}
              </p>
              <div className="space-y-3">
                {currentStatus.map((status) => (
                  <div
                    key={status}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      background: "rgba(0,212,255,0.05)",
                      border: "1px solid rgba(0,212,255,0.15)",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: "#00d4ff",
                        boxShadow: "0 0 6px #00d4ff",
                        animation: "pulse 1.5s ease-in-out infinite",
                      }}
                    />
                    <span className="text-sm text-foreground/80">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
