import { useEffect, useState } from "react"
import { offersFetch } from "../services/productsFetch"

export const useOffers = () => {

    useEffect(() => {
        getProducts();
    }, []);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        setLoading(true)
        try {
            const productsData = await offersFetch()
            setProducts(productsData)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }
    return {
        products, loading, error, getProducts
    }
}