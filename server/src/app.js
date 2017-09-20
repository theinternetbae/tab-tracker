const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
	res.send({
		message: `hello ${req.body.email}! you was registered! have fun!`
	})
})

app.listen(process.env.PORT || 8081, (err) => {
	if(err) return console.log("ups something wrong", err)
		console.log("server running on 8081..")
})