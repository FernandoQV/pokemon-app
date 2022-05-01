import { prismaAdmin } from "@/../db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body
    try {
        const vote = await prismaAdmin.vote.create({
          data: body,
        })
        res.status(200).json({vote})
    } catch (error) {
        
    res.status(500).json({vote:null })
    }
  }
}
