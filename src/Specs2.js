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
  AdjustmentsHorizontalIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

import { useState,useEffect } from "react";
import axios from "axios";

const features = [
  {
    name: "Sign-Up Sign-In with Auth",
    description:
      "Implemented basic fullstack signup signin pages with authentication",
    icon: ArrowRightOnRectangleIcon,
    link: "https://signinsignupreacttailwind.netlify.app/",
    server:true,
    serverHook:"https://api.render.com/deploy/srv-ce27mqta4996ndum4b5g?key=MDj7qUXM3O0",
  },
  {
    name: "Petty Cash Manager",
    description:
      "Implemented basic fullstack Petty Cash Manager",
    icon: BanknotesIcon,
    link: "https://pettycashfrontend.netlify.app/",
    server:true,
    serverHook:"https://api.render.com/deploy/srv-ce27mqta4996ndum4b5g?key=MDj7qUXM3O0",
  },
  {
    name: "Url Shortner",
    description:
      "Implemented Full Stack Url Shortner",
    icon: LinkIcon,
    link: "https://shortyurltailwind.netlify.app/",
    server:true,
    serverHook:"https://api.render.com/deploy/srv-ce5g1bun6mpk2bjkirtg?key=fy64mCFwn5o",
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
    server:true,
    serverHook:"",
  },
  
  {
    name: "Mentor-Student API",
    description:
      "Implemented a basic API service to create a student, mentor and assign student to mentor",
    icon: AdjustmentsHorizontalIcon,
    link: "https://selfstart.stoplight.io/docs/mentor-student/h8wmjo9no10px-mentor-student",
    server:true,
    serverHook:"https://api.render.com/deploy/srv-ce5oisqrrk071o3umt2g?key=0ndkfUN-ibA",
  },
];

export default function Specs2() {
  const[a,setA]=useState(300)
  function ReduceA(){
    if(a>0){
     setA(a-1)      
    }
   }

  useEffect(()=>{
      features.map((hook)=>(
      axios.post(`${hook.serverHook}`)
    ))
  },[])  

  useEffect(()=>{
    setInterval(ReduceA,1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[a])



  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Mini-Projects 
          </p>
          {a!==0?<span className="text-red-500">Re-booting Up servers to run projects smoothly. Time: {a}s <span>(<><b>*</b></>do not refresh)</span></span>:<span className="text-xl text-green-600">"🎉servers booted up"<span>(<><b className="text-red-500">*</b></>do not refresh)</span></span>}
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
