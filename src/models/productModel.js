const {Schema, model} = require('mongoose')

const productSchema = new Schema ({
		name: String,
		price: Number,
		description: String,
		category: String,
		img_product: {
			href: String, 
			src: String,
			alt: String
		}
	})

module.exports = model('Product', productSchema)