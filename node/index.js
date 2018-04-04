const express = require('express')
const bodyParser = require('body-parser')
const bears = require('./mockup-data')
const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3000

app
  .use(express.static('public'))
  .use(
    '/api',
    bodyParser.urlencoded({
      extended: false
    }),
    router
  )
  .listen(PORT, () => console.log(`listen on ${PORT}`))

router
  .route('/bears')
  .get((req, res) => res.send(bears))
  .post(({ body: { name, weight } }, res) => {
    bears.push({
      id: bears.length + 1,
      name: name,
      weight: weight
    })
    res.send(bears)
  })

router
  .route('/bears/:id')
  .get(({ params: { id } }, res) => res.send(bears[id]))
  .delete((req, res) => {
    delete bears[req.params.id]
    res.send(bears)
  })
  .put(({ params: { id }, body: { name, weight } }, res) => {
    bears[id] = {
      id: id,
      name: name,
      weight: weight
    }
    res.send(bears)
  })
