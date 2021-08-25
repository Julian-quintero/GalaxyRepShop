
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AlreadyLogged = ({
    isAuthenticated,
    component:Component, //esto es para crear un componente en Mayuscula
    ...rest //recibo el resto de parametros
}:any) => {

    return (
        <Route {...rest} component={(props:any) => (
            (isAuthenticated)  ? <Redirect to='/' /> : <Component {...props}/> 
        )}/>  

    )

}

export default AlreadyLogged