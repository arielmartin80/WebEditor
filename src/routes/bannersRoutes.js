const {Router}= require('express')
const router = Router()
const Banner = require('../models/bannerModel')

// GET Banners
router.get('/', async(req, res) => {
	const banners = await Banner.find().sort({pos: 1 })
	res.json(banners)
})


// CREATE Banner
router.post('/', async(req, res)=>{
	const {pos, href, src, alt} = req.body
	try{
			const item = new Banner({pos, href, src, alt})
		console.log(item)
			const dataSaved = await item.save()
			res.json(dataSaved)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})


// UPDATE BANNER
router.put('/:pos', async(req, res)=>{
	const {pos, href, src, alt} = req.body
	const filter = {'pos': pos}
	try{
			const dataUpdated = await Banner.findOneAndUpdate(filter, req.body, {new: true})
			res.json(dataUpdated)
	}catch(error){
			console.log(error)
			res.status(500).json({ message: 'Error to Create' })
	}
})

module.exports = router