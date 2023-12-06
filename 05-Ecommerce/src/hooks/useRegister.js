import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import users from "../mocks/users.json"

export const useRegister = () => {
    const navigate = useNavigate()
    const [registerError, setRegisterError] = useState(null)

    const tryRegister = ({ mail, password }) => {
        if (false) {
            navigate("/")
            toast.success("El registro de nuevos usuarios aún no esta disponible")
        } else {
            setRegisterError("El registro de nuevos usuarios aún no esta disponible")
            toast.warning("El registro de nuevos usuarios aún no esta disponible")
        }
    }

    return {
        tryRegister,
        registerError
    }
}