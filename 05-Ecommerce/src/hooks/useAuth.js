import { useContext, useState } from "react"
import users from "../mocks/users.json"
import { LoginContext } from "../context/login"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const useAuth = () => {
    const navigate = useNavigate()
    const { isLogged, setLogged, setUnLogged } = useContext(LoginContext)
    const [loginError, setLoginError] = useState(null)

    const tryAuth = ({ mail, password }) => {
        const user = users.users.find((user) => user.mail === mail);
        if (user && user.password === password) {
            setLoginError(null)
            setLogged();
            navigate("/")
            toast.success("Sesión iniciada con exito")
        } else {
            const error = user ? "Contraseña incorrecta" : "No se encontró el usuario";
            setLoginError(error)
            toast.warning(error)
        }
    }
    
    return {
        isLogged,
        tryAuth,
        loginError
    }
}