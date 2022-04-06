import React from "react"
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, VStack, Text, Stack, Divider } from "@chakra-ui/react"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { SearchIcon } from "@chakra-ui/icons"
import { Avatar, Dropdown, Menu } from "antd"
import { CarroselProdutos } from "./Carrossel Produtos"
import { Produtos } from "./Produtos"
import '../styles/Globalcss.css'
import "@fontsource/poppins"
import "@fontsource/quando"
import "@fontsource/poly"
import '@fontsource/roboto'

const menu = (
  <Menu>
    <Menu.Item>
      <a>
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a>
        2nd menu item
      </a>
    </Menu.Item>



  </Menu>
)

export const NavBarDesktop = () => {
  return (


    <>
      <HStack id="testes" boxShadow='0px 0px 10px rgba(50, 50, 50, 0.8)' padding={0} backgroundColor={'#3d88eb'}>
        <Image marginLeft={3} width={'12%'} src='logo branca.svg'></Image>
        <Spacer />
        <SimpleGrid columns={2}  >
          <VStack align={'left'}>
            <InputGroup paddingLeft={'15px'}>
              <InputRightElement paddingTop={3} pointerEvents='all' children={<Button _focus={{}} backgroundColor='transparent' _hover={{}} ><SearchIcon /> </Button>} />
              <Input top={'2'} fontSize={13} borderRadius='6px' backgroundColor={'white'} height='38px' width='600px' type='text' placeholder='Buscar produtos, empresas...'></Input>
            </InputGroup>


            <HStack align={'left'}>
              <Dropdown overlayStyle={{ boxSizing: 'inherit' }} overlay={menu} placement="bottom" arrow>
                <Button  fontFamily={'Poly, serif'} fontSize={16} _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Categorias</Button>
              </Dropdown>
              <Dropdown overlay={menu} placement="bottom" arrow>
                <Button fontFamily={'Poly, serif'} fontSize={16} _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Empresas</Button>
              </Dropdown>
            </HStack>
          </VStack>
        </SimpleGrid>
        <Spacer paddingX={100} />
        <HStack marginTop={-4} paddingRight='2%'>
          <Button _hover={{}} _focus={{}} color='white' fontSize={30} backgroundColor='transparent' marginTop={1}  ><ShoppingCartOutlined /></Button>
          <Avatar size={40} src='https://avatars.githubusercontent.com/u/95228603?v=4' icon={<UserOutlined />} />
        </HStack>
      </HStack>

      <Stack id="testez">

        <CarroselProdutos />

        <VStack justify={'center'}>
          <Text fontFamily={' Quando, serif'} ><b>NOSSAS CATEGORIAS</b></Text>
          <Divider paddingY={2} borderColor={'ButtonShadow'}/>
          <HStack paddingTop={3} spacing={100}>


            <Avatar style={{ cursor: 'pointer' }} size={100} src='https://http2.mlstatic.com/D_Q_NP_974266-MLA48254501676_112021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size={100} src='https://http2.mlstatic.com/D_Q_NP_707970-MLA46081133887_052021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size={100} src='https://http2.mlstatic.com/D_Q_NP_895808-MLB47860103489_102021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size={100} src='https://http2.mlstatic.com/D_Q_NP_738716-MLB49182934470_022022-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size={100} src='https://http2.mlstatic.com/D_Q_NP_837255-CBT46242013787_062021-AB.webp' icon={<UserOutlined />} />
          </HStack>
        </VStack>

        <VStack paddingTop={10} marginLeft={'5%'} align={'initial'}>
          <Text padding={'3%'} fontFamily={'Poppins, sans-serif'}><b>OS MELHORES PRODUTOS ESTÃO AQUI !</b> <Button fontFamily={'Roboto, sans-serif'} colorScheme='blue' _active={{}} _focus={{}} fontSize={15} variant='link'>Ver mais</Button></Text>
        </VStack>
        <HStack justify={'center'} paddingX={1}  marginBottom={'159px'}>
        <Produtos/>
        </HStack>
      </Stack>



    </>








  )
}