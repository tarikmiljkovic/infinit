{
  /* Pricing section */
}
<div className="py-24 pb-10 sm:pt-48">
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
                keine Folgekosten
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
            // href={tier.href}
            href="mailto:office@webstark.at"
            aria-describedby={tier.id}
            className={classNames(
              tier.mostPopular
                ? "bg-blue-600 text-white shadow-sm hover:bg-blue-600"
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
</div>;
{
  /* exkl.  */
}
<div className="flex justify-center">
  <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
    <span className="hidden md:inline">Alle Preise </span>
    <span className="font-semibold text-blue-600 cursor-default">
      <span className="absolute inset-0" aria-hidden="true" /> exkl. Ust.
      <span aria-hidden="true"></span>
    </span>
  </p>
</div>;
