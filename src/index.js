const express = require('express');
const responseTime = require('response-time')
const app = express();
const path = require('path')
require('./models/database')
const cors = require('cors')


// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(responseTime())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


// Routes
app.use('/header', require('./routes/headerRoutes'))
app.use('/nav', require('./routes/navRoutes'))
app.use('/banners', require('./routes/bannersRoutes'))
app.use('/products', require('./routes/productsRoutes'))
app.use('/footer', require('./routes/footerRoutes'))
app.use('/socials', require('./routes/socialRoutes'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))


// Start server
app.listen(app.get('port'), () => {
  console.log(process.env['URI_REPLIT'] );
});
