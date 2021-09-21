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
import { MenuLinks } from "./MenuLinks";


const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { Name } = useIsLogged();
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
      <MenuLinks Name={Name} isOpen={isOpen} />
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
