import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/login";

export const Profile = () => {
  const { infoLoged, setUnLogged } = useContext(LoginContext);
  const [ocultedPassword, setOcultedPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setOcultedPassword(!ocultedPassword);
  };

  const handleCloseSession = () => {
    setUnLogged();
  };

  return (
    <section className="flex min-h-[60vh] justify-center px-7 py-32">
      <div className="flex w-full max-w-[700px] flex-col items-center justify-center gap-3 rounded-3xl bg-primary-100 px-5 py-12">
        <h1 className="text-2xl font-semibold text-primary-900">
          Sesión activa
        </h1>
        <span>Mail: {infoLoged.mail}</span>
        <div className="flex gap-5">
          <span className="flex">
            Contraseña:{" "}
            {ocultedPassword
              ? "*".repeat(infoLoged.password.length)
              : infoLoged.password}
          </span>
          <button
            className="rounded-2xl bg-primary-500 px-2 py-1 text-primary-100"
            onClick={togglePasswordVisibility}
          >
            {ocultedPassword ? "Mostrar" : "Ocultar"}
          </button>
        </div>
        <button
          className="mt-7 rounded-3xl bg-red-600/70 px-2 py-1 text-primary-100"
          onClick={handleCloseSession}
        >
          Cerrar Sesión
        </button>
      </div>
    </section>
  );
};
