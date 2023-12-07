import { useEffect, useRef, useState } from "react";
import { animeLogin } from "../animations/login";
import { useAuth } from "../hooks/useAuth";
import { useRegister } from "../hooks/useRegister";

export const Login = () => {
  const { isLogged, tryAuth, loginError } = useAuth();
  const { tryRegister, registerErrir } = useRegister();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [register, isRegister] = useState(false);

  const handleLoggin = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    tryAuth({ mail: emailValue, password: passwordValue });
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    tryRegister({ mail: emailValue, password: passwordValue });
  };

  const handleView = () => {
    isRegister(!register);
  };
  useEffect(() => {
    animeLogin();
  }, [register]);

  return (
    <section className="my-12">
      {!register && (
        <div className="amLogin flex items-center justify-center">
          <div className="w-full max-w-md">
            <form
              onSubmit={handleLoggin}
              className="mb-4 rounded bg-white px-12 pb-8 pt-6 shadow-lg"
            >
              <div className="mb-4 flex justify-center border-b-2 py-2 text-2xl text-gray-800">
                Inicia Sesión
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-normal text-gray-700"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  defaultValue={"user1234@gmail.com"}
                  ref={emailRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
                  className="mb-2 block text-sm font-normal text-gray-700"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  defaultValue={"1234"}
                  ref={passwordRef}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  v-model="form.password"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="inline-block rounded bg-blue-500 px-4 py-2 text-white shadow-lg hover:bg-blue-600 focus:bg-blue-700"
                  type="submit"
                >
                  Inicia Sesión
                </button>
                <span
                  onClick={handleView}
                  className="inline-block align-baseline text-sm font-normal text-blue-500 hover:cursor-pointer hover:text-blue-800"
                >
                  Registrarse
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
      {register && (
        <div className="amLogin flex items-center justify-center">
          <div className="w-full max-w-md">
            <form
              onSubmit={handleRegister}
              className="mb-4 rounded bg-white px-12 pb-8 pt-6 shadow-lg"
            >
              <div className="mb-4 flex justify-center border-b-2 py-2 text-2xl text-gray-800">
                Registro
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-normal text-gray-700"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
                  className="mb-2 block text-sm font-normal text-gray-700"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  ref={passwordRef}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  v-model="form.password"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="inline-block rounded bg-blue-500 px-4 py-2 text-white shadow-lg hover:bg-blue-600 focus:bg-blue-700"
                  type="submit"
                >
                  Registarse
                </button>
                <span
                  onClick={handleView}
                  className="inline-block align-baseline text-sm font-normal text-blue-500 hover:cursor-pointer hover:text-blue-800"
                >
                  Inicia Sesión
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
