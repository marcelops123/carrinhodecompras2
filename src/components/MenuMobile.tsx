import { UserOutlined } from "@ant-design/icons"
import { HamburgerIcon, SearchIcon  } from "@chakra-ui/icons"
import {  IconButton, InputGroup, InputRightElement, Menu, MenuButton, Input, MenuList, VStack, Button } from "@chakra-ui/react"
import { Avatar } from "antd"


export const MenuMobile = () => {
    return (
        <>
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    backgroundColor='transparent'
    _hover={{}}
    _focus={{}}
  />
  <MenuList >

    <VStack >
    <Avatar size={35} src='https://avatars.githubusercontent.com/u/95228603?v=4' icon={<UserOutlined />} />
    <InputGroup>
              <InputRightElement marginTop={3} pointerEvents='initial' children={<Button _focus={{}} backgroundColor='transparent' _hover={{}} ><SearchIcon fontSize={16} /> </Button>} />
              <Input top={'3'} backgroundColor={'white'} type='text'   placeholder='Buscar produtos, empresas...'></Input>
            </InputGroup>
    </VStack>
  </MenuList>
</Menu>
        </>
    )
}