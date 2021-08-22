import React, { useState,useEffect } from "react";
import { Box, Flex, Text, Button, Stack,Badge} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useGetLocalS } from "../../hooks/useGetLocalS";

import animationData from "../../lottie/9844-loading-40-paperplane.json";
import {animate, motion, useAnimation,useMotionValue } from "framer-motion"






const NavBar = (props: any) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
 

  return (
    <NavBarContainer {...props}>
      <Link to="/">
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }: { toggle: any; isOpen: boolean }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({
  children,
  isLast = false,
  ...rest
}: {
  children: any;
  isLast: any;
}) => {
  return (
    <>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </>
  );
};

const MenuLinks = ({ isOpen }: { isOpen: any }) => {

  const {loading,cartItemsFromLocal,cart} = useGetLocalS()
  const controls = useAnimation();
  const [animated, setanimated] = useState(cartItemsFromLocal)
  const length=cartItemsFromLocal
  const x = useMotionValue(0)
 
  const variants = {
    visible: (i:any) => ({
      backgroundColor: ["#60F", "#09F", "#FA0"],
        scale: 2,

      transition: {
        delay: i * 0.3,
      
      },
      
    }),
    hidden: { scale: 1},
  }

  const sequence = async () => {
    await controls.start('visible')
    return await controls.start('hidden')
  }

  useEffect(() => {

    sequence()

  }, [cart])

  

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 4, 0]}
      >
        <Link to="/cart">
          <Box pos="relative">
         
        <Button leftIcon={<BiCart></BiCart>} colorScheme="teal">
      
        </Button>
     
        <motion.div  
 variants={variants}
 animate={controls}
  style={{ position:"absolute",top:-5,padding:0,left:50,colorScheme:"red"}}
>
        <Badge ml="1" fontSize="0.8em" boxSize={5} align="center" colorScheme="red" position={"absolute"} zIndex={100} right="-2" borderRadius="50"  >
          
       
   {!loading ? cartItemsFromLocal.length: null }

  </Badge>
  </motion.div>
  
  </Box>
        </Link>
        <MenuItem isLast>
          <Button
            size="md"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Login
          </Button>
        </MenuItem>
        <MenuItem isLast>
          <Button
            size="md"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({
  children,
  ...props
}: {
  children: any;
  props: any;
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
