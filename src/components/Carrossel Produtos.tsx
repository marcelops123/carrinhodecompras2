import { Spacer } from "@chakra-ui/react";
import { Carousel, Image } from "antd"
import { AnimationPage } from "./AnimationPage";

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
      <AnimationPage>

        <Spacer marginTop={18} />
        <div></div>
         <Carousel autoplay  >
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_735707-MLA49568604353_042022-OO.webp'></Image>
        </div>
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_728991-MLA49536349545_032022-OO.webp'></Image>
        </div>
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_651494-MLA49567281378_042022-OO.webp'></Image>
        </div>
        <div>
          <Image style={contentStyle} width={'100%'} src='https://http2.mlstatic.com/D_NQ_600350-MLA49568947621_042022-OO.webp'></Image>
        </div>
      </Carousel>
      </AnimationPage>
        </>
    )
}