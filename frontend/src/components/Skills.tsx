import { skills } from "../data/cv";

export default function Skills() {
  return (
    <section className="wrap py-12 lg:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl 2xl:text-7xl">What I work with</h1>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map(([title, items]) => (
          <div key={title} className="rounded-[2rem] bg-tint-blue p-8">
            <h2 className="text-2xl font-extrabold leading-tight">{title}</h2>
            <ul className="mt-5 space-y-1.5 text-lg">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-[65ch] text-lg leading-relaxed text-muted">
        I work in Scrum teams, run sprint planning with stakeholders, and write up findings so that engineers and
        executives can both use them.
      </p>
    </section>
  );
}
