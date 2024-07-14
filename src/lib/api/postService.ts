import Post from '../types/Post';
import apiClient from './apiClient';

export const getPost = async (id: string) => {
    try {
        const response = await apiClient.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post', error);
        throw error;
    }
};

export const createPost = async (postData: Post) => {
    try {
        const response = await apiClient.post('/posts', postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post', error);
        throw error;
    }
};

export const likePost = async (postId: string) => {
    try {
        const response = await apiClient.post(`/posts/like/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error liking post', error);
        throw error;
    }
};

export const supportPost = async (postId: string) => {
    try {
        const response = await apiClient.post(`/posts/support/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error supporting post', error);
        throw error;
    }
};
