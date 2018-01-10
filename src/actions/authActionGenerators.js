import {firebase, googleAuthProvider} from '../firebase/firebase.js';

export
const startLoginAG = () => {
    return (dispatch) => {
        return firebase
            .auth()
            .signInWithPopup(googleAuthProvider);
    }
}

export const loginAG = uid => ({
    type: 'LOGIN', uid
})

export
const startLogoutAG = () => {
    return (dispatch) => {
        return firebase
            .auth()
            .signOut();
    }
}

export const logoutAG = () => ({
    type: 'LOGOUT'
})