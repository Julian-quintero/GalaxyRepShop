import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export const useIsLogged = () => {

    const userLogin = useSelector((state:any) => state.userLogin);
    const { userInfo } = userLogin;
    

    const [Name, setName] = useState();

    useEffect(() => {

        if (userInfo) {
            setName(userInfo.name)
        }else{
            setName(undefined)
        }

       
      
    }, [userInfo,userInfo?.name])


    return {
        userInfo,
        Name
    }
}
