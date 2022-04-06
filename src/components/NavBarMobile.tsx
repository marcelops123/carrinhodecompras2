import {  Button, Grid, HStack, Image, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, VStack } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import React from 'react'
import 'antd/dist/antd.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar } from 'antd';
import { MenuMobile } from './MenuMobile';
import { CarroselProdutos } from './Carrossel Produtos';

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


export const NavBarMobile = () => {
  return (
        <>
    <HStack boxShadow='0px 0px 10px rgba(50, 50, 50, 1)' padding={2} backgroundColor={'#3d88eb'}>
            <Image width={'12'} src='logosós.png'></Image>
            <Spacer />
           
           
          <SimpleGrid marginTop={-4}  >
            <HStack >
          <Button _hover={{}} _focus={{}} _active={{}} color='white' fontSize={30} backgroundColor='transparent' marginTop={1}  ><ShoppingCartOutlined /></Button>
          <Spacer />
          <MenuMobile />

            </HStack>
        </SimpleGrid>
        </HStack>

    <CarroselProdutos/>
      
    <Spacer />
    <SimpleGrid columns={1} >
    <VStack >
        <b>NOSSAS CATEGORIAS</b>
        <HStack >

          <Avatar size={50} src='https://http2.mlstatic.com/D_Q_NP_974266-MLA48254501676_112021-AB.webp' icon={<UserOutlined />} />
          <Avatar size={50} src='https://http2.mlstatic.com/D_Q_NP_707970-MLA46081133887_052021-AB.webp' icon={<UserOutlined />} />
          <Avatar size={50} src='https://http2.mlstatic.com/D_Q_NP_895808-MLB47860103489_102021-AB.webp' icon={<UserOutlined />} />
          <Avatar size={50} src='https://http2.mlstatic.com/D_Q_NP_738716-MLB49182934470_022022-AB.webp' icon={<UserOutlined />} />
          <Avatar size={50} src='https://http2.mlstatic.com/D_Q_NP_837255-CBT46242013787_062021-AB.webp' icon={<UserOutlined />} />
        </HStack>
      </VStack>
    </SimpleGrid>
      <Spacer  />

        </>

  )
}
