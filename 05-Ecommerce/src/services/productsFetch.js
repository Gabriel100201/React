import { apiURL } from "../constants/URLs";
import products from "../mocks/products.json"
import offers from "../mocks/productsOffer.json"
import banner from "../mocks/bannerInfo.json"
export const productsFetch = async () => {
    try {
        const data = products
        return data;
    } catch (error) {
        throw error;
    }
};

export const offersFetch = async () => {
    try {
        /* const response = await fetch(apiURL);
        const data = await response.json(); */
        const data = offers
        return data;
    } catch (error) {
        throw error;
    }
};

export const bannerFetch = async () => {
    try {
        /* const response = await fetch(apiURL);
        const data = await response.json(); */
        const data = banner
        return data;
    } catch (error) {
        throw error;
    }
};