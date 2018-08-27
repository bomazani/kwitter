export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = ( { token, id } ) => {
    return {
        type: LOGIN_USER,
        token,
        id  
    }
}