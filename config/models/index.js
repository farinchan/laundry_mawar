let model = {}

const user = require("./users")
const Laundry = require("./laundry")

model.user = user
model.laundry = Laundry

module.exports = model