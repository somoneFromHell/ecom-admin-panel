import { APIClient } from "./api_helper";

const api = new APIClient();
const baseUrl = process.env.BASE_API_URL;

// Authentication Methods
export const postLogin = data => api.create("/auth/login/", data);
export const getLoggedinUser = (id) => api.get("/user/"+id)

export const postForgetPassword = data => api.create("/auth/forget-password/",data)



// users Methods
export const fatchUsers = () => api.get("user")
export const addNewUser = (data) => api.create("user",data)
export const updateUser = (id,data) => api.get("user/"+id,data)
