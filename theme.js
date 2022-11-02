import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        primary: '#1A1A1A',
        secondary: '#131313',
        tertiary: '#2D2B39',
        bt: '#FAF8F4',
        texto: '#FCFCFC'
    },
    fonts: {
        heading: `'Raleway', sans-serif`,
        body: `'Poppins', sans-serif`
    },
    styles:{
        global: {
            'html,body': {
                background: '#fcfcfc',
                

               
            }
        }
    }
})