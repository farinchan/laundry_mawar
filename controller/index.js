const controller = {}

//inisialisasi controller yang dibuat kesini
const auth = require("./auth")
const profile = require("./profile")
const example = require("./example")
const laundry = require("./laundry")

controller.auth = auth;
controller.profile = profile;
controller.example = example;
controller.laundry = laundry;



module.exports = controller