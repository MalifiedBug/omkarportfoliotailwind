

export default function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-gray-100 dark:bg-gray-900">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
          <b class="text-sky-700 text-2xl">Let's build businesses together...</b>
        </p>

        <nav aria-label="Footer Nav" class="mt-12">
          <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                       <li>
              <button onClick={()=>{window.open("https://medium.com/@malifiedbug", '_blank')}} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Medium
              </button>
            </li>

            <li>
              <button onClick={()=>{window.open("https://github.com/MalifiedBug", '_blank')}} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Github
              </button>
            </li>

            <li>
              <button onClick={()=>{window.open("tel:+919321089065", '_blank')}} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
