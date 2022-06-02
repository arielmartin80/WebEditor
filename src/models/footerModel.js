const {Schema, model} = require('mongoose')

const footerSchema = new Schema ({
		addres: String,
		devData: String
	})

module.exports = model('Footer', footerSchema)