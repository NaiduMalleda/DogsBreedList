import { userConstants } from '../_constants';
import { BreedService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAllBreeds,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        BreedService.login(username, password)
            .then(
                item => { 
                    dispatch(success(item));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(item) { return { type: userConstants.LOGIN_REQUEST, item } }
    function success(item) { return { type: userConstants.LOGIN_SUCCESS, item } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    BreedService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        BreedService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAllBreeds() {
    return dispatch => {
        dispatch(request());

        BreedService.getAllBreeds()
            .then(
                breeds => dispatch(success(breeds)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(breeds) { return { type: userConstants.GETALL_SUCCESS, breeds } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
