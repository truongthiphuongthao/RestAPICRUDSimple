const Router = require('express').Router()

Router.get('/', async(req, res) => {
	res.render('index')
})
const products = [
	{
		id: 1,
		name: 'Laptop'
	},
	{
		id: 2,
		name: 'Desktop'
	}, 
	{
		id: 3,
		name: 'Tablet'
	}
]
Router.get('/product', async(req, res) => {
	 res.send(products)
	 console.log(products)
})
Router.post('/product', async(req, res) => {
	const {name} = req.body
	console.log(name)
	products.push({
		id: products.length+1,
		name
	})
	console.log(products)
	console.log(req.body)
	res.send("Create product successfully")
})
Router.put('/product/:id', async(req, res) => {
	const { id } = req.params
	const { name } = req.body
	products.forEach((product, i) => {
		if(product.id == id){
			product.name = name
		}
	})
	res.send("Update successfully")
})

Router.delete('/product/:id', async(req, res) => {
	const { id } = req.params

	products.forEach((product, i) => {
		if(product.id == id ){
			products.splice(i,1)
		}
	})

	res.send("Delete successfully")
})
module.exports = Router