const {Schema, model} = require('mongoose')

const headerSchema = new Schema ({
		title: String,
		img_logo: {
			href:String, 
			src: String,
			alt: String
		}
	})

module.exports = model('Header', headerSchema)