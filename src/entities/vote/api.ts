import { Vote } from "@prisma/client"

export type Votes = {
  idWin: number
  idLoser: number
}
const voteApi = {
  createVote: async (vote: Votes) => {
    return fetch("http://localhost:3000/api/pokemon", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(vote)
    })
  },
}
export default voteApi