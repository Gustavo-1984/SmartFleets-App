import React from "react";
import { Box, Flex, Heading, Image, useMediaQuery, Text, Grid, GridItem } from "@chakra-ui/react";
import Tank from "../assets/storage-tank.png";



const Cards = ({titulo, total}) => {
  const [isLargerThan] = useMediaQuery('(min-width: 830px)')
  return (
    <>
      <Box bg="secondary" maxW={isLargerThan ? '40rem' : '30rem'} maxH={isLargerThan ? "20rem" : '20rem'}  p={3} color="black" rounded="10">
      <Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)'  maxW={isLargerThan ? '40rem' : '30rem'} maxH={isLargerThan ? "20rem" : '7rem'}  >
          <GridItem colSpan={2}>
          <Heading color='texto' size={isLargerThan ? 'xl' : 'md'}>{titulo}</Heading>
          </GridItem>
          <GridItem colSpan={1}>
          <Text color='texto' fontWeight='bold' fontSize={isLargerThan ? '3rem' : '2rem'}>
              {total}
            </Text>
          </GridItem>
          <GridItem colSpan={1} justifySelf='end' alignSelf='center'>
          <Image src={Tank} w="80px" />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
