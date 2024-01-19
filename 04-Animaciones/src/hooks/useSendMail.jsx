import { useState } from "react"
import { ENDPOINT_TO_SEND_EMAIL, MAIL_TO_SEND } from "../../config/email"
import { toast } from 'sonner'

export const useSendMail = () => {
  const [data, setData] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchToEndpoint = async ({ textForm, subjectForm, emailForm }) => {
    setLoading(true)
    try {
      const response = await fetch(ENDPOINT_TO_SEND_EMAIL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: MAIL_TO_SEND,
          from: emailForm,
          subjet: subjectForm,
          text: textForm,
        }),
      });

      if (!response.ok) {
        if (response.status == 429) {
          throw new Error("Debes esperar 5 minutos para enviar otro mensaje")
        }
        else {
          throw new Error("Ocurrió un error inesperado, intentelo en unos minutos")
        }
      }

      const result = await response.json()
      setData(result)
      toast.success("¡Correo enviado con éxito!");
    }
    catch (err) {
      setError(err)
      toast.error(err.message || "Ocurrió un error inesperado");
    }
    finally {
      setLoading(false)
    }
  }
  return { data, error, loading, fetchToEndpoint }
}