const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment');
const morgan = require('morgan');

const employeeRouter = require('./api/router/employee');
// app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://priyanka:Rainbow@7@cluster0-ns4j8.mongodb.net/test?replicaSet=rs', { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

autoIncrement.initialize(connection);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use((req,res,next)=>{
// 	req.header('Access-Control-Allow-Origin','*');
// 	req.header(
// 		 'Access-Control-Allow-Headers',
// 		 "Origin,Accept,Authorozation"
// 		);

// 	if(req.method === 'OPTIONS'){
// 		req.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE");
// 		return res.status(200).json({});
// 	}
// 	next();
// });

app.use('/employee',employeeRouter);

app.use((req,res,next)=>{
	const error = new error('Not found');
	error.status=404;
	next(error);
});

app.use((error,req,res,next)=>{
	res.status(error.status || 500);
	res.json({
		message:error.message
	});
});




module.exports = app;