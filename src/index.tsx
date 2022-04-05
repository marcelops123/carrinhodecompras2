import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { UseMediaNavBar } from "./components/useMediaQuery";

ReactDOM.render(
 <ChakraProvider theme={theme}>

   <UseMediaNavBar/>
   <Main/>
 </ChakraProvider>,
  document.getElementById("root"),
)

  