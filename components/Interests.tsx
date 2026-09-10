import { Profile } from "@/data/types";

export default function Interests({
  interests,
  currentProject,
}: Pick<Profile, "interests" | "currentProject">) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        관심사
      </h2>
      <ul className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          >
            {interest}
          </li>
        ))}
      </ul>
      <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
        <p className="font-medium text-zinc-900 dark:text-zinc-100">
          {currentProject.title}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {currentProject.description}
        </p>
      </div>
    </section>
  );
}
