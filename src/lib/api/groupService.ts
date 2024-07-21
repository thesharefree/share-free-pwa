import apiClient from './apiClient';

export const getGroup = async (id: string) => {
    try {
        const response = await apiClient.get(`/groups/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching group', error);
        throw error;
    }
};

export const createGroup = async (groupData: any) => {
    try {
        const response = await apiClient.post('/groups', groupData);
        return response.data;
    } catch (error) {
        console.error('Error creating group', error);
        throw error;
    }
};

export const searchGroups = async (params: any) => {
    try {
        const response = await apiClient.get(`/group/search`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching groups', error);
        throw error;
    }
};
