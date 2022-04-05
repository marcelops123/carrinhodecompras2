import React from "react"
import { Stack, useMediaQuery } from "@chakra-ui/react"
import { NavBarDesktop } from "./NavBarDesktop"
import { NavBarMobile } from "./NavBarMobile"
import { TesteNavBar } from "./TesteNavBar"
import { AnimationPage } from "./AnimationPage"

export const UseMediaNavBar = () => {
    const [MenorThan1260] = useMediaQuery('(min-width: 1260px)')
    return (
       <AnimationPage>


        {MenorThan1260 ? <TesteNavBar /> : <NavBarMobile />}
       </AnimationPage>
    )
}