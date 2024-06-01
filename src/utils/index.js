import axios from "axios";

const productUrl = "https://online-json-server-api.up.railway.app/project/66594f7b4a1552ef80d138b1"

export const customFetch = axios.create({
    baseURL: productUrl,
})