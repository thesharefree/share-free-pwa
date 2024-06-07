const initialState = {
    loggedInUser: undefined,
    isNewUser: false,
    phoneNumber: undefined,
    verificationId: undefined,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_LOGGED_IN_USER':
            return {
                ...state,
                loggedInUser: action.payload,
                isNewUser: false,
            };
        case 'SET_NEW_USER':
            return {
                ...state,
                loggedInUser: undefined,
                isNewUser: true,
            };
        case 'SET_OTP_VERIFICATION_ID':
            return {
                ...state,
                phoneNumber: action.payload.phoneNumber,
                verificationId: action.payload.verificationId,
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
