import { createActions, handleActions } from 'redux-actions';

interface  AuthState {
    token: string | null;
    loading: boolean;
    error: Error | null;
}

const initalState: AuthState = {
    token: null,
    loading: false,
    error: null,
};

const prefix = "my-books/auth";

export const { pending, success, fail } = createActions(
    "PENDING",
    "SUCCESS",
    "FAIL",
    { prefix }
);

const reduceer = handleActions<AuthState, string> ({
    PENDING: (state) => ({
        ... state,
        loding: true,
        error: null,
    }),
    SUCCESS: (state, action) => ({
        token: action.payload,
        loding: false,
        error: null,
    }),
    FAIL: (state, action: any) => ({
        ... state,
        loding: false,
        error: action.payload,
    }),
}, initalState, { prefix });

export default reduceer

//saga

export function* authSaga(){
    
}