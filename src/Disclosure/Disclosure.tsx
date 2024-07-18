import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import GoogleLoginButton from "../GoogleLoginButton";
import GitHubLoginButton from "../GitHubLoginButton";

export default function Disclosure() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}> Click to Open Drawer</Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="4px">Basic Drawer</DrawerHeader>
          <DrawerBody display={"flex"} flexDir={"row"}>
            <Box p="20px 20px">
              <GoogleLoginButton />
              <GitHubLoginButton />
            </Box>
            <Box p="20px 20px">
              <GoogleLoginButton />
              <GitHubLoginButton />
            </Box>
            <Box p="20px 20px">
              <GoogleLoginButton />
              <GitHubLoginButton />
            </Box>
            <Box p="20px 20px">
              <GoogleLoginButton />
              <GitHubLoginButton />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
