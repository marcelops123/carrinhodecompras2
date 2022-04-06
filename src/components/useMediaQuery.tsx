import React from "react"
import { Stack, useMediaQuery } from "@chakra-ui/react"
import { NavBarMobile } from "./NavBarMobile"
import { NavBarDesktop } from "./NavBarDesktop"
import { AnimationPage } from "./AnimationPage"

export const UseMediaNavBar = () => {
    const [MenorThan1260] = useMediaQuery('(min-width: 1260px)')
    return (
       <AnimationPage>


        {MenorThan1260 ? <NavBarDesktop /> : <NavBarMobile />}
       </AnimationPage>
    )
}