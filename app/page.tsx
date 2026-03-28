import Image from "next/image";

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "IBI Vet",
    description:
      "Local veterinary clinic focused on preventive care, diagnostics, and urgent support for pets.",
    telephone: "+1-555-010-1212",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Your City",
      addressRegion: "ST",
      postalCode: "00000",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
  };

  const services = [
    {
      title: "Preventive Wellness",
      body: "Year-round plans for vaccines, nutrition coaching, and early screening to keep pets healthy.",
    },
    {
      title: "Diagnostics and Imaging",
      body: "In-clinic lab work and imaging support that helps us move quickly from symptoms to treatment.",
    },
    {
      title: "Urgent Pet Visits",
      body: "Same-day availability for non-life-threatening emergencies when your pet needs fast attention.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The team explained every option with patience and treated Luna like family from day one.",
      name: "Ana R.",
    },
    {
      quote:
        "Clear pricing, short wait times, and a calm clinic. We finally found our neighborhood vet.",
      name: "Carlos M.",
    },
    {
      quote:
        "Our senior dog needed close follow-up and IBI Vet made the process simple and reassuring.",
      name: "Priya T.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <main className="relative overflow-x-clip">
        <div className="ambient-shape -left-14 top-16 h-52 w-52 bg-teal-300/70" />
        <div className="ambient-shape right-[-4rem] top-[36rem] h-72 w-72 bg-orange-300/70" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <a
            href="#home"
            className="inline-flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-slate-900"
          >
            <Image
              src="/ibi_vet_logo.svg"
              alt="IBI Vet logo"
              width={36}
              height={43}
              className="h-[43px] w-[36px]"
              priority
            />
            <span>IBI Vet</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#services" className="transition hover:text-teal-700">
              Services
            </a>
            <a href="#about" className="transition hover:text-teal-700">
              About
            </a>
            <a href="#contact" className="transition hover:text-teal-700">
              Contact
            </a>
          </nav>
        </header>

        <section
          id="home"
          className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-12 pt-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:pb-20"
        >
          <div className="reveal-up space-y-6">
            <p className="inline-flex rounded-full border border-teal-900/10 bg-white/70 px-4 py-1 text-sm text-teal-900 shadow-sm backdrop-blur">
              Trusted local veterinary care
            </p>
            <h1 className="font-display max-w-2xl text-4xl leading-tight text-slate-900 md:text-6xl">
              Healthier pets, calmer families, and a clinic that feels like home.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-700">
              IBI Vet is your neighborhood partner for preventive care, diagnostics,
              and urgent visits for dogs and cats. We combine modern clinical care
              with clear communication and kind support.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-800"
              >
                Book an Appointment
              </a>
              <a
                href="tel:+15550101212"
                className="rounded-full border border-slate-900/15 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                Call Us Now
              </a>
            </div>
          </div>

          <div className="reveal-up delay-1 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl shadow-teal-950/10 backdrop-blur">
            <h2 className="font-display text-2xl text-slate-900">Today at IBI Vet</h2>
            <dl className="mt-5 space-y-4 text-sm text-slate-700">
              <div>
                <dt className="font-semibold text-slate-900">Hours</dt>
                <dd>Mon-Fri 8:00 AM - 7:00 PM</dd>
                <dd>Sat 9:00 AM - 3:00 PM</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Focus</dt>
                <dd>Preventive plans, diagnostics, and urgent support.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Address</dt>
                <dd>123 Main Street, Your City, ST 00000</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
          <div className="reveal-up delay-2 mb-8">
            <h2 className="font-display text-3xl text-slate-900 md:text-4xl">
              Services Designed for Everyday Pet Life
            </h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              From routine checkups to urgent concerns, our team builds practical
              care plans that fit your pet and your schedule.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/70 bg-white/75 p-6 shadow-md shadow-slate-900/5 backdrop-blur"
              >
                <h3 className="font-display text-2xl text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-700">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-8 rounded-3xl border border-teal-900/10 bg-teal-950 p-8 text-teal-50 md:grid-cols-2">
            <div className="reveal-up">
              <h2 className="font-display text-3xl md:text-4xl">
                Why local families choose IBI Vet
              </h2>
              <p className="mt-4 max-w-xl text-teal-100">
                We are a close-knit team that believes great veterinary care should
                be proactive, transparent, and deeply human. Every visit includes
                clear next steps and practical guidance you can trust.
              </p>
            </div>
            <div className="reveal-up delay-1 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-display text-3xl">10+</p>
                <p className="text-sm text-teal-100">Years serving the community</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-display text-3xl">Same Day</p>
                <p className="text-sm text-teal-100">Urgent appointments</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-display text-3xl">Clear</p>
                <p className="text-sm text-teal-100">Treatment and pricing plans</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-display text-3xl">Bilingual</p>
                <p className="text-sm text-teal-100">Support for local families</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
          <h2 className="font-display reveal-up text-3xl text-slate-900 md:text-4xl">
            What pet parents say
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={testimonial.name}
                className={`reveal-up rounded-2xl border border-white/70 bg-white/75 p-5 text-slate-700 shadow-md shadow-slate-900/5 ${
                  index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
                }`}
              >
                <p className="text-base leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-3 font-semibold text-slate-900">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-8 md:px-10">
          <div className="reveal-up delay-3 rounded-3xl border border-orange-900/10 bg-orange-50 p-8">
            <h2 className="font-display text-3xl text-slate-900 md:text-4xl">
              Ready to visit IBI Vet?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              Call us for same-day availability or email to request a wellness
              consultation. We will help you find the right care plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+15550101212"
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                +1 (555) 010-1212
              </a>
              <a
                href="mailto:hello@ibivet.com"
                className="rounded-full border border-slate-900/15 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                hello@ibivet.com
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-900/10 px-6 py-8 text-center text-sm text-slate-600 md:px-10">
          IBI Vet - Local veterinary care for dogs and cats.
        </footer>
      </main>
    </>
  );
}
