const {Schema, model} = require('mongoose')

const socialSchema = new Schema ({

			pos: Number,
			href: String, 
			src: String,
			alt: String,
			value: String
	})

module.exports = model('Social', socialSchema)