const {Router}= require('express')
const router = Router()
const Header = require('../models/headerModel')
const Nav = require('../models/navModel')


// CREATE HEADER 
router.post('/', async(req, res)=>{
	const {title, img_logo, nav} = req.body
	try{
			const header = new Header({title, img_logo, nav})
			const dataSaved = await header.save()
			res.json(dataSaved)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// GET HEADER
router.get('/', async(req, res)=>{
	const header = await Header.find()
	res.json(header[0])
})


// UPDATE HEADER
router.put('/', async(req, res)=>{
	const {title, img_logo} = req.body
	try{
			const header = await Header.find()
			const id = header[0]._id
			const newData = await Header.findByIdAndUpdate(id, {title, img_logo}, {new: true})
			res.json(newData)
	}catch(error){
			res.status(500).json({ message: 'Error to Update' })
	}
})


// DELETE HEADER
router.delete('/', async(req, res)=> {
	    try {
				const header = await Header.find()
				const id = header[0]._id
        const dataDeleted = await Header.findByIdAndDelete(id)

        res.json({ message: 'Deleted:  ' + dataDeleted })
    } catch (error) {
        res.status(500).json({ message: 'Error to delete' })
    }
})


// GET NAV
router.get('/nav', async(req, res) => {
	const nav = await Nav.find().sort({pos: 1 })
	res.json(nav)
})


// CREATE NAV
router.post('/nav', async(req, res)=>{
	const {pos, href, src, alt, value} = req.body
	try{
			const itemNav = new Nav({pos, href, src, alt, value})
		console.log(itemNav)
			const dataSaved = await itemNav.save()
			res.json(dataSaved)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// UPDATE NAV
router.put('/nav/:value', async(req, res)=>{
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
router.delete('/nav/:value', async(req, res)=> {
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