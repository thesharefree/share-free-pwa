const initialState = {
    topics: undefined,
    posts: undefined,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER_TOPICS':
            return {
                ...state,
                topics: action.payload,
            }
        case 'SET_USER_POSTS':
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer;
