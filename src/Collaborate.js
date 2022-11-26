import {InboxArrowDownIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/24/outline'


export default function Collaborate() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Wanna Collaborate?</span>
            <span className="block text-indigo-600">Contact me for a discussion today!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex  rounded-md shadow">
              <a                
                href="mailto:omkarlolge119.ol@gmail.com"
                className="inline-flex cursor-pointer  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                <InboxArrowDownIcon className="h-8 w-8" aria-hidden="true" />
                &nbsp;
                Mail
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://discord.gg/n44qvfWr"
                className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                <ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />
                &nbsp;
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  