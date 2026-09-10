import { Profile } from "@/data/types";

export default function Hobbies({ hobbies }: Pick<Profile, "hobbies">) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        취미
      </h2>
      <ul className="flex flex-wrap gap-2">
        {hobbies.map((hobby) => (
          <li
            key={hobby}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
}
