import React from "react"
import { Avatar, Text, Divider } from "@chakra-ui/react"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
export const Categorias = () => {
    return (
        <>
          
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_974266-MLA48254501676_112021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_707970-MLA46081133887_052021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_895808-MLB47860103489_102021-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_738716-MLB49182934470_022022-AB.webp' icon={<UserOutlined />} />
            <Avatar style={{ cursor: 'pointer' }} size='lg' src='https://http2.mlstatic.com/D_Q_NP_837255-CBT46242013787_062021-AB.webp' icon={<UserOutlined />} />
        </>
    )
}