import React from "react";
import Chart from "../../components/Chart";
import Cards from "../../components/Cards";
import {Flex, SimpleGrid} from "@chakra-ui/react";

export const Inicio = () => {
 

  return (
    <>
    <SimpleGrid columns={[1,3,4]} spacing='2'  p='5' alignItems='center'>
        <Cards titulo={"Litros totales"} total={'9,999'} />
        <Cards titulo={"Litros totales"} total={9} />
        <Cards titulo={"Litros totales"} total={9} />
        <Cards titulo={"Litros totales"} total={9} />
    </SimpleGrid>

    <Flex justify='center' >
      <Chart />
    </Flex>
    </>
  );
};

