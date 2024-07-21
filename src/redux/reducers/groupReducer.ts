const initialState = {
    searchFilter: undefined,
    groups: undefined,
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
                groups: action.payload,
            }
        default:
            return state;
    }
};

export default groupReducer;
