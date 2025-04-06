import {
  Box,
  HStack,
  Menu,
  Button,
  Icon,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaUserTie, FaBars } from "react-icons/fa";

function Topnav({ title, onOpen }) {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton as={Button} colorScheme="gray">
            <Icon as={FaUserTie} fontSize="24px"></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default Topnav;
