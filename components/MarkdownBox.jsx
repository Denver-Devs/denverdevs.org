import { Box, useColorModeValue } from "@chakra-ui/react";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";
import React from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false });

const MarkdownBox = ({ onChange, onBlur, value }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.000", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  return (
    <Box
      sx={{
        ".w-md-editor": {
          bg: bg,
          color: color,
          boxShadow: "none",
          borderWidth: "1px",
          borderRadius: "6px",
          borderColor: borderColor,
        },
        ".w-md-editor-text-pre, .wmde-markdown-color code[class*='language-'], .w-md-editor-text-pre .title": {
          color: color,
        },
      }}
    >
      <MDEditor onChange={onChange} onBlur={onBlur} value={value} hideToolbar={true} height={400} minHeight={300} />
    </Box>
  );
};

export default MarkdownBox;
