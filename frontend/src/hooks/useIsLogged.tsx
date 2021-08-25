import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export const useIsLogged = () => {

    const userLogin = useSelector((state:any) => state.userLogin);
    const { userInfo } = userLogin;

    console.log(userInfo);
    

    const [Name, setName] = useState();

    useEffect(() => {

        if (userInfo) {
            setName(userInfo.name)
        }

       
      
    }, [userInfo])


    return {
        userInfo,
        Name
    }
}
