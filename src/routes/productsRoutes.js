const { Router } = require('express')
const router = Router()
const Product = require('../models/productModel')


// GET ALL Products
router.get('/', async(req, res) => {
	try {
		const products = await Product.find().sort({pos: 1 })
		res.json(products)
		}
	catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error to Get All' })
	}
})


// GET One Product
router.get('/:id', async(req, res) => {
	try {
			const id = req.params.id
			const product = await Product.findById(id)
			res.json(product)
			}
	catch(error) {
			res.status(500).json({ message: 'Error to Get One' })
	}
})


// CREATE Product
router.post('/', async(req, res)=>{
	const {name, price, description, category, img_product} = req.body
	try {
		const product = new Product({name, price, description, category, img_product})
		console.log(product)
		const dataSaved = await product.save()
		res.json(dataSaved)
		}
	catch(error) {
		console.log(error)
		res.status(500).json({ message: 'Error to Save' })
		}
})


// UPDATE Product
router.put('/:id', async(req, res)=>{
	const {name, price, description, category, img_product} = req.body
	const filter = {'_id': req.params.id}
	console.log(filter)
	try {
		const dataUpdated = await Product.findOneAndUpdate (
			filter, 
			req.body, 
			{new: true}
			)
		res.json(dataUpdated)
		}
	catch(error) {
		console.log(error)
		res.status(500).json({ message: 'Error to Update' })
		}
})


// DELETE Product
router.delete('/:id', async(req, res)=> {
	  try {
			const { id } = req.params
      await Product.deleteOne({ '_id' : id } )
      res.json({ message: 'Deleted:  ' + id })
    	} 
		catch (error) {
      res.status(500).json({ message: 'Error to delete' })
    	}
})


module.exports = router