import { Code2, Download, GraduationCap, Heart, Layers } from "lucide-react";
import { memo, useEffect, useRef } from "react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    color: "#00d4ff",
    items: ["B.Tech CSE Networks – KITSW", "CGPA: 8.97 | 2024–2028"],
  },
  {
    icon: Code2,
    title: "Technical Skills",
    color: "#a855f7",
    items: ["C, Java, Python", "Data Structures, DBMS", "AutoCAD, MS Office"],
  },
  {
    icon: Layers,
    title: "Projects",
    color: "#00d4ff",
    items: [
      "Payroll Management System",
      "Automatic Street Light System",
      "Car Rental Reservation System",
    ],
  },
  {
    icon: Heart,
    title: "Interests",
    color: "#a855f7",
    items: ["Software Development", "Computer Networks", "Database Systems"],
  },
];

function ResumeSection() {
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
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      data-ocid="resume.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#a855f7] font-mono text-sm mb-2">06. MY RESUME</p>
          <h2 className="section-heading">
            Download <span className="neon-text">Resume</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        {/* Download button */}
        <div className="flex justify-center mb-16 reveal">
          <button
            type="button"
            data-ocid="resume.primary_button"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-lg transition-all duration-300 hover:scale-105 animate-neon-pulse"
            style={{
              background: "linear-gradient(135deg, #00d4ff20, #a855f720)",
              border: "2px solid #00d4ff",
              color: "#00d4ff",
              boxShadow: "0 0 20px rgba(0,212,255,0.3)",
            }}
          >
            <Download className="w-5 h-5" />
            Download My Resume
          </button>
        </div>

        {/* 4 Highlight boxes in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 glass-hover reveal"
                style={{ borderLeft: `3px solid ${item.color}` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3
                    className="font-display font-bold text-lg"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((text) => (
                    <li
                      key={text}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: item.color }}
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(ResumeSection);
