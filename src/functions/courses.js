import axios from 'axios';
import { getAuthHeader } from './authHeader';

export const getCoursesUser = async (id) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL + "/courses/" + id, getAuthHeader());

        return res.data;
    } catch (err) {
        console.error(err);
    }
}