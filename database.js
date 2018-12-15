const pgp = require('pg-promise')();
var db = pgp('postgres://mqvvplpgwkwaww:bbe283a5d4ce86d696c0794bfca51f66630f8553225b83bff3880b169880250a@ec2-54-243-147-162.compute-1.amazonaws.com:8080/ddhq6akm6qbbtp?ssl=true');

module.exports = {
    getAllEmployees,
    getEmployeesByID
}

function getAllEmployees(req, res) {
    db.any('select * from employees')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL employees'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getEmployeesByID(req, res) {
    db.any('select * from employees where employee_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved employees id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}