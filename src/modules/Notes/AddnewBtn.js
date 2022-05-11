import React from "react";
import { Button } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

function AddnewBtn() {
  return (
    <Button
      rightIcon={<BiPlus />}
      variant="solid"
      colorScheme="teal"
      size="md"
      fontSize={20}
      p="4"
    >
      Add new
    </Button>
  );
}

export default AddnewBtn;
