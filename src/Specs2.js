/* eslint-disable jsx-a11y/anchor-has-content */
import {
  FolderOpenIcon,
  BeakerIcon,
  CheckIcon,
  PlayIcon,
  TicketIcon,
  ChartPieIcon,
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Sign-Up Sign-In with Auth",
    description:
      "Implemented basic fullstack signup signin pages with authentication",
    icon: ArrowRightOnRectangleIcon,
    link: "https://signinsignupreacttailwind.netlify.app/",
  },
  {
    name: "Petty Cash Manager",
    description:
      "Implemented basic fullstack Petty Cash Manager",
    icon: BanknotesIcon,
    link: "https://pettycashfrontend.netlify.app/",
  },
  {
    name: "Rental E-Commerce mockup",
    description:
      "Implemented basic rental app; where products can be searched according to categories.",
    icon: ChartPieIcon,
    link: "https://webcodetwo.netlify.app/",
  },
  {
    name: "Movies frontend app",
    description: "Implemented a CRUD Movies Library app.",
    icon: TicketIcon,
    link: "https://moviesfrontend.netlify.app/",
  },
  {
    name: "YouTube Landing page",
    description: "Implemented a basic Youtube landing page.",
    icon: PlayIcon,
    link: "https://sparkly-sunflower-9bb19b.netlify.app/",
  },
  {
    name: "Todo App",
    description: "Implemented basic todo app to add, edit and delete todo.",
    icon: CheckIcon,
    link: "https://tailwindtodo.netlify.app/",
  },
  {
    name: "Abstract.com Landing page.",
    description: "Implemented Landing page of abstract.com - mockup.",
    icon: BeakerIcon,
    link: "https://profound-lokum-cd1c15.netlify.app/",
  },
  {
    name: "File Creator API",
    description:
      "Implemented a basic Node.js application where files can be created with API call.",
    icon: FolderOpenIcon,
    link: "https://fs-api-guvi.herokuapp.com/",
  },
];

export default function Specs2() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Mini-Projects
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex  cursor-pointer items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <a
                    href={feature.link}
                    rel="noreferrer noopener"
                    alt="icons"
                    target="_blank"
                    className="flex animate-pulse relative"
                  >
                    <feature.icon className="h-24 w-24" aria-hidden="true" />
                  </a>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-2xl font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-xl leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
