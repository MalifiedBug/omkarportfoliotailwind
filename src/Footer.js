export default function Footer() {
  return (
    <footer class="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="_#" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Omkar's Port.
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a rel="noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/omkar-lolge-a34b5024b/" className="mr-4 hover:underline md:mr-6 ">
              Linked-In
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer"  target="_blank" href="https://medium.com/@malifiedbug" className="mr-4 hover:underline md:mr-6">
              Medium
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer"  target="_blank" href="https://github.com/MalifiedBug" className="mr-4 hover:underline md:mr-6 ">
              GitHub
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer"  target="_blank" href="tel:+919321089065" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
               
         Made with 💓 using React ➕ TailwindCSS.
         © 2022{" "}
      </span>
    </footer>
  );
}
