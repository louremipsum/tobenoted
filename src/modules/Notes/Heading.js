import React, { useState } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from "@chakra-ui/react";

function Heading() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  // console.log(value);
  return (
    // Click the text to edit
    <Editable placeholder="Untitled">
      <EditablePreview ml="4" fontSize="2xl" fontWeight="semibold" />
      {/* for the onChange one make it so it only updates the value on pressing enter */}
      <Input
        as={EditableInput}
        value={value}
        onChange={handleChange}
        variant="flushed"
        ml="4"
        size="md"
      />
    </Editable>
  );
}

export default Heading;
