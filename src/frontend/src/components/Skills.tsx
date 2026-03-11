import { memo, useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Programming",
    color: "#00d4ff",
    comment: "// Programming",
    skills: [
      { icon: "⚡", name: "C", percent: 85 },
      { icon: "☕", name: "Java", percent: 75 },
      { icon: "🐍", name: "Python", percent: 60 },
    ],
  },
  {
    category: "Core Computer Science",
    color: "#a855f7",
    comment: "// Core Computer Science",
    skills: [
      { icon: "🌲", name: "Data Structures", percent: 80 },
      { icon: "🌐", name: "Computer Networks", percent: 75 },
      { icon: "🗄️", name: "DBMS", percent: 72 },
    ],
  },
  {
    category: "Tools & Technologies",
    color: "#00d4ff",
    comment: "// Tools & Technologies",
    skills: [
      { icon: "🤖", name: "Arduino", percent: 70 },
      { icon: "📐", name: "AutoCAD", percent: 65 },
    ],
  },
  {
    category: "Productivity",
    color: "#a855f7",
    comment: "// Productivity",
    skills: [
      { icon: "📝", name: "MS Word", percent: 90 },
      { icon: "📊", name: "Excel", percent: 85 },
      { icon: "📋", name: "PowerPoint", percent: 88 },
    ],
  },
  {
    category: "Soft Skills",
    color: "#00d4ff",
    comment: "// Soft Skills",
    skills: [
      { icon: "🧠", name: "Problem Solving", percent: 90 },
      { icon: "💬", name: "Communication", percent: 85 },
      { icon: "⏱️", name: "Time Management", percent: 82 },
    ],
  },
];

function SkillBar({
  icon,
  name,
  percent,
  color,
  animate,
}: {
  icon: string;
  name: string;
  percent: number;
  color: string;
  animate: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{icon}</span>
          <span className="text-sm font-medium text-foreground/90">{name}</span>
        </div>
        <span className="text-xs font-mono font-bold" style={{ color }}>
          {percent}%
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${percent}%` : "0%",
            background: `linear-gradient(90deg, ${color}, #a855f7)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal");
            for (let i = 0; i < items.length; i++) {
              const el = items[i];
              setTimeout(() => el.classList.add("visible"), i * 120);
            }
            setAnimate(true);
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
      id="skills"
      data-ocid="skills.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#00d4ff] font-mono text-sm mb-2">
            03. WHAT I KNOW
          </p>
          <h2 className="section-heading">
            Skills &amp; <span className="neon-text">Tech Stack</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass rounded-2xl p-6 glass-hover reveal"
            >
              <p
                className="text-xs font-mono mb-3"
                style={{ color: group.color }}
              >
                {group.comment}
              </p>
              <h3
                className="font-display font-bold text-base mb-5"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  percent={skill.percent}
                  color={group.color}
                  animate={animate}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
