import React from "react"
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, VStack, } from "@chakra-ui/react"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { SearchIcon } from "@chakra-ui/icons"
import { Avatar, Dropdown, Menu } from "antd"
import { CarroselProdutos } from "./Carrossel Produtos"


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

export const TesteNavBar = () => {
    return (


        <>
        <HStack boxShadow='0px 0px 10px rgba(50, 50, 50, 1)' padding={2} backgroundColor={'#3d88eb'}>
            <Image width={'40'} src='logo branca.svg'></Image>
            <Spacer />
            <SimpleGrid columns={2}  >
                <VStack align={'left'}>
               <InputGroup paddingLeft={'15px'}>
              <InputRightElement paddingTop={2} pointerEvents='all' children={<Button _focus={{}} backgroundColor='transparent' _hover={{}} ><SearchIcon /> </Button>} />
              <Input top={'1'} borderRadius='6px'  backgroundColor={'white'} width='700px' type='text' placeholder='Buscar produtos, empresas...'></Input>
            </InputGroup>
           

            <HStack align={'left'}>
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Button  _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Categorias</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Button  _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Empresas</Button>
          </Dropdown>
            </HStack>
                </VStack>
               </SimpleGrid>
          <Spacer paddingX={100}/>
          <HStack marginTop={-4}  paddingRight='2%'>
          <Button _hover={{}} _focus={{}} color='white' fontSize={30} backgroundColor='transparent' marginTop={1}  ><ShoppingCartOutlined /></Button>
          <Avatar size={50} src='https://avatars.githubusercontent.com/u/95228603?v=4' icon={<UserOutlined />} />
        </HStack>
        </HStack>

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