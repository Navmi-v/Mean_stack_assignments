var sum = require('./operations/sum')
var sub = require('./operations/subtraction')
var mult = require('./operations/multiplication')
var div = require('./operations/division')
var moment = require('moment');

var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]


sum (firstOperand, secondOperand);
mult (firstOperand, secondOperand);
sub (firstOperand, secondOperand);
div (firstOperand, secondOperand);