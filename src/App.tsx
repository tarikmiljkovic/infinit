import "./App.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
  CursorArrowRaysIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

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
    name: "Webdesign » Template",
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
      "Gemeinsame Durchsicht und Revision",
      "Premiumsupport",
    ],
    mostPopular: false,
  },
  {
    name: "Webdesign » Template",
    id: "tier-startup",
    href: "#",
    priceStandard: "€ 4.470",
    priceOnePage: "€ 3.970",
    description: "A plan that scales with your rapidly growing business.",
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
      "Gemeinsame Durchsicht und Revision",
      "Premiumsupport",
    ],
    mostPopular: true,
  },
  {
    name: "Webdesign » Complete",
    id: "tier-enterprise",
    href: "#",
    priceStandard: "€ 7. 770",
    priceOnePage: "€ 5. 590",
    description:
      "All-Inklusive Performance-Pakete mit wirkungsvollen Texten und Fotos",
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
      "Gemeinsame Durchsicht und Revision",
      "Premiumsupport",
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
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                alt=""
              />
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
                <span className="sr-only">Your Company</span>
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
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-sm px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
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
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Wir bauen zukunftssicher innovativ, auf dem neuesten Stand
                  digitale Produkte.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Consulting. Web. Design. Apps.
                </p>
                {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-sm bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              FÜR UNTERNEHMEN | COACHES | KEYNOTE SPEAKER
            </h2>
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

        {/* Pricing section */}
        <div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Webseiten
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Professionelles Webdesign passend zum Budget &nbsp;
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              Preispläne für alle Bedürfnisse
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? "lg:z-10 lg:rounded-sm-none" : "lg:mt-8",
                    tierIdx === 0 ? "lg:rounded-sm-none" : "",
                    tierIdx === tiers.length - 1 ? "lg:rounded-sm-none" : "",
                    "flex flex-col justify-between rounded-sm bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular ? "text-blue-600" : "text-gray-900",
                          "text-lg font-semibold leading-8"
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="rounded-sm bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                          Häufig gebucht
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {tier.description}
                    </p>
                    {/* <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /month
                      </span>
                    </p> */}
                    <p className="text-sm font-semibold leading-6 text-gray-600 mt-4">
                      Standard Business Webseite
                    </p>
                    <p className="mt-0 flex items-baseline gap-x-1">
                      {/* <span className="text-sm font-semibold leading-6 text-gray-600">
                        ab
                      </span> */}
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {tier.priceStandard}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        exkl. USt.
                      </span>
                      {/* <span className="text-sm font-semibold leading-6 text-gray-600">
                        eur
                      </span> */}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-600 mt-4">
                      One-Page Business Webseite
                    </p>
                    <p className="mt-0 flex items-baseline gap-x-1">
                      {/* <span className="text-sm font-semibold leading-6 text-gray-600">
                        ab
                      </span> */}
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {tier.priceOnePage}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        exkl. USt.
                      </span>
                    </p>
                    {/* <div className="">
                      <p className="text-sm font-semibold leading-6 text-gray-600 mt-4">
                        One-Page Business Webseite
                      </p>
                      <p className="mt-0 flex items-baseline gap-x-1">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                          {tier.alternativePrice[frequency.value]}
                        </span>
                        <span className="text-sm font-semibold leading-6 text-gray-600">
                          {frequency.priceSuffix}
                        </span>
                      </p>
                    </div> */}
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-blue-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                        : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300",
                      "mt-8 block rounded-sm py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    )}
                  >
                    Verfügbarkeit anfragen
                  </a>
                </div>
              ))}
            </div>
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
                className="rounded-sm bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
      </main>

      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8"></div>

      {/* Footer
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
              alt="Company name"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer> 
      </div>*/}
    </div>
  );
}

export default App;
