import axios from "../axios";


export const useAuth = {
    LOGIN: async (data) => await axios.post('auth/login', { ...data })
}