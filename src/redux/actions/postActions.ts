import { AppDispatch } from "../store";
import { getTopPosts } from "@/lib/api/postService";

export const fetchTopPosts = () => async (dispatch: AppDispatch) => {
    try {
        const data = await getTopPosts();
        dispatch({ type: 'SET_TOP_POSTS', payload: data });
    } catch (error) {
        console.error('Error fetching top posts:', error);
    }
}
