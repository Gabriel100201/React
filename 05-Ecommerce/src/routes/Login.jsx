import { useEffect, useRef, useState } from "react"
import { animeLogin } from "../animations/login";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const { isLogged, tryAuth, loginError } = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [register, isRegister] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    tryAuth({ mail: emailValue, password: passwordValue })
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleRegister = () => {
    isRegister(!register)
  }
  useEffect(() => {
    animeLogin()
  }, [register])


  return (
    <section className="my-12">
      {
        !register &&
        <div className="flex items-center justify-center amLogin">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
              <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                Inicia Sesión
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  v-model="form.email"
                  type="email"
                  required
                  autoFocus
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  ref={passwordRef}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="form.password"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Inicia Sesión</button>
                <span onClick={handleRegister}
                  className="inline-block hover:cursor-pointer align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                >
                  Registrarse
                </span>
              </div>
            </form>
          </div>
        </div>
      }
      {
        register &&
        <div className="flex items-center justify-center amLogin">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
              <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                Registro
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  v-model="form.email"
                  type="email"
                  required
                  autoFocus
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  ref={passwordRef}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="form.password"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Registarse</button>
                <span onClick={handleRegister}
                  className="inline-block hover:cursor-pointer align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                >
                  Inicia Sesión
                </span>
              </div>
            </form>
          </div>
        </div>
      }
    </section>
  )
}