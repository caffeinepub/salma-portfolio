import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, lazy } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Skills from "./components/Skills";
import { ThemeProvider } from "./components/ThemeContext";

const GitHubActivity = lazy(() => import("./components/GitHubActivity"));

function GitHubFallback() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-4">
        <Skeleton className="h-8 w-48 mx-auto" />
        <Skeleton className="h-32 w-full rounded-2xl" />
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-24 rounded-2xl" />
          <Skeleton className="h-24 rounded-2xl" />
          <Skeleton className="h-24 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Suspense fallback={<GitHubFallback />}>
            <GitHubActivity />
          </Suspense>
          <ResumeSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
