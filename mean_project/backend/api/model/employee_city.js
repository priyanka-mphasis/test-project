/*
  * CreatedBy : Priyanka Solace
  * CreatedDate : 1-01-2020
  * Purpose : Created user schema
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaType = Schema.Types;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const employeeCitySchema = mongoose.Schema({
	id : mongoose.Schema.Types.ObjectId,
	name : { type: mongoose.Schema.Types.ObjectId,
     ref: 'employee'},
});

employeeCitySchema.plugin(autoIncrement.plugin, { model: 'employee_city', field: 'id',startAt: 1 });
module.exports = mongoose.model('employee_city',employeeSchema );
