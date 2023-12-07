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
        <section className="flex px-7 justify-center min-h-[60vh] py-32">
            <div className="w-full bg-primary-100 max-w-[700px] py-12 px-5 rounded-3xl flex flex-col gap-3 justify-center items-center">
                <h1 className="font-semibold text-primary-900 text-2xl">Sesión activa</h1>
                <span>Mail: {infoLoged.mail}</span>
                <div className="flex gap-5">
                    <span className="flex">
                        Contraseña:{" "}
                        {ocultedPassword ? "*".repeat(infoLoged.password.length) : infoLoged.password}
                    </span>
                    <button className="bg-primary-500 text-primary-100 px-2 py-1 rounded-2xl" onClick={togglePasswordVisibility}>
                        {ocultedPassword ? "Mostrar" : "Ocultar"}
                    </button>
                </div>
                <button className="bg-red-600/70 mt-7 rounded-3xl px-2 py-1 text-primary-100" onClick={handleCloseSession}>Cerrar Sesión</button>
            </div>
        </section>
    );
};