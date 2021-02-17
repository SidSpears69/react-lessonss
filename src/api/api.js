import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-kEY": "49a5cb30-11eb-42df-98c9-8b8f0d1ce9c5"
    }
})

const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please use ProfileAPI object");
        return ProfileAPI.getProfile(userId);
    }
}
export const ProfileAPI = {
    getProfile(userId) {
        return instance.get("profile/" + userId);
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId);
    },
    updateStatus(status) {
        return instance.put("profile/status/", {status: status});
    }
}
export const AuthAPI = {
    me() {
        return instance.get("auth/me")
    }
}
export default UsersAPI;
