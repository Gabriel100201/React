import { useEffect, useState } from "react"
import { productsFetch } from "../services/productsFetch"

export const useProducts = () => {

    useEffect(() => {
        getProducts();
    }, []);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        setLoading(true)
        try {
            const productsData = await productsFetch()
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