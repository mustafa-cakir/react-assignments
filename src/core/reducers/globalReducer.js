import { CURRENT_DEVICE, TEST_PROPS_1, TEST_PROPS_2, TEST_PROPS_3 } from '../constants';

const initialState = {
    currentDevice: null,
    testProps1: 1,
    testProps2: 2,
    testProps3: 3,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_DEVICE:
            return {
                ...state,
                currentDevice: action.data,
            };
        case TEST_PROPS_1:
            return {
                ...state,
                testProps1: action.data,
            };
        case TEST_PROPS_2:
            return {
                ...state,
                testProps2: action.data,
            };
        case TEST_PROPS_3:
            return {
                ...state,
                testProps3: action.data,
            };
        default:
            return state;
    }
};

export default globalReducer;
