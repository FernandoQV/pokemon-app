import React from "react"
import type { GetServerSideProps, NextPage } from "next"
import {
<<<<<<< HEAD
  Button,
=======
>>>>>>> 509c6ee5a302352ac19f331ce351e7725cc4ed20
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import { getIdPokemons } from "@/utils/getPokemons"
<<<<<<< HEAD
import { Pokemon } from "pokenode-ts"
=======
import { Pokemon, PokemonClient } from "pokenode-ts"
>>>>>>> 509c6ee5a302352ac19f331ce351e7725cc4ed20
import pokemonApi from "@/entities/pokemon/api"
interface Props {
  pokemon1:Pokemon|null
  pokemon2:Pokemon|null
}
const Home: NextPage<Props> = ({pokemon1,pokemon2}) => {
<<<<<<< HEAD

  
=======
>>>>>>> 509c6ee5a302352ac19f331ce351e7725cc4ed20
  if(!pokemon1 || !pokemon2)return <div>no hay pokemon</div>
  
  return (
    <VStack width={"full"} spacing={16}>
      <Heading>Which Pokemon i Rounder?</Heading>
      <SimpleGrid
        padding={8}
        minHeight="500px"
        borderRadius="2xl"
        w="full"
<<<<<<< HEAD
        maxWidth={'container.md'}
=======
>>>>>>> 509c6ee5a302352ac19f331ce351e7725cc4ed20
        gap={16}
        minChildWidth={"150px"}
        borderColor={"red.500"}
        borderStyle="solid"
        borderWidth={1}
      >
        <GridItem>
<<<<<<< HEAD
          <VStack justify={'center'} rounded='lg' bgColor={"cyan.50"} height={"full"}>
            <Image boxSize="120px" objectFit={'contain'} src={pokemon1.sprites.front_default as string} alt={pokemon1.name}/>
            <VStack>
              <Heading fontSize={'3xl'} letterSpacing='1px'>{pokemon1.name.toUpperCase()}</Heading>
            </VStack>
            <Button size={'lg'} colorScheme='primary'>Rounded</Button>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack justify={'center'}rounded='lg'  bgColor={"cyan.50"} height={"full"}>
          <Image boxSize="120px" objectFit={'contain'} src={pokemon2.sprites.front_default as string} alt={pokemon2.name}/>
            <VStack>
              <Heading fontSize={'3xl'} letterSpacing='1px'>{pokemon2.name.toUpperCase()}</Heading>
            </VStack>
            <Button size={'lg'} colorScheme='primary'>Rounded</Button>
=======
          <VStack justify={'center'} rounded='lg' bgColor={"cyan.100"} height={"full"}>
            <Image src={pokemon1.sprites.front_default as string} alt={pokemon1.name}/>
            <VStack>
              <Heading fontSize={'3xl'} letterSpacing='1px'>{pokemon1.name.toUpperCase()}</Heading>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack justify={'center'}rounded='lg'  bgColor={"cyan.100"} height={"full"}>
>>>>>>> 509c6ee5a302352ac19f331ce351e7725cc4ed20
          </VStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}
export default Home

export const getServerSideProps:GetServerSideProps=async()=>{
  
  const [id1, id2] = getIdPokemons()
  const {pokemon:pokemon1}=await pokemonApi.getPokemonById(id1)
  const {pokemon:pokemon2}=await pokemonApi.getPokemonById(id2)
  
<<<<<<< HEAD
  
=======
>>>>>>> 509c6ee5a302352ac19f331ce351e7725cc4ed20
  return {
    props:{
      pokemon1,pokemon2
    }
  }
}