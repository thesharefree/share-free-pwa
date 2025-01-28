const initialState = {
    searchFilter: undefined,
    searchedGroups: undefined,
    selectedGroup: undefined,
};

const groupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SEARCH_FILTER':
            return {
                ...state,
                searchFilter: action.payload,
            }
        case 'SET_SEARCHED_GROUPS':
            return {
                ...state,
                searchedGroups: action.payload,
            }
        case 'SET_SELECTED_GROUP':
            return {
                ...state,
                selectedGroup: action.payload,
            }
        default:
            return state;
    }
};

export default groupReducer;
