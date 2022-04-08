import { motion } from 'framer-motion';
import React from 'react'

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -150 },

}
const animationCarrossel = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },

}

export const AnimationPage: React.FC<{}> = ({ children }) => {
    return (
        <motion.div variants={animation} initial='initial' animate='animate' exit='exit' transition={{ duration: '1.5' }}>
            {children}
        </motion.div>
    )
}
export const AnimationCarrossel: React.FC<{}> = ({ children }) => {
    return (
        <motion.div variants={animationCarrossel} initial='initial' animate='animate' exit='exit' transition={{ duration: '1.25' }}>
            {children}
        </motion.div>
    )
}