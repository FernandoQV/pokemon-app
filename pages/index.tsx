import React, { useState } from "react"
import type { GetServerSideProps, NextPage } from "next"
import {
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import { getIdPokemons } from "@/utils/getPokemons"
import { Pokemon } from "pokenode-ts"
import pokemonApi from "@/entities/pokemon/api"
import voteApi, { Votes } from "@/entities/vote/api"
interface Props {
  pokemon1:Pokemon|null
  pokemon2:Pokemon|null
}
const Home: NextPage<Props> = ({pokemon1,pokemon2}) => {
const handleVotation=async(idSelected:Pokemon['id'])=>{
    let data={idWin:0,idLoser:0}
    if(idSelected===pokemon1?.id){
      data={idWin:pokemon1.id,idLoser:pokemon2?.id as number}
    }else{
      data={idWin:pokemon2?.id as number,idLoser:pokemon1?.id as number}
    }
    const res=await voteApi.createVote(data as Votes) 
    console.log(res.json());
    
  }
  return (
    <VStack width={"full"} spacing={16}>
      <Heading>Which Pokemon i Rounder?</Heading>
      <SimpleGrid
        padding={8}
        minHeight="500px"
        borderRadius="2xl"
        w="full"
        maxWidth={'container.md'}
        gap={16}
        minChildWidth={"150px"}
        borderColor={"red.500"}
        borderStyle="solid"
        borderWidth={1}
      >
        <GridItem>
          <VStack justify={'center'} rounded='lg' bgColor={"cyan.50"} height={"full"}>
            <Image boxSize="120px" objectFit={'contain'} src={pokemon1?.sprites.front_default as string} alt={pokemon1?.name}/>
            <VStack>
              <Heading fontSize={'3xl'} letterSpacing='1px'>{pokemon1?.name.toUpperCase()}</Heading>
            </VStack>
            <Button size={'lg'} colorScheme='primary' onClick={()=>handleVotation(pokemon1?.id as number)}>Rounded</Button>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack justify={'center'}rounded='lg'  bgColor={"cyan.50"} height={"full"}>
          <Image boxSize="120px" objectFit={'contain'} src={pokemon2?.sprites.front_default as string} alt={pokemon2?.name}/>
            <VStack>
              <Heading fontSize={'3xl'} letterSpacing='1px'>{pokemon2?.name.toUpperCase()}</Heading>
            </VStack>
            <Button size={'lg'} colorScheme='primary' onClick={()=>handleVotation(pokemon2?.id as number)}>Rounded</Button>
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