import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import types
import { User, UserErrors } from "@/types/user";
import { validateUserData } from "@/config/validation";



interface UserState {
    users: User[];
    editingUser: User | null;
    userData: User | null;
    errors: UserErrors;
}

const initialState: UserState = {
    users: [],
    editingUser: null,
    userData: null,
    errors: {},
};


export const users = createSlice({
    name: 'user',
    initialState,
    reducers: {

        addUser: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            const errors = validateUserData(user);

            if (Object.values(errors).every(error => typeof error === 'string' ? !error : Object.values(error).every(err => !err))) {
                console.log("user01")
                user.id = state.users.length + 1;
                state.users.push(user);
                state.errors = {} as UserErrors; // Clear errors if user is added successfully
            } else {
                console.log("user02")
                state.errors = errors;
            }
        },

        setEditingUser(state, action: PayloadAction<User>) {
            state.editingUser = action.payload;
        },

        getUserData(state, action: PayloadAction<User>) {
            state.userData = action.payload;
        },


        updateUser(state, action: PayloadAction<User>) {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },


        clearEditingUser(state) {
            state.editingUser = null;
        },


        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },

        resetErrors: (state) => {
            state.errors = {};
        },
    },
});


export const {
    addUser, updateUser, deleteUser, resetErrors, setEditingUser, clearEditingUser, getUserData
} = users.actions
export default users.reducer













