const {Router}= require('express')
const router = Router()
const Social = require('../models/socialModel')


// GET links Redes Sociales
router.get('/', async(req, res) => {
	const social = await Social.find().sort({pos: 1 })
	res.json(social)
})


// CREATE link red Social
router.post('/', async(req, res) => {
	const {pos, href, src, alt, value} = req.body
	try{
			const itemSocial = new Social({pos, href, src, alt, value})
		//console.log(itemSocial)
			const dataSaved = await itemSocial.save()
			res.json(dataSaved)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// UPDATE link Red Social
router.put('/:value', async(req, res) => {
	const {pos, href, src, alt, value} = req.body
	const filter = {'value': value}
	try{
			const dataUpdated = await Social.findOneAndUpdate(filter, req.body, {new: true})
			res.json(dataUpdated)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// DELETE link Red Social
router.delete('/:value', async(req, res) => {
	    try {
				const { value } = req.params
				console.log(value)
				//const dataDeleted = await Social.findOne({'value' : value })
        await Social.deleteOne({ value : value } )
        res.json({ message: 'Deleted:  ' + value })
    } catch (error) {
        res.status(500).json({ message: 'Error to delete' 			})
    }
})


module.exports = router