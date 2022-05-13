import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { MdMenu, MdOutlineEditNote } from "react-icons/md";
import NavItem from "./NavItem";

function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos={"sticky"}
      // left="5"
      h={"100vh"}
      // marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "300px"}
      flexDirection="column"
      justifyContent={"space-between"}
    >
      <Flex
        p={"5%"}
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background={"none"}
          mt="5"
          _hover={{ background: "none" }}
          icon={<MdMenu />}
          onClick={() => {
            if (navSize === "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={MdOutlineEditNote}
          title="Notes"
          description="Hello"
        />
      </Flex>

      <Flex
        p="5%"
        flexDirection="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb="4"
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Lourem ipsum
            </Heading>
            <Text textAlign="start">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;

// TODO: line43 pass the whole menu from a different file which can be changed for just menu
