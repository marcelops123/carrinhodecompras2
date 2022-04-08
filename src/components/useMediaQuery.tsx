import React from "react"
import { Stack, useMediaQuery } from "@chakra-ui/react"
import { NavBarMobile } from "./NavBarMobile"
import { NavBarDesktop } from "./NavBarDesktop"

export const UseMediaNavBar = () => {
    const [MenorThan1260] = useMediaQuery('(min-width: 1136px)')
    return (
        
        <Stack>

        {MenorThan1260 ? <NavBarDesktop /> : <NavBarMobile />}
        </Stack>
    )
}
///teste