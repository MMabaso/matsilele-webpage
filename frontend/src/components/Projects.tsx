import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="wrap grid gap-10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl">Projects</h1>
        <p className="mt-4 max-w-[30ch] text-lg text-muted">Selected work from Hulamin, Sasol and Consumer Profile Bureau.</p>
      </div>

      <ol className="space-y-14">
        {projects.map((p) => (
          <li key={p.title}>
            <span className="inline-block rounded-full bg-tint-blue px-3.5 py-1 text-sm font-medium">
              {p.category}, {p.company}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-link md:text-4xl">
              {p.link ? <a href={p.link} className="underline decoration-2 underline-offset-4">{p.title}</a> : p.title}
            </h2>
            <p className="mt-3 max-w-[62ch] text-lg leading-relaxed">{p.description}</p>
            {p.result && (
              <p className="mt-3 text-lg font-semibold"><mark>{p.result}</mark></p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border border-ink/20 px-3 py-1 text-muted">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
