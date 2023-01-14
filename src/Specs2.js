/* eslint-disable jsx-a11y/anchor-has-content */
import {
  CheckIcon,
  TicketIcon,
  AdjustmentsHorizontalIcon,
  TagIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'




import { useEffect } from "react";
import axios from "axios";

const features = [
  {
    name: "HelpDesk App",
    description: "A Full stack Application for managing Client issues.",
    icon: TagIcon,
    stack: "MERN",
    link: "https://issuesmanagerfrontend.vercel.app",
    githubrepo: "https://github.com/MalifiedBug/issuesmanagerfrontend",
  },
  {
    name: "Books Management App",
    description: "A Full stack Application for managing Books data.",
    icon: BookOpenIcon,
    stack: "MERN",
    link: "https://booksmanagerfrontend.vercel.app",
    githubrepo: "https://github.com/MalifiedBug/booksmanagerfrontend",
  },
  {
    name: "Movies frontend app",
    description: "Implemented a CRUD Movies Library app.",
    icon: TicketIcon,
    stack: "MERN",
    link: "https://moviesfrontend.netlify.app/",
    githubrepo: "https://github.com/MalifiedBug/moviesfrontend",
  },
  {
    name: "Todo App",
    description: "Implemented basic todo app to add, edit and delete todo.",
    icon: CheckIcon,
    stack: "ReactJS",
    link: "https://tailwindtodo.netlify.app/",
    githubrepo: "https://github.com/MalifiedBug/tailwindtodo",
  },
  {
    name: "Mentor-Student API",
    description:
      "Implemented a basic API service to create a student, mentor and assign student to mentor",
    icon: AdjustmentsHorizontalIcon,
    stack: "NodeJS & ExpressJS",
    link: "https://selfstart.stoplight.io/docs/mentor-student/h8wmjo9no10px-mentor-student",
    githubrepo: "https://github.com/MalifiedBug/mentor-student-api",
  },
  {
    name: "Hall Booking API",
    description: "Implemented a basic API service for Hall Renting Application",
    icon: BuildingLibraryIcon,
    stack: "NodeJS & ExpressJS",
    link: "https://documenter.getpostman.com/view/23548348/2s8YzMZRHS",
    githubrepo: "https://github.com/MalifiedBug/hallbookingapi",
  },
];

export default function Specs2() {
  useEffect(() => {
    features.map((hook) => axios.post(`${hook.serverHook}`));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps

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
                className="relative flex flex-col gap-8 sm:flex-row md:flex-col lg:flex-row border-2 p-1 rounded-lg"
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
                  <div
                    class="text-xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text
            "
                  >
                    {feature.stack}
                  </div>
                  <p className="mt-2 text-left text-xl leading-7 text-gray-600">
                    {feature.description}
                  </p>
                  <a className="" href={feature.githubrepo} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="text-2xl" icon={faGithub} />                  </a>
                  {/* server activate button */}
                  {/* {feature.server?<ServerActivate feature={feature}/>:null}     */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// function ServerActivate({feature}){
//   const[clicked,setClicked]=useState(false)
//   return (
//     <div>
//       <div className="flex ">
//         <p className={feature.serverHook && clicked ? "text-green-500" : "text-red-500"}>
//           Make sure to wake up server before clicking the project link 👉{" "}
//         </p>
//         <div
//           className={feature.serverHook && clicked?"button w-20 h-8 bg-green-300 rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#45ff5e,0_0px_0_0_#1b70f841] active:border-b-[0px] first-letter:transition-all duration-150 [box-shadow:0_10px_0_0_#45ff5e,0_15px_0_0_#1b70f841] border-b-[1px] border-green-400":"button w-20 h-8 bg-red-400 rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#fc4469,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#fc4469,0_15px_0_0_#1b70f841] border-b-[1px] border-red-400"}
//         >
//           {feature.serverHook && clicked?<button

//             class="flex flex-col justify-center items-center h-full text-white font-bold text-lg "
//             disabled={true}
//           >
//             Activated
//           </button>:<button
//             onClick={() => {axios.get(`${feature.serverHook}`).then(setClicked(true))}}

//             class="flex flex-col justify-center items-center h-full text-white font-bold text-lg "
//           >
//             Activate
//           </button>}

//         </div>
//       </div>
//     </div>
//   );
// }
