import { Award, BookOpen, GraduationCap } from "lucide-react";
import { memo, useEffect, useRef } from "react";

const educationEntries = [
  {
    id: 1,
    degree: "B.Tech – Tools & Technologies",
    institution: "Kakatiya Institute of Technology & Science (KITSW)",
    period: "2024 – 2028",
    cgpa: "8.97",
    status: "Currently Enrolled",
    icon: GraduationCap,
    color: "#00d4ff",
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution:
      "Telangana Minority Residential Educational Institution Society",
    period: "2022 – 2024",
    cgpa: "9.2",
    status: "Completed",
    icon: BookOpen,
    color: "#a855f7",
  },
  {
    id: 3,
    degree: "SSC (Secondary School Certificate)",
    institution:
      "Telangana Minority Residential Educational Institution Society",
    period: "2022",
    cgpa: "9.7",
    status: "Completed",
    icon: Award,
    color: "#00d4ff",
  },
];

function Education() {
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
      id="education"
      data-ocid="education.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#a855f7] font-mono text-sm mb-2">
            02. MY JOURNEY
          </p>
          <h2 className="section-heading">
            <span className="neon-text">Education</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        <div className="space-y-5">
          {educationEntries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                data-ocid={`education.item.${idx + 1}`}
                className="glass rounded-2xl p-6 glass-hover reveal"
                style={{ borderLeft: `3px solid ${item.color}` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3
                        className="font-display font-bold text-lg leading-tight"
                        style={{ color: item.color }}
                      >
                        {item.degree}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.institution}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold"
                        style={{
                          background: `${item.color}20`,
                          color: item.color,
                          border: `1px solid ${item.color}40`,
                        }}
                      >
                        CGPA: {item.cgpa}
                      </span>
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.6)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {item.period}
                      </span>
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.5)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Education);
