import { Skeleton } from "@/components/ui/skeleton";
import {
  BookOpen,
  GitFork,
  MapPin,
  RefreshCw,
  Star,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  location: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
}

const LANG_COLORS: Record<string, string> = {
  C: "#555599",
  Java: "#b07219",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Arduino: "#bd79d1",
  "C++": "#f34b7d",
};

export default function GitHubActivity() {
  const ref = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch("https://api.github.com/users/Mahi-tech-c"),
        fetch(
          "https://api.github.com/users/Mahi-tech-c/repos?sort=updated&per_page=6",
        ),
      ]);
      if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
      const [userData, reposData] = await Promise.all([
        userRes.json(),
        reposRes.json(),
      ]);
      setUser(userData as GitHubUser);
      setRepos(reposData as GitHubRepo[]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load GitHub data",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const langCounts: Record<string, number> = {};
  for (const r of repos) {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  }
  const topLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  return (
    <section
      id="github"
      data-ocid="github.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#00d4ff] font-mono text-sm mb-2">
            05. OPEN SOURCE
          </p>
          <h2 className="section-heading">
            GitHub <span className="neon-text">Activity</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        {loading && (
          <div data-ocid="github.loading_state" className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex gap-4 items-start">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-64" />
                  <div className="flex gap-4 mt-3">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass rounded-2xl p-5">
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div
            data-ocid="github.error_state"
            className="glass rounded-2xl p-8 text-center border border-red-500/30"
          >
            <p className="text-red-400 mb-4">{error}</p>
            <button
              type="button"
              onClick={fetchData}
              className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg glass neon-border text-[#00d4ff] hover:shadow-neon transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>
          </div>
        )}

        {!loading && !error && user && (
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 reveal">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  className="w-20 h-20 rounded-full border-2 border-[#00d4ff]/40"
                  style={{ boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 items-center mb-1">
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {user.name || user.login}
                    </h3>
                    <span className="tech-badge">@{user.login}</span>
                  </div>
                  {user.bio && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {user.bio}
                    </p>
                  )}
                  {user.location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                      <MapPin className="w-3 h-3" />
                      {user.location}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4">
                    {(
                      [
                        {
                          icon: BookOpen,
                          label: "Repos",
                          value: user.public_repos,
                        },
                        {
                          icon: Users,
                          label: "Followers",
                          value: user.followers,
                        },
                        {
                          icon: Users,
                          label: "Following",
                          value: user.following,
                        },
                      ] as const
                    ).map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="glass px-4 py-2 rounded-lg text-center"
                      >
                        <div className="flex items-center gap-1.5 justify-center">
                          <Icon className="w-3 h-3 text-[#00d4ff]" />
                          <span className="font-bold text-foreground">
                            {value}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 reveal">
              <h3 className="font-display font-semibold mb-4 text-[#00d4ff]">
                Contribution Activity
              </h3>
              <div className="overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/00d4ff/Mahi-tech-c"
                  alt="GitHub contribution chart for Mahi-tech-c"
                  className="w-full h-auto min-w-[600px]"
                  style={{ filter: "hue-rotate(0deg) saturate(1.2)" }}
                />
              </div>
            </div>

            {topLangs.length > 0 && (
              <div className="glass rounded-2xl p-6 reveal">
                <h3 className="font-display font-semibold mb-4 text-[#a855f7]">
                  Top Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topLangs.map(([lang, count]) => (
                    <span
                      key={lang}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium glass"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: LANG_COLORS[lang] || "#888" }}
                      />
                      <span className="text-foreground/80">{lang}</span>
                      <span className="text-xs text-muted-foreground">
                        {count}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
              {repos.map((repo, idx) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`github.item.${idx + 1}`}
                  className="glass rounded-xl p-4 glass-hover group block"
                >
                  <h4 className="font-mono text-sm font-semibold text-[#00d4ff] mb-2 group-hover:text-[#00d4ff] truncate">
                    {repo.name}
                  </h4>
                  {repo.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: LANG_COLORS[repo.language] || "#888",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
