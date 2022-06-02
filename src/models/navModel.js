const {Schema, model} = require('mongoose')

const navSchema = new Schema ({

			pos: String,
			href: String, 
			src: String,
			alt: String,
			value: String
	
	})

module.exports = model('Nav', navSchema)