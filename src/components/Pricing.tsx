import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/24/solid";

const frequencies = [
  {
    value: "einmalig",
    label: "einmalig",
    priceSuffix: "/einmalig",
    pricePrefix: "ab",
  },
  {
    value: "monatlich",
    label: "monatlich",
    priceSuffix: "/Monat",
    pricePrefix: "ab",
  },
];
const tiers = [
  {
    svg: <StarIcon className="h-6 w-6 text-blue-500" />,
    name: "Webdesign » Template ⭐⭐⭐ ",
    id: "webdesign-template",
    href: "#",

    price: { einmalig: "€ 2.870", monatlich: "€ 239" },
    alternativePrice: { einmalig: "€ 1.870", monatlich: "€ 239" },
    description: "Auf Vorlagen basierende professionelle Performance-Webseiten",
    features: [
      "Design und Umsetzung ⭐⭐⭐",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Webdesign » Experience ⭐⭐⭐⭐",
    id: "webdesign-experience",
    href: "#",

    price: { einmalig: "€ 5.570", monatlich: "€ 359" },
    alternativePrice: { einmalig: "€ 3.570", monatlich: "€ 239" },
    description:
      "Individuelle Performance-Webseiten von ausgezeichneten Designern",
    features: [
      "Design und Umsetzung ⭐⭐⭐⭐⭐",
      "Inhalte von Ihnen geliefert",
      "Performance Plus",
      "Responsive Plus",
      "Sicherheitsoptimierungen (CMS)",
      "DSGVO Optimierungen",
    ],
    mostPopular: true,
  },
  {
    name: "Webdesign » Complete ⭐⭐⭐⭐⭐",
    id: "webdesign-complete",
    href: "#",

    price: { einmalig: "€ 7.770", monatlich: "€ 519" },

    alternativePrice: { einmalig: "€ 5.570", monatlich: "€ 239" },
    description:
      "All-Inklusive Performance-Pakete mit wirkungsvollen Texten und Fotos",
    features: [
      "Design und Umsetzung ⭐⭐⭐⭐⭐",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Preise
          </h2>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl tracking-tight italic uppercase">
            Professionelles Webdesign passend zum Budget
          </h3>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1  p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? "bg-blue-600 text-white" : "text-gray-500",
                    "cursor-pointer rounded-sm px-2.5 py-1"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-indigo-600"
                  : "ring-1 ring-gray-200",
                "rounded-md p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-blue-600" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                  {tier.svg}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-sm bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                    HÄUFIG GEBUCHT
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <div className="">
                <p className="text-sm font-semibold leading-6 text-gray-600 mt-4">
                  Standard Business Webseite
                </p>
                <p className="mt-0 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {frequency.priceSuffix}
                  </span>
                </p>
              </div>
              <div className="">
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
              </div>

              {/* <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.alternativePrice[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {frequency.priceSuffix}
                </span>
              </p> */}
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-blue-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-blue-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-sm py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Verfügbarkeit Anfragen
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
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
          ))}
        </div>
      </div>
    </div>
  );
}
