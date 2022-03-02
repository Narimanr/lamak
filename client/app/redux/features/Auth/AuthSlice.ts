import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../services/auth';
import type { RootState } from '../../store';

type AuthState = {
    email: string | null;
    id: string | null;
}



const authSlice = createSlice({
    name: 'auth',
    initialState: {email: null, id: null} as AuthState,
    reducers: {
        // setCredentials
        setCredentials: (
            state,
            { payload: { email, id } }: PayloadAction<{ email: string; id: string }>
    ) => {
            state.email = email
            state.id = id
        },
        unsetCredentials: (
            state
        ) => {
            state.email = null
            state.id = null
        }
    }
});

export const { setCredentials, unsetCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => { state.auth.email, state.auth.id }
