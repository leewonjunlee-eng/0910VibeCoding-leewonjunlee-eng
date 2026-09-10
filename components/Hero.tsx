import { Profile } from "@/data/types";

export default function Hero({
  name,
  affiliation,
  tagline,
}: Pick<Profile, "name" | "affiliation" | "tagline">) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{name}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">{affiliation}</p>
      <p className="text-lg text-zinc-800 dark:text-zinc-200">{tagline}</p>
    </header>
  );
}
