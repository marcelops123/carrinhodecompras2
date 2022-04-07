import { HStack } from "@chakra-ui/react";
import { Carousel,  Image } from "antd"
import { AnimationCarrossel  } from "./AnimationPage";
import '../styles/Globalcss.css'

const contentStyle: any = {
    height: '100%',
    color: '#fff',
    lineHeight: '100%',
    textAlign: 'center',
    background: '#364d79',
  
  };


export const CarroselProdutos = () => {
    return (
        <>
        <AnimationCarrossel>
        <HStack  marginTop={3} padding={0}  >

        </HStack>
         <Carousel  autoplay  >
        <div >
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_735707-MLA49568604353_042022-OO.webp'></Image>
        </div>
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_724386-MLA49579131631_042022-OO.webp'></Image>
        </div>
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_651494-MLA49567281378_042022-OO.webp'></Image>
        </div>
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_659213-MLA49565959017_042022-OO.webp'></Image>
        </div>
      </Carousel>
     
        </AnimationCarrossel>
        </>
    )
}