const {Router}= require('express')
const router = Router()
const Nav = require('../models/navModel')


// GET NAV
router.get('/', async(req, res) => {
	const nav = await Nav.find().sort({pos: 1 })
	res.json(nav)
})


// CREATE NAV
router.post('/', async(req, res) => {
	const {pos, href, src, alt, value} = req.body
	try{
			const itemNav = new Nav({pos, href, src, alt, value})
		//console.log(itemNav)
			const dataSaved = await itemNav.save()
			res.json(dataSaved)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// UPDATE NAV
router.put('/:value', async(req, res) => {
	const {pos, href, src, alt, value} = req.body
	const filter = {'value': value}
	try{
			const dataUpdated = await Nav.findOneAndUpdate(filter, req.body, {new: true})
			res.json(dataUpdated)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// DELETE NAV
router.delete('/:value', async(req, res) => {
	    try {
				const { value } = req.params
				console.log(value)
				//const dataDeleted = await Nav.findOne({'value' : value })
        await Nav.deleteOne({ value : value } )
        res.json({ message: 'Deleted:  ' + value })
    } catch (error) {
        res.status(500).json({ message: 'Error to delete' 			})
    }
})


module.exports = router