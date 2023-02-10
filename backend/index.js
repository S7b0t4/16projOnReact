const express = require('express')

const PORT = 4000

const app = express()

app.get('/api', (req,res) => {
  res.send(JSON.stringify({message:'Hello world'}))
})
app.listen(PORT, () => {
  console.log(`Server starting` )
})