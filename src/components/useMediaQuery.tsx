import React from "react"
import { Stack, useMediaQuery } from "@chakra-ui/react"
import { NavBarDesktop } from "./NavBarDesktop"
import { NavBarMobile } from "./NavBarMobile"
import { TesteNavBar } from "./TesteNavBar"

export const UseMediaNavBar = () => {
    const [MenorThan1260] = useMediaQuery('(min-width: 1260px)')
    return (
        <Stack>

        {MenorThan1260 ? <TesteNavBar /> : <NavBarMobile />}
        </Stack>
    )
}