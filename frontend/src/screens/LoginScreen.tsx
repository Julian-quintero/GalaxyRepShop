import React,{useState,useEffect} from "react";
import {

  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Center,
  Input,
  Flex,
  Button
} from "@chakra-ui/react";
import {useDispatch} from 'react-redux'
import { login } from "../actions/userActions";
import { 
  RouteComponentProps
} from "react-router-dom";
import { useIsLogged } from "../hooks/useIsLogged";



export const LoginScreen = ({location,history}:RouteComponentProps) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const {Name} = useIsLogged()




  const submitHandler = (e:React.FormEvent) =>{
    e.preventDefault()

    dispatch(login(email,password))
    

  }

  useEffect(() => {

    if(Name){
        //si estoy logeado voy a redirecion
        history.push(redirect)
    }
   
}, [history,Name,redirect])


  return (
    <Center
   
    >
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="10px"
     
      >
        <Flex direction="column" align="center" justify="center" textAlign="center" >
            <form onSubmit={(e)=>submitHandler(e)
            }>
          <FormControl id="email" isRequired  >
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
  
          </FormControl>

          <FormControl id="password" isRequired mt={2}>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"        
            type="submit"
          >
            Submit
          </Button>
          </form>
        </Flex>
      </Box>
    </Center>
  );
};
