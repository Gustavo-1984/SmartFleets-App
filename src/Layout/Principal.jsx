import React from "react";
import {
    Box,
    Button,
    Flex,
    Link,
    Image,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    Text
  } from "@chakra-ui/react";
  import { FiAlignJustify, FiTruck, FiActivity} from "react-icons/fi";
  import SF from '../assets/sf-withe.svg'
  import { Link as ReachLink } from "react-router-dom";

const Principal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
      <>
      <Box bg="primary" w='100%' p='6' color="secondary" h='4.5rem'>
      <Flex  flexDirection='row'>
        <Button colorScheme="tomato" size="xs" textColor='white' onClick={onOpen}>
          <FiAlignJustify size={24} />
        </Button>
        <Link as={ReachLink} to='/'>
        <Image
          ml={5}
          w={200}
          src={SF}
          
        />
        </Link>
  
    </Flex>
    </Box>
    <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            <DrawerContent bg="primary">
              <DrawerBody>
                <Text fontSize="3xl" mb="5" p={3} color='white'>
                  Menú
                </Text>
  
                <Link as={ReachLink} to='/vehiculos'>
                  <Flex p={3} align="center" color='white'>
                    <FiTruck size={24} /> <Text ml="3" color='white'>Vehiculos</Text>
                  </Flex>
                </Link>
  
                <Link as={ReachLink} to='/Transacciones' color='white'>
                  <Flex p={3} align="center">
                    <FiActivity size={24} /> <Text ml="3" color='white'>Transacciones</Text>
                  </Flex>
                </Link>
  
                
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          
    </>
    )
}

export default Principal