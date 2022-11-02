import {
  Center,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Switch,
  Heading
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useFormik } from "formik";
import SF from "../../assets/sf-black-total.svg";
import React from "react";
import './agregar.css'

export const AgregarVehiculos = () => {
  const formik = useFormik({
    initialValues: {
      tag: "",
      placas: "",
      marca: "",
      modelo: "",
      numeroEconomico: "",
      odometro: "",
      descripcion: "",
      isActive: false,
    },
    onSubmit: (values, {resetForm}) => {
      resetForm()
      console.log(values);
      // try {
      //   console.log(values);
      //   axios.post("http://localhost:5000/api/users/login", values).then((res) => {
      //     console.log(res);
      //     localStorage.setItem("token", res.data.token);
      //   });
      //   setAuth(values)
      // } catch (error) {
      //   console.log(error);
      // }
    }
  });
  return (
    <>
    <Flex justify='center' mt="-3rem" mb="3rem">
    <Box align="center" w="40rem" className="neumBlack">
      <Breadcrumb separator='>' spacing="6" fontWeight="bold" fontSize='2xl' color="#FCFCFC">
        <BreadcrumbItem>
          <BreadcrumbLink as={ReachLink} to="/" color="#FCFCFC">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={ReachLink} to="/vehiculos" color="#FCFCFC">Ver vehiculos</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  </Flex>
  
  <Flex justify='center'>
    <Box className="neum" align="center"  p="1rem"  w={['10rem', '40rem']}>
      <Center>
        <Image mb={5} w={300} src={SF} />
      </Center>
      <Text fontSize="2xl"  mb={5}> Agregar vehiculo</Text>
      <form onSubmit={formik.handleSubmit}>
              <FormControl>
                
                <Input
                  focusBorderColor="primary"
                  borderColor="black"
                  variant="flushed"
                  placeholder="Tag"
                  type="text"
                  name="tag"
                  onChange={formik.handleChange}
                  value={formik.values.tag}
                />

               
                <Input
                  mt='2rem'
                  type="text"
                  borderColor="black"
                  variant="flushed"
                  placeholder="Placas"
                  focusBorderColor="primary"
                  name="placas"
                  onChange={formik.handleChange}
                  value={formik.values.placas}
                />

                <Input
                  mt='2rem'
                  type="text"
                  placeholder="Modelo"
                  borderColor="black"
                  variant="flushed"
                  focusBorderColor="primary"
                  name="modelo"
                  onChange={formik.handleChange}
                  value={formik.values.modelo}
                />

                <Input
                  type="text"
                  mt='2rem'
                  borderColor="black"
                  placeholder="Marca"
                  variant="flushed"
                  focusBorderColor="primary"
                  name="marca"
                  onChange={formik.handleChange}
                  value={formik.values.marca}
                />

                
                <Input
                  type="text"
                  mt='2rem'
                  borderColor="black"
                  variant="flushed"
                  placeholder="Numero Econimico"
                  focusBorderColor="primary"
                  name="numeroEconomico"
                  onChange={formik.handleChange}
                  value={formik.values.numeroEconomico}
                />

                
                <Input
                  type="text"
                  mt='2rem'
                  borderColor="black"
                  placeholder="Odometro"
                  variant="flushed"
                  focusBorderColor="primary"
                  name="odometro"
                  onChange={formik.handleChange}
                  value={formik.values.odometro}
                />

                
                <Input
                  type="text"
                  mt='2rem'
                  borderColor="black"
                  placeholder="Descripción"
                  variant="flushed"
                  focusBorderColor="primary"
                  name="descripcion"
                  onChange={formik.handleChange}
                  value={formik.values.descripcion}
                />
                
                <FormLabel mt="2rem">Activo</FormLabel>
                <Flex align='start' mb='2rem'>
                <Switch
                  colorScheme='blackAlpha'
                  name="isActive"
                  size='lg'
                  onChange={formik.handleChange}
                  value={formik.values.isActive}
                />
                </Flex>


              </FormControl>

              <Flex justify="space-around">
                <Button type="submit" w={['6rem',"10rem"]} bg="#000000" mt="2" textColor='white'>
                  Agregar
                </Button>
                <Button w={['6rem',"10rem"]} bg="#000000" mt="2" textColor='white'>
                  Cancelar
                </Button>
              </Flex>
            </form>
    </Box>
  </Flex>
  </>
  )
}