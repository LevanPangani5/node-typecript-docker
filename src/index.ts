import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' })
})
//2end arg host  when running on the docker alway use this
const port = Number(process.env.PORT || 8080)
app.listen(port, '0.0.0.0', () => {
  console.log(`listening  at http://localhost:${port}`)
})
