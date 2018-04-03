const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

let bears = [ { id:1, name:'Pooh', weight:100},
	{ id:2, name:'Winnie', weight:200}, ]

app.use(express.static('public'))

app.use('/api',
		bodyParser.urlencoded({extended:false}), router)

router.route('/bears')
	.get((req,res) => res.send(bears))

	.post((req,res) => {
		let bear = {}
		bear.id = bears.length+1
		bear.name = req.body.name
		bear.weight = req.body.weight
		bears.push(bear)
		res.send(bears)
	})

router.route('/bears/:id')
	.get( (req,res) => res.send(bears[req.params.id]))

	.delete( (req,res) => {
		delete bears[ req.params.id ]
		res.send(bears)
	})

app.listen(80)