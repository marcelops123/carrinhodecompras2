import React from "react"
import { Stack, useMediaQuery } from "@chakra-ui/react"
import { NavBarMobile } from "./Mobile"
import { NavBarDesktop } from "./Desktop"

export const UseMediaNavBar = () => {
    const [MenorThan1260] = useMediaQuery('(min-width: 1136px)')
    return (

        <Stack>

            {MenorThan1260 ? <NavBarDesktop /> : <NavBarMobile />}
        </Stack>
    )
}
///teste