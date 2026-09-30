import { awards, education } from "../data/cv";

function Rows({ rows }: { rows: string[][] }) {
  return (
    <dl className="space-y-5">
      {rows.map(([year, title, place]) => (
        <div key={year + title} className="grid grid-cols-[6.5rem_1fr] gap-4">
          <dt className="text-muted">{year}</dt>
          <dd>
            <span className="block font-semibold">{title}</span>
            <span className="text-muted">{place}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function About() {
  return (
    <section className="wrap py-12 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl xl:text-6xl 2xl:text-7xl">
          Statistics first, then machine learning, then the engineering to ship it.
        </h1>

        <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed xl:text-xl">
          <p>
            I'm a senior data scientist at Hulamin in Pietermaritzburg. I lead analytics for manufacturing
            operations: <mark>production ML applications</mark> that predict product quality, explain what drives yield, and reach
            engineers through APIs and dashboards.
          </p>
          <p>
            Before that I worked on predictive maintenance and forecasting at Sasol, built credit scoring models at
            Consumer Profile Bureau, and did applied computer vision research at the CSIR, where I did the research behind my
            Master's and PhD in Electrical Engineering at the University of Johannesburg.
          </p>
          <p>
            I mentor analysts and engineers, and I care about the whole life of a model: validation, monitoring and
            getting it into production, not only training it.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-8 text-3xl font-extrabold">Education</h2>
          <Rows rows={education} />
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-extrabold">Awards and recognition</h2>
          <Rows rows={awards} />
        </div>
      </div>
    </section>
  );
}
