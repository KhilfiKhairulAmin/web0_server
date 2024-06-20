import express from 'express'
import { PrismaClient } from '@prisma/client'
import { configDotenv } from 'dotenv'
configDotenv()


const app = express()
const prisma = new PrismaClient()


app.get('/', async (req, res) => {
  const data = await prisma.mal_url.findFirst({})
  const id = data?.id
  res.send(`<h1>Hello #${id}</h1>`)
})

const port = process.env.PORT || 3000
app.listen(5000, () => {
  console.log(`App is listening at port ${port}`);
})
