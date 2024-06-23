const initialState = {
    topics: undefined,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER_TOPICS':
            return {
                ...state,
                topics: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer;
