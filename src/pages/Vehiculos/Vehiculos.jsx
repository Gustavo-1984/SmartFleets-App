import {
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  Flex,

} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import {FiEdit} from "react-icons/fi";
import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchVehiculos} from '../../features/vehiculos/thunk'

export const Vehiculos = () => {
const dispatch = useDispatch()
const {vehiculos} = useSelector( state => state.vehiculos)

  useEffect(() => {
    dispatch(fetchVehiculos())
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
        <TableContainer w={'100rem'}>
          <Table variant="striped">
            <Thead>
              <Tr >
                <Th color='primary'>Tag</Th>
                <Th color='primary'>Placas</Th>
                <Th color='primary'>Modelo</Th>
                <Th color='primary'>Marca</Th>
                <Th color='primary'>Numero Economico</Th>
                <Th color='primary'>Odometro</Th>
                <Th color='primary'>Descripcion</Th>
                <Th color='primary'>Editar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {vehiculos.map((vehiculo) => (
              <Tr key={vehiculo._id}>
                <Td>{vehiculo.tag}</Td>
                <Td>{vehiculo.placas}</Td>
                <Td>{vehiculo.modelo}</Td>
                <Td>{vehiculo.marca}</Td>
                <Td>{vehiculo.numeroEconomico}</Td>
                <Td>{vehiculo.odometro}</Td>
                <Td>{vehiculo.descripcion}</Td>
                <Td> <Link as={ReachLink} to={`/editar-vehiculo`}> <IconButton  colorScheme='black' textColor='black'  icon={<FiEdit />}/></Link></Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};
