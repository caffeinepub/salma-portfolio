import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Github, Mail, MapPin, Send } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";

function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

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
      id="contact"
      data-ocid="contact.section"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[#00d4ff] font-mono text-sm mb-2">
            07. GET IN TOUCH
          </p>
          <h2 className="section-heading">
            Contact <span className="neon-text">Me</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact details */}
          <div className="space-y-4 reveal">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-[#00d4ff] mb-6">
                Let&apos;s Connect
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:salma3962024@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "#00d4ff15",
                      border: "1px solid #00d4ff30",
                    }}
                  >
                    <Mail className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-[#00d4ff] transition-colors">
                      salma3962024@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "#a855f715",
                      border: "1px solid #a855f730",
                    }}
                  >
                    <MapPin className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">
                      Warangal, India
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/Mahi-tech-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "#a855f715",
                      border: "1px solid #a855f730",
                    }}
                  >
                    <Github className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-[#a855f7] transition-colors">
                      github.com/Mahi-tech-c
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="glass rounded-2xl p-6">
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle
                    className="w-16 h-16 text-[#00d4ff] mb-4"
                    style={{ filter: "drop-shadow(0 0 12px #00d4ff)" }}
                  />
                  <h3 className="font-display font-bold text-xl text-[#00d4ff] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-sm text-muted-foreground hover:text-[#00d4ff] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-lg text-[#a855f7] mb-6">
                    Send a Message
                  </h3>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs text-muted-foreground"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      data-ocid="contact.input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="glass border-white/10 focus:border-[#00d4ff]/60 focus:ring-[#00d4ff]/20 bg-transparent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs text-muted-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-ocid="contact.email_input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="glass border-white/10 focus:border-[#00d4ff]/60 focus:ring-[#00d4ff]/20 bg-transparent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-xs text-muted-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      data-ocid="contact.textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                      rows={5}
                      className="glass border-white/10 focus:border-[#00d4ff]/60 focus:ring-[#00d4ff]/20 bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full py-3 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-neon"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                      color: "#0a0a0f",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
