export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Men's Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Women's Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Shoes
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Customer Care
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  FAQs
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Connect With Us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  LinkedIn
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Subscribe to Our Newsletter
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-email"
                  name="footer-email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Email"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 text-center md:text-left">
              Get exclusive offers and updates
              <br className="lg:block hidden" />
              directly to your inbox.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Your Company Name —
            <a
              href="#"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-5l-4-4 1.5-1.5L11 12l6.5-6.5L19 7l-8 8z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M7 2L7 7M17 2L17 7M7 17L7 22M17 17L17 22"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M15 14h-2.5a1.5 1.5 0 0 1 0-3H15m2-1h.01M9 14H5.5a1.5 1.5 0 0 1 0-3H9m2-1H5m7 3v3m-4-3v3"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="12" r="3"></circle>
                <circle cx="12" cy="6" r="3"></circle>
                <circle cx="12" cy="18" r="3"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
