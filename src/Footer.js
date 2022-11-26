export default function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-gray-100 dark:bg-gray-900">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
          <b>Building businesses together...</b>
        </p>

        <nav aria-label="Footer Nav" class="mt-12">
          <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://www.linkedin.com/in/omkar-lolge-a34b5024b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://medium.com/@malifiedbug"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://github.com/MalifiedBug"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="tel:+919321089065"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://twitter.com/MalifiedB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
