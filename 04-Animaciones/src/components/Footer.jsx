import Avatar from '../assets/Avatar.svg'
export const Footer = () => {
  return (
    <footer className="w-full mt-32 bg-transparent absolute left-0 px-12 sm:px-32 md:px-36 lg:px-32 xl:px-48 2xl:px-96">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-col lg:flex-row gap-3">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Avatar} className="h-12" alt="Avatar Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-200">Gabriel Funes</span>
          </div>
          <ul className="flex flex-wra justify-center items-center mb-6 text-sm font-medium text-primary-200 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.linkedin.com/in/gabriel-funes-developer/" className="hover:underline me-4 md:me-6">Acerca de mí</a>
            </li>
            <li>
              <a href="mailto:gabrielfunes100202@gmail.com" className="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-primary-50 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-primary-400 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline"></a>Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}