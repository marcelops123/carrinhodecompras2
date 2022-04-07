import React from "react"
import { Button, extendTheme, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    
        return (
          <header>
            <Button   _focus={{ boxShadow: "none", }} backgroundColor='transparent' _hover={{color:'none', backgroundColor:'transparent'}}    onClick={toggleColorMode}>
            {colorMode === 'light'? <SunIcon/> : <MoonIcon/>  }
            </Button>
          </header>
        )
      

}       