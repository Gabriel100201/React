import SoccerLogo from '../assets/soccer-icon.png'
export const Footer = () => {
  return (
    <footer className="bg-primary-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src={SoccerLogo}
                className="me-3 h-8"
                alt="FlowBite Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-primary-50">
                Ball Shop
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-primary-50">
                Contacto
              </h2>
              <ul className="font-medium text-primary-100 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/Gabriel100201"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gabriel-funes-developer/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-primary-50">
                Legal
              </h2>
              <ul className="font-medium text-primary-100 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="text-sm text-primary-100 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Gabriel Funes
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};
