const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    config = require('./config/DB'),
    coinRoutes = require('./router/coinRoutes'),
    adUnitRoutes = require('./router/adunitRoute'),
    businessRutes = require('./router/businessRoute'),
    productRoutes = require('./router/productRouter'),
    router = require('./router/userRoute'),
    projectRoutes = require('./router/projectRoutes');

    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true);
    mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );



    const app = express();
    app.use(bodyParser.json());

    let corsOptions = {
      origin: 'http://localhost:4200',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    app.use(cors(corsOptions))
    app.use(morgan('dev'));
    const port = process.env.PORT || 4001;

    app.use('/coins', coinRoutes);
    app.use('/adunits', adUnitRoutes);
    app.use('/business', businessRutes);
    app.use('/products', productRoutes);
    app.use('/users', router);
    app.use('/projects', projectRoutes);


    const  server = app.listen(port, function(){
      console.log('Listening on Port ' + port);
    });
