const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');
const DashbordController = require('./controllers/DashbordController');

//Config do upload
const multer = require('multer');
const uploadConfig = require('./config/upload')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); // Criação do usuario

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/spots', SpotController.index);
routes.get('/dashbord', DashbordController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;