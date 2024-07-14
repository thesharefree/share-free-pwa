import { getMyPosts, getMyTopics } from "@/lib/api/userService";
import { AppDispatch } from "../store";

export const fetchUserTopics = () => async (dispatch: AppDispatch) => {
    try {
        const data = await getMyTopics();
        dispatch({ type: 'SET_USER_TOPICS', payload: data });
    } catch (error) {
        console.error('Error fetching user topics:', error);
    }
}

export const fetchUserPosts = () => async (dispatch: AppDispatch) => {
    try {
        const data = await getMyPosts();
        dispatch({ type: 'SET_USER_POSTS', payload: data });
    } catch (error) {
        console.error('Error fetching user posts:', error);
    }
}
