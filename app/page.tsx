import profile from "@/data/profile.json";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Hobbies from "@/components/Hobbies";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-7 pt-24">
      <Hero
        name={profile.name}
        affiliation={profile.affiliation}
        tagline={profile.tagline}
      />
      <About about={profile.about} goal={profile.goal} />
      <Interests
        interests={profile.interests}
        currentProject={profile.currentProject}
      />
      <Hobbies hobbies={profile.hobbies} />
      <Links links={profile.links} />
      <footer className="flex flex-wrap justify-between gap-2 border-t border-foreground/10 py-8 font-display text-[13px] italic text-foreground/45">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </main>
  );
}
