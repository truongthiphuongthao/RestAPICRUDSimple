const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

// set view
app.set('views', './public/')
app.set('view engine', 'ejs')

// setting
app.set('port', process.env.PORT || 8080)

// use routes
app.use('/', routes)

app.listen(app.get('port'), () => {
	console.log(`server is starting at port ${app.get('port')}`)
})