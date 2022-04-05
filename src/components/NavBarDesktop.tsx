import { Box, Button, HStack, Image, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import { Menu, Dropdown, Avatar, Carousel } from 'antd'
import 'antd/dist/antd.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { CarroselProdutos } from './Carrossel Produtos';
import { AnimationPage } from './AnimationPage';


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


      <Box gap={1} width={'100%'} backgroundColor='#3d88eb' boxShadow='0px 0px 10px rgba(50, 50, 50, 0.1)' justifyContent='left' >
        <HStack paddingLeft={3} width='100%'>
          <Image marginBottom={-30} width={'40'} src='logo.svg'></Image>

          <HStack justify={'left'}>
            <InputGroup>
              <InputRightElement paddingTop={6} pointerEvents='initial' children={<Button _focus={{}} backgroundColor='transparent' _hover={{}} ><SearchIcon /> </Button>} />
              <Input top={'3'} backgroundColor={'white'} width='700px' type='text' placeholder='Buscar produtos, empresas...'></Input>
            </InputGroup>
          </HStack>
        </HStack>

        <HStack marginTop={-5} marginRight={100} justify={'right'} >
          <Button _hover={{}} _focus={{}} color='white' fontSize={30} backgroundColor='transparent' marginTop={1}  ><ShoppingCartOutlined /></Button>
          <Avatar size={56} src='https://avatars.githubusercontent.com/u/95228603?v=4' icon={<UserOutlined />} />
        </HStack>

        <HStack justify={'left'} marginTop={'-1%'} paddingX={'8%'}>
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Button _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Categorias</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Button _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Empresas</Button>
          </Dropdown>
        </HStack>
      </Box>

      <CarroselProdutos/>

      <VStack justify={'center'}>
        <b>NOSSAS CATEGORIAS</b>
        <HStack>

          <Avatar size={120} src='https://http2.mlstatic.com/D_Q_NP_974266-MLA48254501676_112021-AB.webp' icon={<UserOutlined />} />
          <Avatar size={120} src='https://http2.mlstatic.com/D_Q_NP_707970-MLA46081133887_052021-AB.webp' icon={<UserOutlined />} />
          <Avatar size={120} src='https://http2.mlstatic.com/D_Q_NP_895808-MLB47860103489_102021-AB.webp' icon={<UserOutlined />} />
          <Avatar size={120} src='https://http2.mlstatic.com/D_Q_NP_738716-MLB49182934470_022022-AB.webp' icon={<UserOutlined />} />
          <Avatar size={120} src='https://http2.mlstatic.com/D_Q_NP_837255-CBT46242013787_062021-AB.webp' icon={<UserOutlined />} />
        </HStack>
      </VStack>


    </>

  )
}
