/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {  Button,  HStack, Image, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, VStack, Text, Divider, Avatar, Grid  } from "@chakra-ui/react"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { SearchIcon } from "@chakra-ui/icons"
import {  Dropdown, Menu } from "antd"
import { CarroselProdutos } from "./Carrossel Produtos"
import { Produtos } from "./Produtos"
import '../styles/Globalcss.css'
import "@fontsource/poppins"
import "@fontsource/quando"
import "@fontsource/poly"
import '@fontsource/roboto'
import { AnimationPage } from "./AnimationPage"
import { DarkMode } from "./DarkMode"

const categorias = (
  <Menu>
    <Menu.Item>
      <a>
       Celulares
      </a>
    </Menu.Item>
    <Menu.Item>
      <a>
        Computadores
      </a>
    </Menu.Item>
       



  </Menu>
)


const empresas = (
  <Menu>
    <Menu.Item>
      <a>
       HIDROMAQ PEÇAS AGRICOLAS
      </a>
    </Menu.Item>
    <Menu.Item>
      <a>
        COOPERVAP
      </a>
    </Menu.Item>
       



  </Menu>
)

export const NavBarDesktop = () => {
  return (

    <>
      <AnimationPage>
      <HStack boxShadow='0px 0px 10px rgba(50, 50, 50, 1)' padding={0} backgroundColor={'ThreeDDarkShadow'}>
        <Image marginLeft={3} width={'12%'} src='logo branca.svg'></Image>
        <Spacer />
        <SimpleGrid columns={2}  >
          <VStack align={'left'}>
            <InputGroup paddingLeft={'15px'}>
              <InputRightElement paddingTop={3} pointerEvents='all' children={<Button _focus={{}} backgroundColor='transparent'    ><SearchIcon /> </Button>} />
              <Input top={'2'} fontSize={15} borderRadius='6px' fontFamily={'Roboto, sans-serif'} backgroundColor={'white'} height='38px' width='600px' type='text' placeholder='Buscar produtos, empresas...'></Input>
            </InputGroup>


            <HStack align={'left'}>
              <Dropdown overlayStyle={{ boxSizing: 'inherit' }} overlay={categorias} placement="bottom" arrow>
                <Button  fontFamily={'Poly, serif'} fontSize={16} _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Categorias</Button>
              </Dropdown>
              <Dropdown overlay={empresas} placement="bottom" arrow>
                <Button fontFamily={'Poly, serif'} fontSize={16} _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Empresas</Button>
              </Dropdown>
            </HStack>
          </VStack>
        </SimpleGrid>
        <Spacer paddingX={100} />
        <HStack marginTop={-4} paddingRight='2%'>
          <DarkMode/>
          <Button _hover={{}} _focus={{}} color='white' fontSize={30} backgroundColor='transparent' marginTop={1}  ><ShoppingCartOutlined /></Button>
          <Avatar  src='https://avatars.githubusercontent.com/u/95228603?v=4' icon={<UserOutlined />} />
        </HStack>
      </HStack>

      <div style={{marginTop: '15px'}} id="testez">

        <CarroselProdutos />

        <VStack justify={'center'}>
        <div style={{paddingTop:'5px' }}></div>
          <Text fontSize={22} fontFamily={' Quando, serif'} ><b>NOSSAS CATEGORIAS</b></Text>
          <Divider paddingY={2} borderColor={'ButtonShadow'}/>
          <HStack paddingTop={3} spacing={100}>


            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_974266-MLA48254501676_112021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_707970-MLA46081133887_052021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_895808-MLB47860103489_102021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_738716-MLB49182934470_022022-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_837255-CBT46242013787_062021-AB.webp' icon={<UserOutlined />} />
          </HStack>
        </VStack>

        <VStack paddingTop={10} marginLeft={'5%'} align={'initial'}>
          <Text padding={'3%'} fontSize={22} fontFamily={'Poppins, sans-serif'}><b>OS MELHORES PRODUTOS ESTÃO AQUI ! </b> <Button fontFamily={'Roboto, sans-serif'} colorScheme='blue' _active={{}} _focus={{}} fontSize={20} variant='link'>Ver mais</Button></Text>
        </VStack>


        <SimpleGrid justifyContent='center' paddingLeft={10} columns={7}    >
        <Produtos/>
        </SimpleGrid>


      </div>
      </AnimationPage>


    </>








  )
}