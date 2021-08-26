import axios from 'axios';
import React from 'react'
import { Dispatch } from "redux";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCESS } from '../constants/userConstants';
import { userLogin } from './interfaces/user';


export const login = (email:string, password:string) => {
    return async (dispatch:Dispatch) => {
      dispatch({ type: USER_LOGIN_REQUEST });

      const config ={
        headers: {
            "Content-Type": "application/json",
          }
      }

      
  
      try {
        // const res = await fetch(`/api/users/login`, {
        //   method: "post",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: email,
        //     password: password,
        //   }),
        // });
  
        // const data = await res.json();
  
        // if (data.message) {
        //   throw new Error("Usuario no valido"); //esto es provicional, lo puse por que habia un error hay que solucionar
        // }

        const {data} = await axios.post<userLogin>('/api/users/login',{email,password},config)
  
        dispatch({
          type: USER_LOGIN_SUCESS,
          payload: data,
        });
  
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };

  export const register = (name:string, email:string, password:string) => {
    return async (dispatch:Dispatch) => {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config ={
        headers: {
            "Content-Type": "application/json",
          }
      }
  
      try {

        const {data} = await axios.post('/api/users',{name,email,password},config)

    
        dispatch({
          type: USER_REGISTER_SUCESS,
          payload: data,
        });
  
        //Log in After register
  
        dispatch({
          type: USER_LOGIN_SUCESS,
          payload: data,
        });
  
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };