const { Router } = require('express')
const router = Router()
const Product = require('../models/productModel')


// GET ALL FULL Products
router.get('/', async(req, res) => {
	const products = await Product.find().sort({pos: 1 })
	res.json(products)
})


// GET ALL FULL Products
router.get('/find', async(req, res) => {
	const products = await Product.find().sort({pos: 1 })
	console.log(products)
	res.json(products)
})


// CREATE Product
router.post('/', async(req, res)=>{
	const {name, price, description, category, img_product} = req.body
	try{
			const product = new Product({name, price, description, category, img_product})
		console.log(product)
			const dataSaved = await product.save()
			res.json(dataSaved)
	}catch(error){
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
		
	} catch(error){
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
    } catch (error) {
        res.status(500).json({ message: 'Error to delete' 			})
    }
})


module.exports = router