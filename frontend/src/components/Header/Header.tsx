import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
export default function Header() {
  const routes = useMatch("/");
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <p className="flex items-center">
          <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">
            ZARA
          </span>
        </p>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/templates"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Templates
              </Link>
            </li>
            {routes?.pathname !=='/' && (
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
