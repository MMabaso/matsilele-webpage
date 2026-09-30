import { CV_URL, EMAIL } from "../data/cv";

export default function Contact() {
  return (
    <section className="wrap py-12 lg:py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-link p-8 text-white md:p-14 lg:p-20">
        <h1 className="max-w-[16ch] text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
          Email is the quickest way to reach me.
        </h1>
        <p className="mt-10 break-all text-2xl font-semibold md:text-4xl">
          <a href={`mailto:${EMAIL}`} className="underline decoration-2 underline-offset-8">{EMAIL}</a>
        </p>
        <p className="mt-8 max-w-[55ch] text-lg leading-relaxed text-white/85">
          I'm based in Pietermaritzburg, South Africa, and I speak English, Xitsonga and Sepedi. References are
          available on request.
        </p>
        {CV_URL && (
          <p className="mt-6 text-lg font-semibold">
            <a href={CV_URL} download className="underline underline-offset-4">Download my CV (PDF)</a>
          </p>
        )}
      </div>
    </section>
  );
}
