import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface UserState {
  displayName: string,
  email: string
}

// Define the initial state using that type
const initialState: UserState = {
  displayName: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUser: (state, action: PayloadAction<{ displayName?: string|null, email?: string|null }>) => {
      state.displayName = action.payload.displayName||'';
      state.email = action.payload.email||'';
    },
    removeUser: (state) => {
      state.displayName = '';
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;