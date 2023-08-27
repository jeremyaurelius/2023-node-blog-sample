import express = require('express');
import morgan = require('morgan');
import path = require('path');
import './set-up-env';
import { apiRoutes } from './routes/api-routes';
import { viewRoutes } from './routes/view-routes';
import { setUpMongoDB } from './set-up-mongo-db';

const app = express();

// set up DB, then let server listen for connections
setUpMongoDB().then(() => app.listen(3000));

// register view engine
app.set('view engine', 'ejs');
// by default `${projectPath}/views` is the folder used for views
app.set('views', path.resolve(__dirname, 'views'));

// parse application/json in the request body
// this is useful for REST
// we can also use express.json()
app.use(express.json());
// parse URL encoded payloads inside the request body. For example: username=jakeperalta&password=password123
// this is useful to parse data from sent via a "submit" button in an HTML form
// we can also use express.urlencoded({ extended: false })
app.use(express.urlencoded({ extended: false }));

// morgan logger middleware
// dev is the format we are using
app.use(morgan('dev'));

// static files
// serve files in ./public folder
app.use(express.static(path.resolve(__dirname, 'public')));

// REST CRUD operations
app.use(apiRoutes);

// View Routes
app.use(viewRoutes);
