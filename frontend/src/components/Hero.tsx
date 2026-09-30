import { Link } from "react-router-dom";
import { CV_URL } from "../data/cv";

export default function Hero() {
  return (
    <>
      <section className="wrap grid items-center gap-16 py-10 lg:grid-cols-[1.3fr_1fr] lg:py-20">
        <div>
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-8xl">
            Matsilele Aubrey
            <br />
            Mabaso
          </h1>
          <p className="mt-6 font-display text-2xl font-semibold text-link xl:text-3xl">
            Senior Data Scientist | Data Engineer | ML/AI Specialist
          </p>

          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed xl:text-xl">
            I have spent 8+ years applying statistics, machine learning and data engineering across{" "}
            <mark>manufacturing, financial services and research</mark>. I turn messy process and business data
            into models and tools that people use every day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/projects" className="rounded-full bg-link px-7 py-3.5 font-semibold text-white hover:bg-ink">
              See my projects
            </Link>
            {CV_URL && (
              <a href={CV_URL} download className="font-semibold underline decoration-2 underline-offset-4 hover:text-link">
                Download my CV
              </a>
            )}
            <Link to="/contact" className="font-semibold underline decoration-2 underline-offset-4 hover:text-link">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-link lg:translate-x-6 lg:translate-y-6" />
          <img
            src="/profile.jpg"
            alt="Matsilele Mabaso" width={800} height={1000} fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
          />
        </div>
      </section>

      <div className="bg-tint-blue py-7 text-ink">
        <p className="wrap font-display text-2xl font-extrabold md:text-4xl 2xl:text-5xl">
          Machine learning. Data engineering. Analytics. Generative AI.
        </p>
      </div>
    </>
  );
}
