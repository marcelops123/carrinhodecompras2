import React from "react"
import { Button, extendTheme, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const tema = extendTheme({
  breakpoints: {
    values: {
     telagrande: 1800,
      md: 900,
      xl: 1536,
    },
  },
});