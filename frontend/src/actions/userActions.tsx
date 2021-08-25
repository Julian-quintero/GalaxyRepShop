import axios from 'axios';
import React from 'react'
import { Dispatch } from "redux";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS } from '../constants/userConstants';
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