import { Text, Box, Divider, Image, Button, Badge, HStack } from "@chakra-ui/react"
import "@fontsource/alata"

function teste() {
    console.log('Comprou o WHEY!')
}

export const Produtos = () => {
    return (
        <>




            <Box id="boxprodutos" padding={2}  maxW={'260px'} boxShadow={'1px 1px 12px black'} backgroundColor={'white'}   >
                <Image src='https://http2.mlstatic.com/D_Q_NP_726463-MLB48157039583_112021-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge marginLeft={2} fontSize={15} colorScheme='purple'>Em alta🔥</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='red'>35% OFF</Badge>
                </HStack>
                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$2200,94</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Bicicleta Aorus 27"</Text>
                <Button borderRadius={6} onClick={teste} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} _hover={{}} borderX={2} borderY={2} width='95%' height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'} marginLeft={2}><b>Adicionar ao carrinho</b></Button>

            </Box>

            <Box id="boxprodutos" padding={2} maxW={'260px'} boxShadow={'1px 1px 12px black'} fontSize={8} backgroundColor={'white'}     >
                <Image src='https://http2.mlstatic.com/D_Q_NP_788189-MLB46951747825_082021-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge variant='outline' marginLeft={2} fontSize={15} colorScheme='green'>Novo⭐</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='blue'>45% OFF</Badge>
                </HStack>
                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$3200,94</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Galaxy S22</Text>
                <Button borderRadius={6} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} borderX={2} borderY={2} width='95%' height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'} marginLeft={2}><b>Adicionar ao carrinho</b></Button>

            </Box>

            <Box id="boxprodutos" padding={2} maxW={'260px'} boxShadow={'1px 1px 12px black'} fontSize={8} backgroundColor={'white'}>
                <Image src='https://http2.mlstatic.com/D_Q_NP_609190-MLB43485357216_092020-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge variant='outline' marginLeft={2} fontSize={15} colorScheme='blue'>EM ESTOQUE🌟</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='red'>15% OFF</Badge>
                </HStack>
                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$1000,00</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Pneus Michelin</Text>
                <Button borderRadius={6} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} _hover={{}} width='95%' borderX={2} borderY={2} height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'} marginLeft={2}><b>Adicionar ao carrinho</b></Button>

            </Box>

            <Box id="boxprodutos" padding={2} maxW={'260px'} boxShadow={'1px 1px 12px black'} fontSize={8} backgroundColor={'white'}  >
                <Image src='https://http2.mlstatic.com/D_Q_NP_811224-MLB44050294004_112020-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge variant='outline' marginLeft={2} fontSize={15} colorScheme='green'>Novo⭐</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='orange'>25% OFF</Badge>
                </HStack>
                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$312,94</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Maleta Ferramentas</Text>
                <Button borderRadius={6} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} _hover={{}} width='95%' borderX={2} borderY={2} height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'} marginLeft={2}><b>Adicionar ao carrinho</b></Button>

            </Box>

            <Box id="boxprodutos" padding={2} maxW={'260px'} boxShadow={'1px 1px 12px black'} fontSize={8} backgroundColor={'white'}   >
                <Image src='https://http2.mlstatic.com/D_Q_NP_971596-MLB46520356363_062021-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge variant='outline' marginLeft={2} fontSize={15} colorScheme='blue'>EM ESTOQUE🌟</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='green'>15% OFF</Badge>
                </HStack>

                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$56,65</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Refletor LED</Text>
                <Button borderRadius={6} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} _hover={{}} width='95%' borderX={2} borderY={2} height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'} marginLeft={2}><b>Adicionar ao carrinho</b></Button>

            </Box>

            <Box id="boxprodutos" padding={2} maxW={'260px'} boxShadow={'1px 1px 12px black'} fontSize={8} backgroundColor={'white'}   >
                <Image src='https://http2.mlstatic.com/D_Q_NP_862558-MLB49011458317_022022-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge variant='outline' marginLeft={2} fontSize={15} colorScheme='green'>Novo⭐</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='red'>5% OFF</Badge>
                </HStack>
                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$560,65</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Air Fryer</Text>
                <Button borderRadius={6} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} _hover={{}} width='95%' borderX={2} borderY={2} height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'}  marginLeft={2}><b>Adicionar ao carrinho</b></Button>
            </Box>


            <Box id="boxprodutos" padding={2} maxW={'260px'} boxShadow={'1px 1px 12px black'} fontSize={8} backgroundColor={'white'}   >
                <Image src='https://http2.mlstatic.com/D_Q_NP_635605-MLA44492818317_012021-AB.webp' />
                <Divider marginLeft={-2} width={'105%'} marginY={3} />
                <HStack>
                    <Badge marginLeft={2} fontSize={15} colorScheme='purple'>Em alta🔥</Badge>
                    <Badge variant='outline' fontFamily={'Alata, sans-serif'} marginLeft={2} fontSize={15} colorScheme='red'>20% OFF</Badge>
                </HStack>
                <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={30}><b>R$4300,65</b></Text>
                <Text padding={3} textColor='GrayText' fontFamily={'Roboto Slab, serif'} fontSize={18}>Xbox Series X</Text>
                <Button borderRadius={6} fontSize={18} fontFamily={'Alata, sans-serif'} _focus={{}} _hover={{}} width='95%' borderX={2} borderY={2} height={50} borderStyle={'solid'} colorScheme={'#42d4ed'} outlineColor={'#42d4ed'} textColor={'black'} marginLeft={2}><b>Adicionar ao carrinho</b></Button>
            </Box>




        </>
    )
}