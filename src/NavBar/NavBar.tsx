import styled, { css } from "styled-components";
import { Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { StyledNavBar } from "./Nav";
import Menu2 from "../Menu2";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem("lang", lang);
  };
  return (
    <StyledNavBar color="pink">
      <Menu2></Menu2>
      <Box>
        <Button onClick={() => handleChangeLang("en")}> EN </Button>
        <Button onClick={() => handleChangeLang("es")}> ES </Button>
      </Box>
    </StyledNavBar>
  );
};

export default NavBar;
