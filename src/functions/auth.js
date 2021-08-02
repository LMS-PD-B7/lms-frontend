import axios from 'axios';
import { getAuthHeader } from './authHeader';

export const login = (params) => {
    axios.post(process.env.REACT_APP_API_URL + "/auth/login", params).then((res) => {
        console.info(res);

        sessionStorage.setItem("user_token", res.data.token);
        window.location.reload();
    }).catch((err) => {
        console.error(err);
    })
}

export const register = (params) => {
    axios.post(process.env.REACT_APP_API_URL + "/auth/register", params).then((res) => {
        console.info(res);

        login(params);
    }).catch((err) => {
        console.error(err);
    })
}

export const getAccount = async (user_id) => {
    try {
        const result = await axios.get(process.env.REACT_APP_API_URL + "/auth/" + user_id, getAuthHeader());

        return result.data;
    } catch(err) {
        console.error(err);
    }
}

export const updateAccount = async (params) => {
    axios.put(process.env.REACT_APP_API_URL + "/auth/update/", params, getAuthHeader()).then((res) => {
        console.info(res);

        window.location.reload();
    }).catch((err) => {
        console.error(err);
    });
}

export const logOut = () => {
    sessionStorage.removeItem("user_token");
}