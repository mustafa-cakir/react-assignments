import { USER_INFO_SUCCESS, USER_INFO_FAILURE } from '../constants';

const initialState = {
    userId: null,
    username: null,
    fullname: null,
    email: null,
    phone: null,
};

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.data,
            };
        case USER_INFO_FAILURE:
            return { ...initialState };

        default:
            return state;
    }
};

export default userInfoReducer;
