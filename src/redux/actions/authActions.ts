import { getMe } from "@/lib/api/userService";

export const fetchLoggedInUser = () => async (dispatch) => {
    try {
        const data = await getMe();
        dispatch({ type: 'SET_LOGGED_IN_USER', payload: data });
    } catch (error) {
        dispatch({ type: 'SET_NEW_USER' });
        console.error('Error fetching user:', error);
    }
};
