import { CURRENT_DEVICE } from '../constants';
import { getCurrentDeviceHandler } from '../utils';

export const getCurrentDevice = () => ({
    type: CURRENT_DEVICE,
    data: getCurrentDeviceHandler(),
});

export const screenResize = () => {
    return (dispatch) => {
        dispatch(getCurrentDevice());
    };
};
