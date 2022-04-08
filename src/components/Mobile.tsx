/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Divider, HStack, Image, Text, SimpleGrid, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import 'antd/dist/antd.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Avatar, Dropdown } from 'antd';
import { MenuMobile } from './MenuMobile';
import { CarroselProdutos } from './Carrossel Produtos';
import { Produtos } from './Produtos';
import "@fontsource/poppins"
import "@fontsource/quando"
import "@fontsource/poly"
import '@fontsource/roboto'
import '../styles/Globalcss.css'
import { AnimationPage } from './AnimationPage';
import { Categorias } from './Categorias';
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

export const NavBarMobile = () => {
  return (
    <>
      <AnimationPage>

        <HStack boxShadow='0px 0px 10px rgba(50, 50, 50, 1)' padding={2} backgroundColor={'#3d88eb'}>
          <Image width={'12'} src='logosós.png'></Image>
          <Dropdown overlayStyle={{ boxSizing: 'inherit' }} overlay={categorias} placement="bottom" arrow>
            <Button fontFamily={'Poly, serif'} paddingX={2} fontSize={14} _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Categorias</Button>
          </Dropdown>
          <Dropdown overlay={empresas} placement="bottom" arrow>
            <Button fontFamily={'Poly, serif'} paddingX={5} fontSize={14} _hover={{}} _focusVisible={{}} _focus={{}} backgroundColor={'transparent'}>Empresas</Button>
          </Dropdown>
          <Spacer />

          <SimpleGrid marginTop={-4}  >
            <HStack marginLeft={-5} >
              <Button _hover={{}} _focus={{}} _active={{}} color='white' fontSize={30} backgroundColor='transparent' marginTop={1}  ><ShoppingCartOutlined /></Button>
              <HStack paddingX={'8%'}>
                <MenuMobile />
              </HStack>



            </HStack>
          </SimpleGrid>
        </HStack>
        <CarroselProdutos />

        <Spacer />
        <div style={{ marginTop: '-6px' }} id='testez'>

          <SimpleGrid columns={1} >
            <VStack padding={2} >
              <b>NOSSAS CATEGORIAS</b>
              <Divider paddingY={2} borderColor={'ButtonShadow'} />

              <HStack padding={2} >

                <Categorias />

              </HStack>


            </VStack>

          </SimpleGrid>
          <VStack paddingTop={10} marginLeft={'5%'} align={'initial'}>
            <Text padding={'3%'} fontFamily={'Poppins, sans-serif'}><b>OS MELHORES PRODUTOS ESTÃO AQUI ! </b> <Button fontFamily={'Roboto, sans-serif'} colorScheme='blue' _active={{}} _focus={{}} fontSize={15} variant='link'>Ver mais</Button></Text>
          </VStack>

          <HStack justify={'center'}>
            <SimpleGrid width={'80%'} marginLeft={'8%'} justifyContent='center' columns={[1, 2, 3, 4, 5, 6]} spacing={0}   >
              <Produtos />
            </SimpleGrid>
          </HStack>

        </div>

      </AnimationPage>






    </>

  )
}
