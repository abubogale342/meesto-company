/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];
const plans = [
  {
    title: "Basic",
    featured: false,
    description: "All your essential business finances, taken care of.",
    priceMonthly: 125,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "2 locations" },
      { id: 2, value: "Full detail of buildings" },
      { id: 3, value: "full detail of surrounding" },
    ],
  },
  {
    title: "Advanced",
    featured: true,
    description: "Convenient features to take your business to the next level.",
    priceMonthly: 1250,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: "50 locations" },
      { id: 2, value: "Full detail of buildings" },
      { id: 3, value: "Full detail of surrounding" },
      { id: 4, value: "Immediate notifications about new places" },
      { id: 5, value: "Contacting relevant business targets for you" },
    ],
  },
  {
    title: "Medium",
    featured: false,
    description: "The best financial services for your thriving business.",
    priceMonthly: 400,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "10 locations" },
      { id: 2, value: "Full detail of buildings" },
      { id: 3, value: "Full detail of surrounding" },
      { id: 4, value: "Immediate notifications about new places" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function pricing() {
  return (
    <div className="bg-gray-50 mb-1">
      <div className="relative bg-indigo-600">
        {/* Overlapping background */}
        <div
          aria-hidden="true"
          className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
        />

        <div className="relative max-w-2xl mx-auto pt-12 px-4 text-center sm:pt-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-3xl">
            <span className="block lg:inline">Pricing</span>
            {/* <span className="block lg:inline">no commitment.</span> */}
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Pick a plan that best suits your purpose.
          </p>
        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Cards */}
        <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
          />

          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured
                    ? "bg-white ring-2 ring-indigo-700 shadow-md"
                    : "bg-indigo-700 lg:bg-transparent",
                  "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? "text-indigo-600" : "text-white",
                      "text-sm font-semibold uppercase tracking-wide"
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p
                        className={classNames(
                          plan.featured ? "text-indigo-600" : "text-white",
                          "text-4xl font-extrabold tracking-tight"
                        )}
                      >
                        ${plan.priceMonthly}
                      </p>
                      <div className="ml-4">
                        <p
                          className={classNames(
                            plan.featured ? "text-gray-700" : "text-white",
                            "text-sm"
                          )}
                        >
                          USD / mo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? "border-gray-200 divide-gray-200"
                      : "border-indigo-500 divide-indigo-500 divide-opacity-75",
                    "mt-7 border-t divide-y lg:border-t-0"
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="py-3 flex items-center">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? "text-indigo-500" : "text-indigo-200",
                          "w-5 h-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? "text-gray-600" : "text-white",
                          "ml-4 text-sm font-medium"
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
