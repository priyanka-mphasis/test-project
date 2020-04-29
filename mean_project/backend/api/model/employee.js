/*
  * CreatedBy : Ankita Solace
  * CreatedDate : 1-01-2020
  * Purpose : Created user schema
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaType = Schema.Types;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const employeeSchema = mongoose.Schema({
	id : mongoose.Schema.Types.ObjectId,
	fname : { type:String , required : true},
	lname : { type:String , required : true},
	password : { type:String , required : true},
	companyname : { type:String , required : true},
	contactNo : { type:String , required : true},
	message : { type:String , required : true},
});

employeeSchema.plugin(autoIncrement.plugin, { model: 'employee', field: 'id',startAt: 1 });
module.exports = mongoose.model('employee',employeeSchema );
