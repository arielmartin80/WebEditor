const { Router } = require('express')
const router = Router()
const Footer = require('../models/footerModel')


// GET footer
router.get('/', async (req, res) => {
	const footer = await Footer.find()
	res.json(footer[0])
})


// CREATE Footer
router.post('/', async (req, res) => {
	const { addres, devData } = req.body
	try {
		const footer = new Footer({ addres, devData })
		console.log(footer)
		const dataSaved = await footer.save()
		res.json(dataSaved)
		} 
	catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error to Create' })
		}
})


// UPDATE Footer
router.put('/', async (req, res) => {
	const { addres, devData } = req.body
	const footer = await Footer.find()
	const id = footer[0]._id
	console.log(id)
	const filter = { '_id': id }
	try {
		const dataUpdated = await Footer.findOneAndUpdate(filter, req.body, { new: true })
		//console.log(req.body)
		res.json(dataUpdated)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error to Create' })
	}
})



module.exports = router