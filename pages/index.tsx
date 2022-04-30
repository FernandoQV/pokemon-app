import React from "react"
import type { GetServerSideProps, NextPage } from "next"
import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import { getIdPokemons } from "@/utils/getPokemons"
import { Pokemon, PokemonClient } from "pokenode-ts"
import pokemonApi from "@/entities/pokemon/api"
interface Props {
  pokemon1:Pokemon|null
  pokemon2:Pokemon|null
}
const Home: NextPage<Props> = ({pokemon1,pokemon2}) => {
  if(!pokemon1 || !pokemon2)return <div>no hay pokemon</div>
  
  return (
    <VStack width={"full"} spacing={16}>
      <Heading>Which Pokemon i Rounder?</Heading>
      <SimpleGrid
        padding={8}
        minHeight="500px"
        borderRadius="2xl"
        w="full"
        gap={16}
        minChildWidth={"150px"}
        borderColor={"red.500"}
        borderStyle="solid"
        borderWidth={1}
      >
        <GridItem>
          <VStack justify={'center'} rounded='lg' bgColor={"cyan.100"} height={"full"}>
            <Image src={pokemon1.sprites.front_default as string} alt={pokemon1.name}/>
            <VStack>
              <Heading fontSize={'3xl'} letterSpacing='1px'>{pokemon1.name.toUpperCase()}</Heading>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack justify={'center'}rounded='lg'  bgColor={"cyan.100"} height={"full"}>
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
  
  return {
    props:{
      pokemon1,pokemon2
    }
  }
}