import { Github, Heart, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      data-ocid="footer.panel"
      className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <span className="text-2xl font-bold font-display neon-text">ST</span>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground font-mono text-center">
            Building the future through code.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mahi-tech-c"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
              className="p-2.5 rounded-full glass hover:border-[#a855f7]/40 hover:shadow-neon-purple transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-[#a855f7]" />
            </a>
            <a
              href="mailto:salma3962024@gmail.com"
              data-ocid="footer.link"
              className="p-2.5 rounded-full glass hover:border-[#00d4ff]/40 hover:shadow-neon transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-[#00d4ff]" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {year} Salma Tabassum. All rights reserved.
          </p>

          {/* Caffeine attribution */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-[#a855f7] fill-current" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
