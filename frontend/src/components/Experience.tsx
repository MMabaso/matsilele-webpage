import { earlier, experience } from "../data/cv";

export default function Experience() {
  return (
    <section className="wrap py-12 lg:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl 2xl:text-7xl">Experience</h1>

      <ol className="mt-12 space-y-14">
        {experience.map((e) => (
          <li key={e.role + e.period} className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-12 lg:grid-cols-[18rem_1fr]">
            <p className="text-lg text-muted">{e.period}</p>
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">{e.role}</h2>
              <p className="mt-1 text-lg font-semibold text-link">{e.org}</p>
              <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 text-lg leading-relaxed marker:text-link">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-14 max-w-[68ch] text-lg leading-relaxed text-muted">{earlier}</p>
    </section>
  );
}
