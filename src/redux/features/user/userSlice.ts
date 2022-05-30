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
    addUser: (state, action: PayloadAction<{ displayName: string, email: string }>) => {
      state.displayName = action.payload.displayName;
    },
    updateUser: (state, action: PayloadAction<{ displayName: string, email?: string }>) => {
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.displayName = '';
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.displayName;

export default userSlice.reducer;