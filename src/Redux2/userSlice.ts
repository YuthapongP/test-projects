import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Users {
  name: string;
}

interface UsersState {
  users: Users[];
}

const initialState: UsersState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<Users>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
