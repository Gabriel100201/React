import { Button } from "./Button"

export const Contact = () => {
  return (
    <section classNameName="w-full">
      <div className="py-8 lg:py-20 px-12 2xl:px-48 w-full  bg-primary-500/20 backdrop-blur-sm rounded-2xl ">
        <p className="mb-8 lg:mb-16 text-center text-primary-50 font-semibold sm:text-xl">¡Hola! Estoy emocionado de conectarme contigo. Si tienes alguna pregunta, propuesta o simplemente quieres charlar, no dudes en escribirme a mi correo electrónico. Estaré encantado de recibir tu mensaje y responder tan pronto como sea posible. ¡Hagamos que esta conversación comience! 📧</p>
        <form action="#" className="space-y-8">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-primary-50 dark:text-gray-300">Tú email</label>
            <input type="email" id="email" className="shadow-sm px- bg-alternatyve-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-alternatyve-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="usuario@gmail.com" required />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-primary-50 dark:text-gray-300">Asunto</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-alternatyve-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-alternatyve-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Déjame saber cómo puedo ayudarte" required />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-primary-50 dark:text-gray-400">Tú mensaje</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-alternatyve-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-alternatyve-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje..."></textarea>
          </div>
          <Button>Send</Button>
        </form>
      </div>
    </section>
  )
}