import { useEffect, useState } from "react"
import { bannerFetch } from "../services/productsFetch"

export const useBanner = () => {

    useEffect(() => {
        getProducts();
    }, []);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        setLoading(true)
        try {
            const productsData = await bannerFetch()
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