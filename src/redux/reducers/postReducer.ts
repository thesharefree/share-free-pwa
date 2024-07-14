const initialState = {
    posts: undefined,
};

const postReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_TOP_POSTS':
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    }
};

export default postReducer;
