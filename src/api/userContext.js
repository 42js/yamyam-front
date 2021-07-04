import React, { useContext, useReducer } from "react";

export const initialUserState = {
  isLogin: false,
  token: ''
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function userReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
        token: action.token
      };
    case LOGOUT:
      return {
        ...initialUserState
      };
    default:
      return state;
  }
}

export const UserStateContext = React.createContext(null);
export const UserDispatchContext = React.createContext(null);

export function UserProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  return (
    <UserStateContext.Provider value={userState}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) {
    throw new Error('UserState is undefined');
  }
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error('UserDispatch is undefined');
  }
  return dispatch;
}

export function useUserReducer() {
  return [useUserState(), useUserDispatch()];
}