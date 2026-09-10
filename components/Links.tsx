import { Profile } from "@/data/types";

export default function Links({ links }: Pick<Profile, "links">) {
  return (
    <section className="grid justify-items-start gap-6 py-14">
      <span className="font-mono text-[11px] tracking-[0.28em] text-foreground/45">
        04&nbsp;&nbsp;링크 / CONTACT
      </span>
      <div className="flex flex-wrap gap-2.5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-background transition-colors hover:bg-accent"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
