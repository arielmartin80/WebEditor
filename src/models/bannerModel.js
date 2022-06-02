const {Schema, model} = require('mongoose')

const bannerSchema = new Schema ({

			pos: String,
			href: String, 
			src: String,
			alt: String,
		
	})

module.exports = model('Banner', bannerSchema)