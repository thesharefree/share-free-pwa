import apiClient from './apiClient';

export const getMe = async () => {
    try {
        const response = await apiClient.get(`/users/me`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user', error);
        throw error;
    }
};

export const getUser = async (id: string) => {
    try {
        const response = await apiClient.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user', error);
        throw error;
    }
};
