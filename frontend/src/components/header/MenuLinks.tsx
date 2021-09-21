import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Button, Stack, Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as MItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon as MIcon,
  MenuCommand,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useGetLocalS } from "../../hooks/useGetLocalS";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import animationData from "../../lottie/9844-loading-40-paperplane.json";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { useIsLogged } from "../../hooks/useIsLogged";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import { AnyAaaaRecord } from "dns";

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
  

export const MenuLinks = ({ isOpen,Name }: { isOpen: any,Name:any }) => {
    console.log('Name',Name);
    
    const { loading, cartItemsFromLocal, cart } = useGetLocalS();
    const controls = useAnimation();
    const [animated, setanimated] = useState(cartItemsFromLocal);
    const length = cartItemsFromLocal;
    const x = useMotionValue(0);
   
    const dispatch = useDispatch()
  
    const variants = {
      visible: (i: any) => ({
        backgroundColor: ["#60F", "#09F", "#FA0"],
        scale: 2,
  
        transition: {
          delay: i * 0.3,
        },
      }),
      hidden: { scale: 1 },
    };
  
    const sequence = async () => {
      await controls.start("visible");
      return await controls.start("hidden");
    };
  
    useEffect(() => {
      sequence();
    }, [cart,dispatch]);
  
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
              <Button leftIcon={<BiCart></BiCart>}      colorScheme="teal"
                  variant="outline"

                  
                  ></Button>
  
              <motion.div
                variants={variants}
                animate={controls}
                style={{
                  position: "absolute",
                  top: -5,
                  padding: 0,
                  left: 50,
                  colorScheme: "red",
                }}
              >
                <Badge
                  ml="1"
                  fontSize="0.8em"
                  boxSize={5}
                  align="center"
                  colorScheme="teal"
                  position={"absolute"}
                  zIndex={100}
                  right="-2"
                  borderRadius="50"
                >
                  {!loading ? cartItemsFromLocal.length : null}
                </Badge>
              </motion.div>
            </Box>
          </Link>
  
          {Name ? null : (
            console.log('cumpli'),
            
            <MenuItem isLast>
              <Link to="/login">
                <Button
                  size="md"
                  rounded="md"
                  colorScheme="teal"
                  variant="outline"
    
              
                  leftIcon={<AiOutlineUserAdd></AiOutlineUserAdd>}
                >
                  Login
                </Button>
              </Link>
            </MenuItem>
          )}
          <MenuItem isLast>
            {Name ? (
  
  <Menu size={'5px'}>
  <MenuButton as={IconButton}
  
  colorScheme="teal"
   icon={<AiOutlineUser></AiOutlineUser>}>
    Profile
  </MenuButton>
  <MenuList
  color="black"
  
  w="10%"
  
  
  >
    <MItem
    
   
    >Profile</MItem>
    <MItem onClick={()=>dispatch(logout())}>Logout</MItem>
   </MenuList>
  </Menu>
  
  
  
           
            ) : (
              <Link to="/register">
              <Button
                size="md"
                rounded="md"
                colorScheme="teal"

          
                leftIcon={<AiOutlineUserAdd></AiOutlineUserAdd>}
              >
                Create Account
              </Button>
              </Link>
            )}
          </MenuItem>
        </Stack>
      </Box>
    );
  };