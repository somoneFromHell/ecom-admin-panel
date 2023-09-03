import { APIClient } from "./api_helper";

const api = new APIClient();
const baseUrl = process.env.BASE_API_URL;

// Authentication Methods
export const postLogin = data => api.create("/auth/login/", data);
export const getLoggedinUser = (id) => api.get("/user/"+id)

// profile Methods
export const postForgetPassword = data => api.create("/auth/forget-password/",data)
export const postChangePassword = data => api.create("/auth/reset-password/",data)
export const editProfileData = data => api.put("/auth/edit-profile/",data)


// users Methods
export const getUsers = () => api.get("user")
export const addNewUser = (data) => api.create("user",data)
export const updateUser = (id,data) => api.get("user/"+id,data)
