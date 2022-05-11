import React from "react";
import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import AddnewBtn from "./AddnewBtn";
import Addnew from "./Addnew";
import Heading from "./Heading";
import Sidebar from "./Sidebar/Sidebar";

function Notes() {
  return (
    <>
      <HStack>
        <Sidebar mr={4} />
        <HStack>
          <Text fontSize="5xl" p={4}>
            Notes
          </Text>
          <AddnewBtn />
        </HStack>
        <Divider borderColor="gray.400" />
      </HStack>
    </>
  );
}

export default Notes;

// divider={<StackDivider borderColor="gray.200" />}
// align="flex-start"
