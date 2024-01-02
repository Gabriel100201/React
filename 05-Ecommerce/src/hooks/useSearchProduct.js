import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { useParams } from 'react-router-dom';
import products from "../mocks/products.json"

export const useSearchProduct = () => {
    const { infoProduct } = useParams();
    let { state } = useLocation();
    const [productInfo, setProductInfo] = useState(state || {})

    useEffect(() => {
        const foundProduct = products.find((product) => product.Nombre === infoProduct);
        if (!foundProduct) {
            return
        }
        const renamedProductInfo = {
            name: foundProduct?.Nombre || '',
            description: foundProduct?.Descripcion || '',
            imageUrl: foundProduct?.Url || '',
            price: foundProduct?.Precio || 0,
            off: foundProduct?.Off || 0,
            category: foundProduct?.Category || '',
        };
        
        setProductInfo(renamedProductInfo || {});
    }, [state])

    return { productInfo }
}