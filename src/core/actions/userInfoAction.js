import axios from 'axios';
import { USER_INFO_SUCCESS, USER_INFO_FAILURE } from '../constants';
import { GET__MASTER__GET_USER_BASIC_INFOS } from '../routes/apis';

export const basicInfosSuccess = (data) => ({
    type: USER_INFO_SUCCESS,
    data: {
        user: data.user,
        globalActionFields: data.globalActionFields,
        userId: data.user.id,
        sellerIdsInBasket: data.globalActionFields.sellerIdsInBasket || [],
    },
});

export const basicInfosFailure = () => ({
    type: USER_INFO_FAILURE,
});

export const basicInfoFetch = () => {
    return (dispatch) =>
        axios
            .get(GET__MASTER__GET_USER_BASIC_INFOS)
            .then((response) => {
                dispatch(basicInfosSuccess(response.data.result));
            })
            .catch(() => {
                dispatch(basicInfosFailure());
            });
};
