import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface UserState {
  displayName: string
}

// Define the initial state using that type
const initialState: UserState = {
  displayName: '',
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload
    },
  },
});

export const { update } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.displayName;

export default userSlice.reducer;