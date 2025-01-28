import { AppDispatch } from "../store";
import { getGroup, searchGroups } from "@/lib/api/groupService";

export const searchGroupsByKeywords = (keywords: string[]) => async (dispatch: AppDispatch) => {
    try {
        var params = {
            'keywords': keywords.join(" "),
        };
        const data = await searchGroups(params);
        dispatch({ type: 'SET_SEARCHED_GROUPS', payload: data });
    } catch (error) {
        console.error('Error searching groups:', error);
    }
}

export const fetchGroup = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const data = await getGroup(id);
        dispatch({ type: 'SET_SELECTED_GROUP', payload: data });
    } catch (error) {
        console.error('Error searching groups:', error);
    }
}
