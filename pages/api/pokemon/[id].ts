import { NextApiRequest, NextApiResponse } from "next"
import { PokemonClient } from "pokenode-ts"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = req.query.id
    try {
      const api = new PokemonClient()
      const pokemon = await api.getPokemonById(parseInt(id as string))
      return res.status(200).json({ pokemon})
    } catch (error) {
      console.log(error)
      return res.status(400).json({pokemon:null})
      
    }
  }
}
