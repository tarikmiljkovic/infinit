import "./App.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { TypeAnimation } from "react-type-animation";

import {
  ArrowDownCircleIcon,
  XMarkIcon,
  CursorArrowRaysIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

const stats = [
  { id: 1, name: "🚀 Websites gestartet", value: "75+" },
  { id: 2, name: "🔥 Mobile Apps entwickelt", value: "10+" },
  { id: 3, name: "🚀 Wordpress Sites entwickelt", value: "45+" },
];

const timeline = [
  {
    name: "Strategie",
    description:
      "Als Partner, der auf den Aufbau von Websites, Shops, Wordpress Sites und mobilen Apps spezialisiert ist, helfen wir Ihnen, eine leistungsstarke Produkt- und Marketingstrategie zu entwickeln, um den Markt zu erobern.",
    date: "Phase I",
    dateTime: "2021-08",
  },
  {
    name: "Design",
    description:
      "Wir können Ihnen helfen, eine perfekte Produkt-UX/UI zu entdecken und zu entwerfen, die Benutzer begeistern wird.",
    date: "Phase II",
    dateTime: "2021-12",
  },
  {
    name: "Development",
    description:
      "Wir können einfache Webseite, Wordpress Webseite, Web Shop, Mobile App oder eine größere technische Lösung für Ihr Unternehmen- oder Innovationsprojekt entwickeln, um eine schnelle Markteinführung und ein optimales Qualitätsniveau zu gewährleisten.",
    date: "Phase III",
    dateTime: "2022-02",
  },
  {
    name: "Server Einsatz",
    description:
      "Wir können uns um die Bereitstellung und kontinuierliche Bereitstellung und Integration auf unserem oder Ihrem Server mit den innovativen Technologien und Konzepten kümmern, die Ihnen Kosten sparen, eine 24-Stunden-Verfügbarkeit Ihrer Websites und Apps an 365 Tagen im Jahr gewährleisten und den Verlust von Kunden verhindern.",
    date: "Phase IV",
    dateTime: "2022-12",
  },
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const features = [
  {
    name: "Consulting",
    description:
      "Das Kreativteam wird Ihnen in Kürze eine konzeptionelle Lösung für Ihre Bedürfnisse vorschlagen.",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Website",
    description:
      "Eine professionell gestaltete Website übernimmt die Rolle eines guten Verkäufers und dient dazu, den Kunden zu animieren und den Verkauf abzuschließen.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "App",
    description:
      "Mit einer hochwertigen nativen Anwendung können Sie Ihre Reichweite erweitern.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Digitales Marketing",
    description:
      "Vorgeplantes Marketing unter Einsatz der Informationstechnologie und der Fähigkeiten unseres Teams ist die beste Lösung zur Förderung Ihres Unternehmens.",
    icon: IdentificationIcon,
  },
];
const tiers = [
  {
    name: "Webdesign » Template ⭐",
    id: "tier-freelancer",
    href: "#",
    priceStandard: "€ 2. 770",
    priceOnePage: "€ 2. 190",
    description: "Auf Vorlagen basierende professionelle Performance-Webseiten",
    features: [
      "Design und Umsetzung",
      "Inhalte von Ihnen geliefert",
      "Performance Plus",
      "Responsive Plus",
      "Sicherheitsoptimierungen (CMS)",
      "DSGVO Optimierungen",
      "Suchmaschinenoptimiert(OnPage)",
      "Statistiken & Analyse",
      "Durchgehende Qualitätssicherung",
      "Gemeinsame Durchsicht und 1 Revision Inkludiert",
      "Premiumsupport 1 Woche Inkludiert",
    ],
    mostPopular: false,
  },
  {
    name: "Webdesign » Experience ⭐⭐⭐",
    id: "tier-startup",
    href: "#",
    priceStandard: "€ 4.470",
    priceOnePage: "€ 3.970",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Design und Umsetzung",
      "Inhalte von Ihnen geliefert",
      "High-end Performance",
      "High-end Responsive",
      "Sicherheitsoptimierungen (CMS)",
      "DSGVO Optimierungen",
      "Suchmaschinenoptimiert(OnPage)",
      "Statistiken & Analyse",
      "Durchgehende Qualitätssicherung",
      "Gemeinsame Durchsicht und 1 Revision Inkludiert",
      "Premiumsupport 2 Wochen Inkludiert",
    ],
    mostPopular: true,
  },
  {
    name: "Webdesign » Complete ⭐⭐⭐⭐⭐",
    id: "tier-enterprise",
    href: "#",
    priceStandard: "€ 7. 770",
    priceOnePage: "€ 5. 590",
    description:
      "All-Inklusive Performance-Pakete mit wirkungsvollen Texten und Fotos",
    features: [
      "Design und Umsetzung",
      "Inhaltserstellung durch uns",
      "High-end Performance ",
      "High-end Responsive ",
      "Sicherheitsoptimierungen (CMS)",
      "DSGVO Optimierungen",
      "Suchmaschinenoptimiert(OnPage)",
      "Statistiken & Analyse",
      "Durchgehende Qualitätssicherung",
      "Gemeinsame Durchsicht und 2 Revision Inkludiert",
      "Premiumsupport 4 Wochen Inkludiert",
    ],
    mostPopular: false,
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const footerNavigation = {
  solutions: [
    { name: "Hosting", href: "#" },
    { name: "Data Services", href: "#" },
    { name: "Uptime Monitoring", href: "#" },
    { name: "Enterprise Services", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Infinit</span>
              <img className="h-5 w-auto " src="./logo.svg" alt="" />
            </a>
          </div>
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-sm p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Webstark Wien Web Design</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-sm p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-sm px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          {/* <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div> */}
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Wir bauen zukunftssicher innovativ, auf dem neuesten Stand
                  digitale Produkte.
                </h1> */}
                <h1 className="text-2xl sm:text-4xl font-semibold my-6 text-gray-600 ">
                  {/* We are infinit. */}
                  We are infinit.
                  {/* Webdesigner, Programmierer & wordpress epxerte in Wien */}
                </h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Erstellen Sie Ihre Website mit Experten aus Wien.",
                    5000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Wir beraten Sie im Web Design, Mobile App, Web Shops.",
                    5000,
                    " Wir steigern Ihre Profitabilität signifikant.",
                    5000,
                    "Wir automatisieren langweilige Arbeit für Sie.",
                    5000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  className={
                    "my-6 text-5xl sm:text-7xl font-bold tracking-tight text-gray-800 "
                  }
                  repeat={Infinity}
                />

                <h2 className="text-xl my-6 text-gray-600 ">
                  Konzeption & Gestaltung von Websites, Mobile Apps und Web
                  Shops.
                  {/* Webdesigner, Programmierer & wordpress epxerte in Wien */}
                </h2>
                {/* Web Design. Mobile Apps. Software. Consulting. */}
                {/* <h2 className="my-2 text-3xl sm:text-4xl leading-8   text-blue-600">
                  Konzeption & Gestaltung von Websites, Mobile Apps und Web
                  Shops.
                </h2> */}

                <p className="hidden">
                  Konzeption & Gestaltung von Websites mit Fokus auf
                  hochwertigem & minimalistischen Design, klaren Strukturen und
                  durchdachter Benutzerführung. Individuell & maßgeschneidert
                  auf die Identität Ihres Unternehmens und dessen Zielgruppe(n).
                </p>

                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <img
                    // col-span-2
                    // max-h-48
                    // w-full

                    // lg:col-span-2
                    // col-end-5
                    // col-span-2
                    // place-self-end
                    className="col-start-1 object-contain w-full"
                    src="/bewertungen.png"
                    alt="google"
                    width={158}
                    height={48}
                  />
                </div>

                {/* <h1 className="hidden">webdesign wien</h1>
                <h1 className="hidden ">
                  Webdesigner, Programmierer & wordpress epxerte in Wien
                </h1>
                <h2 className="hidden">
                  Ich erstelle Webseiten in Agentur-Qualität für kleine und
                  große Unternehmen zu transparenten und fairen Preisen.
                </h2> */}
                {/* <h3 className="hidden">Webdesign</h3> */}
                {/* <h4 className="hidden">
                  Erstellen Sie Ihre Website mit Experten aus Wien.
                </h4> */}

                {/* <a href="#">
                  <span></span>
                </a> */}

                <a
                  className="flex items-center justify-center rounded-sm mt-24"
                  href="#anchor"
                >
                  <ArrowDownCircleIcon
                    className="h-12 w-12 text-blue-600 text-center justify-center self-center"
                    // aria-hidden="true"
                  />
                </a>
                {/* <div className="flex items-center justify-center rounded-sm mt-24">
                  <ArrowDownCircleIcon
                    className="h-12 w-12 text-blue-600 text-center justify-center self-center"
                    // aria-hidden="true"
                  />
                </div> */}

                {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-sm bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_logo.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                Transistor saves up to $40,000 per year, per employee by working
                with us.
              </span>
              <a href="#" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" /> Read
                our case study <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div> */}

        {/* Feature section */}
        <div
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
          id="anchor"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h3 className="text-base font-semibold leading-7 text-blue-600">
              Über uns
            </h3>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Consulting. Web Design. Mobile App Entwicklung. Marketing.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ein Vierfach notwendig für den kompletten Kreis. Es ist uns
              gelungen, vier Dinge optimal miteinander zu verbinden, um den
              Kunden den perfekten Service zu bieten. Grafikdesign macht die
              Website harmonisch, anspruchsvoll und ansprechend, während
              digitales Marketing Ihr Unternehmen professionell macht.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-sm bg-blue-600">
                      <feature.icon
                        className="h-12 w-12 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Timeline */}

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-sm font-semibold leading-6 text-blue-600"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600 font-regular">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl font-bold">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Steigern Sie Ihr Geschäft.
              <br />
              Nehmen Sie Kontakt mit uns auf.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Hinterlassen Sie uns Ihre Nachricht und optional einen
              präferierten Kontaktzeitpunkt. Wir melden uns ehestmöglich bei
              Ihnen. In der Regel werden alle Anfragen innerhalb von 24 Stunden
              vollständig bearbeitet.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:office@webstark.at"
                className="rounded-sm bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Kontakt
              </a>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>

        {/* <addresse></addresse> */}
      </main>

      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8"></div>
    </div>
  );
}

export default App;
