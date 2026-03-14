import { ExternalLink } from "lucide-react";
import { memo, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    icon: "🚑",
    title: "Traffic AI",
    subtitle: "AI Powered Emergency Traffic Control System",
    badge: "🏆 1st Prize – IdeaSprint 24-Hour Hackathon, KITSW Warangal",
    description:
      "Built a real-time dashboard for ambulance routing and traffic signal pre-emption. Implemented route visualization using Leaflet and OpenStreetMap API.",
    features: [
      "Real-time ambulance routing dashboard",
      "Traffic signal pre-emption system",
      "Route visualization with Leaflet & OpenStreetMap",
    ],
    tech: ["React", "TypeScript", "Leaflet", "OpenStreetMap"],
    color: "#f97316",
  },
  {
    id: 2,
    icon: "💼",
    title: "Payroll Management System",
    subtitle: "in C",
    badge: "",
    description:
      "Manages employee records and automates salary calculation with a clean data structure approach.",
    features: [
      "Employee data management",
      "Automated salary calculations",
      "Pay slip generation",
    ],
    tech: ["C", "Data Structures"],
    color: "#00d4ff",
  },
  {
    id: 3,
    icon: "💡",
    title: "Automatic Street Light System",
    subtitle: "",
    badge: "",
    description:
      "Smart street light using Arduino UNO and LDR sensor for automatic ON/OFF control based on ambient light.",
    features: [
      "LDR light sensing",
      "Automatic switching",
      "Energy efficient design",
    ],
    tech: ["Arduino", "Embedded Systems", "Sensors"],
    color: "#a855f7",
  },
  {
    id: 4,
    icon: "🚗",
    title: "Car Rental Reservation System",
    subtitle: "",
    badge: "",
    description:
      "Java application using OOP principles for comprehensive car rental and reservation management.",
    features: [
      "Car booking management",
      "Reservation tracking",
      "OOP-based architecture",
    ],
    tech: ["Java", "OOP"],
    color: "#00d4ff",
  },
];

function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal");
            for (let i = 0; i < items.length; i++) {
              const el = items[i];
              setTimeout(() => el.classList.add("visible"), i * 150);
            }
          }
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      data-ocid="projects.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#a855f7] font-mono text-sm mb-2">
            04. WHAT I&apos;VE BUILT
          </p>
          <h2 className="section-heading">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-ocid={`projects.item.${idx + 1}`}
              className="glass rounded-2xl overflow-hidden glass-hover reveal group"
            >
              <div
                className="h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${project.color}80, transparent)`,
                }}
              />

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h3
                        className="font-display font-bold text-lg leading-tight"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className="text-muted-foreground text-sm">
                          {project.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                  {project.badge && (
                    <div
                      className="mt-2 px-3 py-1.5 rounded-lg text-xs font-semibold inline-block"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}50`,
                        color: project.color,
                      }}
                    >
                      {project.badge}
                    </div>
                  )}
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-xs text-foreground/60"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: project.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-badge"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}40`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-4 flex justify-end">
                <ExternalLink
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: project.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
