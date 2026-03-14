import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Skeleton, M as MapPin, B as BookOpen } from "./index-DsNcF6Y8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
];
const GitFork = createLucideIcon("git-fork", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const LANG_COLORS = {
  C: "#555599",
  Java: "#b07219",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Arduino: "#bd79d1",
  "C++": "#f34b7d"
};
function GitHubActivity() {
  const ref = reactExports.useRef(null);
  const [user, setUser] = reactExports.useState(null);
  const [repos, setRepos] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch("https://api.github.com/users/Mahi-tech-c"),
        fetch(
          "https://api.github.com/users/Mahi-tech-c/repos?sort=updated&per_page=6"
        )
      ]);
      if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
      const [userData, reposData] = await Promise.all([
        userRes.json(),
        reposRes.json()
      ]);
      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load GitHub data"
      );
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  reactExports.useEffect(() => {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const langCounts = {};
  for (const r of repos) {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  }
  const topLangs = Object.entries(langCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "github",
      "data-ocid": "github.section",
      className: "py-24 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#00d4ff] font-mono text-sm mb-2", children: "05. OPEN SOURCE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading", children: [
            "GitHub ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-text", children: "Activity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-16 h-0.5 mx-auto mt-4",
              style: { background: "linear-gradient(90deg, #00d4ff, #a855f7)" }
            }
          )
        ] }),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "github.loading_state", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-16 h-16 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-48" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-64" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" })
          ] }, i)) })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "github.error_state",
            className: "glass rounded-2xl p-8 text-center border border-red-500/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 mb-4", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: fetchData,
                  className: "flex items-center gap-2 mx-auto px-4 py-2 rounded-lg glass neon-border text-[#00d4ff] hover:shadow-neon transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                    "Retry"
                  ]
                }
              )
            ]
          }
        ),
        !loading && !error && user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-6 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user.avatar_url,
                alt: user.name || user.login,
                className: "w-20 h-20 rounded-full border-2 border-[#00d4ff]/40",
                style: { boxShadow: "0 0 20px rgba(0,212,255,0.3)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-center mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: user.name || user.login }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tech-badge", children: [
                  "@",
                  user.login
                ] })
              ] }),
              user.bio && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: user.bio }),
              user.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                user.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: [
                {
                  icon: BookOpen,
                  label: "Repos",
                  value: user.public_repos
                },
                {
                  icon: Users,
                  label: "Followers",
                  value: user.followers
                },
                {
                  icon: Users,
                  label: "Following",
                  value: user.following
                }
              ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "glass px-4 py-2 rounded-lg text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 justify-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3 text-[#00d4ff]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: value })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label })
                  ]
                },
                label
              )) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold mb-4 text-[#00d4ff]", children: "Contribution Activity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://ghchart.rshah.org/00d4ff/Mahi-tech-c",
                alt: "GitHub contribution chart for Mahi-tech-c",
                className: "w-full h-auto min-w-[600px]",
                style: { filter: "hue-rotate(0deg) saturate(1.2)" }
              }
            ) })
          ] }),
          topLangs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold mb-4 text-[#a855f7]", children: "Top Languages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: topLangs.map(([lang, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium glass",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-2.5 h-2.5 rounded-full",
                      style: { background: LANG_COLORS[lang] || "#888" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: lang }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: count })
                ]
              },
              lang
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal", children: repos.map((repo, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: repo.html_url,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `github.item.${idx + 1}`,
              className: "glass rounded-xl p-4 glass-hover group block",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-sm font-semibold text-[#00d4ff] mb-2 group-hover:text-[#00d4ff] truncate", children: repo.name }),
                repo.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2", children: repo.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                  repo.language && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 rounded-full",
                        style: {
                          background: LANG_COLORS[repo.language] || "#888"
                        }
                      }
                    ),
                    repo.language
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
                    repo.stargazers_count
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GitFork, { className: "w-3 h-3" }),
                    repo.forks_count
                  ] })
                ] })
              ]
            },
            repo.id
          )) })
        ] })
      ] })
    }
  );
}
export {
  GitHubActivity as default
};
