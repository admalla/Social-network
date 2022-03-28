import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'efa5891e-ea60-45c1-a550-9d1e5affd9f8',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status,
    });
  },
};

export const followAPI = {
  setFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
};

export const unfollowAPI = {
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
};
