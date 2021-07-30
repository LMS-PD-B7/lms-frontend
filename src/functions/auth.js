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