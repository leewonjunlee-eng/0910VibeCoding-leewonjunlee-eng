import profile from "@/data/profile.json";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Hobbies from "@/components/Hobbies";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 px-6 py-20">
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
      <footer className="pt-8 text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
