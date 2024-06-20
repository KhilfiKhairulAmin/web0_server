import express from 'express'


const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hello, world!</h1>")
})

app.listen(5000, () => {
  console.log('App is listening at port 5000');
})
