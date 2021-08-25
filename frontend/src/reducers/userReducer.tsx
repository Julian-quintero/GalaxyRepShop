import React from 'react'
import { userActionLogin, userLogin } from '../actions/interfaces/user';
import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS } from '../constants/userConstants';


export const userLoginReducer = (state = {}, action:userActionLogin) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
          loading: true,
        };
  
      case USER_LOGIN_SUCESS:
        return {
          loading: false,
          userInfo: action.payload,
        };
  
      case USER_LOGIN_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case USER_LOGIN_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };