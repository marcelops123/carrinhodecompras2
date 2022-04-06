import { Text, Box, Divider, Image } from "@chakra-ui/react"

    function teste() {
        console.log('Comprou o WHEY!')
    }
    
export const Produtos = () => {
    return (
        <>
        <Box onClick={teste} id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_618779-MLA48355550837_112021-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$12,94</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Creatine Turbo 1 KG</Text>
        </Box>

        <Box id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_707970-MLA46081133887_052021-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$1200,94</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Xiami Mi A3</Text>
        </Box>

        <Box id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_726463-MLB48157039583_112021-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$2200,94</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Bicicleta Aorus 27"</Text>
        </Box>

        <Box id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_788189-MLB46951747825_082021-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$3200,94</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Galaxy S22</Text>
        </Box>

        <Box id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_609190-MLB43485357216_092020-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$1000,00</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Pneus Michelin</Text>
        </Box>

        <Box id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_811224-MLB44050294004_112020-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$312,94</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Maleta Ferramentas</Text>
        </Box>
        
        <Box id="boxprodutos" boxSize='0.8' cursor={'pointer'} boxShadow={'1px 1px 8px black'} fontSize={8} backgroundColor={'white'} w='12%' p={2} >
        <Image src='https://http2.mlstatic.com/D_Q_NP_971596-MLB46520356363_062021-AB.webp' />
        <Divider marginLeft={-2} width={'105%'}  marginY={3} />
        <Text padding={3} fontFamily={'Lato, sans-serif'} fontSize={20}><b>R$56,65</b></Text>
        <Text padding={3} fontFamily={'Roboto Slab, serif'} fontSize={18}>Refletor LED</Text>
        </Box>
        </>
    )
}