import React from "react";
import {} from "@chakra-ui/react";
import { RichTextEditor } from "@mantine/rte";
import { useState } from "react";
import "./editor.css";

function Addnew() {
  const [value, onChange] = useState("");
  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      style={{ margin: 16 }}
      classNames={{
        root: "your-root-class",
        toolbar: "your-toolbar-class",
        toolbarInner: "your-toolbarInner-class",
        toolbarGroup: "your-toolbarGroup-class",
        toolbarControl: "your-toolbarControl-class",
      }}
    />
  );
}
export default Addnew;
