const mongoose = require('mongoose');
const Employee = require('../model/employee');
//const EmployeeCity = require('../model/employee_city');

exports.storeEmployee = function(req,res,next){
	const EmployeeData = new Employee({
		_id : new mongoose.Types.ObjectId(),
		fname : req.body.fname,
		lname : req.body.lname,
		password : req.body.password,
		companyname : req.body.companyname,
		contactNo : req.body.contactNo,
		message : req.body.message

	});
	EmployeeData.save()
	.then(result=>{
		res.status(200).json({
			message:'Handling post request of product',
			product:result
		});
	})
	.catch(err=>{
		console.log(err);
		res.status(200).json({
			error:err
		});
	});
	
}

exports.getEmployee = function(req,res,next){
	Employee.find()
	.then(doc=>{
		res.status(200).json(
			doc
		);

	})
	.catch(error=>{
		res.status(200).json({
			error:err
		});
	});
	
}


exports.deleteEmployee = function(req,res,next){
	emipId = req.params.employeeId;
	Employee.remove({id:emipId})
	.exec()
	.then(result=>{
		res.status(200).json({
			result
		});
	})
	.catch(err=>{
		res.status(500).json({
			error:err
		});
	});
	
}


exports.getOneEmployee = function(req,res,next){
	emipId = req.params.employeeId;
	Employee.findOne({  "id" : emipId })
		     .then(doc=>{
		       res.status(200).json(
		      		doc
		      )})

	// Employee.findById(emipId)
	// .then(doc=>{
	// 	res.status(200).json(
	// 		doc
	// 	);

	// })
	// .catch(error=>{
	// 	res.status(200).json({
	// 		error:err
	// 	});
	// });
	
}

exports.updateEmployee = (req,res,next)=>{
	const Id = req.params.employeeId;
	const fname = req.body.fname;
	const lname = req.body.lname;
	const password = req.body.password;
	const companyname = req.body.companyname;
	const contactNo = req.body.contactNo;
	const message = req.body.message;

	const objectProduct = {
		fname:fname,lname:lname,password:password,companyname:companyname,contactNo:contactNo,message:message
	}
	console.log(Id);
	console.log(objectProduct);

	Employee.findOneAndUpdate(
	                     {$and: [{  id: Id }]},
	                     objectProduct,
	                     {
	                       new: true,
	                       returnNewDocument: true,
	                     }
	                  ).then(result=>{
							res.status(200).json({
								result
							});
						})
						.catch(err=>{
							res.status(500).json({
								error:err
							});
						});

	
	
}
