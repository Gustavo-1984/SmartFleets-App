import { Flex, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, TableContainer, Table, Thead, Tr, Th, Tbody, Td,  } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { Link as ReachLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchVentas } from '../../features/transacciones/thunk';


export const Ventas = () => {
    const dispatch = useDispatch()
    const {ventas} = useSelector( state => state.ventas)
    console.log(ventas);

  useEffect(() => {
    dispatch(fetchVentas())
  }, [])

  return (
    <>
    <Flex justify='center' mt='5'>
  
      <Box align="center" w="20rem" bg="texto" rounded="md" p="1">
        <Breadcrumb separator="-" fontWeight="medium" fontSize="xl">
          <BreadcrumbItem>
            <BreadcrumbLink as={ReachLink} to="/">
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={ReachLink} to="/agregar-vehiculo">
              Agregar vehiculos
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
 
    </Flex>
    <Flex justify='center' p={2} mt='5' w={['100%', '100%', '100%']}>
      <TableContainer w={'80rem'}>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Numero de serie</Th>
              <Th>Tag</Th>
              <Th>Litros</Th>
              <Th>Venta</Th>
            </Tr>
          </Thead>
          <Tbody>
             {ventas.map((venta) => (
            <Tr key={venta._id}>
              <Td>{venta.serialNumber}</Td>
              <Td>{venta.tag}</Td>
              <Td>{venta.litros}</Td>
              <Td>{venta.venta}</Td>
              {/* <Td> <Link as={ReachLink} to={`/editar-vehiculo`}> <IconButton  colorScheme='black' textColor='black'  icon={<FiEdit />}/></Link></Td> */}
            </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  </>
  )
}