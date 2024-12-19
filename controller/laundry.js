const model = require("../config/models/index")
const validation = require("../helpers/validation")

let controller = {}

controller.index = async function (req, res) {

    let result = await model.laundry.findAll()
    res.json({
        messsage: "success",
        result
    })

};

controller.store = async (req, res) => {

    const nama = req.body.nama
    const pelayanan = req.body.pelayanan
    const berat = req.body.berat
    const harga = req.body.harga

    const validationError = validation.laundryValidation(req.body).error
    if (validationError) return res.status(400).json({ message: validationError.details[0].message })

    const result = await model.laundry.create({
        nama: nama,
        pelayanan: pelayanan,
        berat: berat,
        harga: harga
    })

    res.json({
        messsage: "success",
        result
    })

};

controller.show = async (req, res) => {

    const id = req.params.id

    const result = await model.laundry.findByPk(id)
    res.json({
        messsage: "success",
        result
    })

};

controller.update = async (req, res) => {
    
    const id = req.params.id
    const nama = req.body.nama
    const pelayanan = req.body.pelayanan
    const berat = req.body.berat
    const harga = req.body.harga

    const validationError = validation.laundryValidation(req.body).error
    if (validationError) return res.status(400).json({ message: validationError.details[0].message })

    const result = await model.laundry.update({
        nama: nama,
        pelayanan: pelayanan,
        berat: berat,
        harga: harga
    }, {
        where: {
            id: id
        }
    })

    res.json({
        messsage: "success",
        result
    })

};

controller.destroy = async (req, res) => {
    
    const id = req.params.id

    const result = await model.laundry.destroy({
        where: {
            id: id
        }
    })

    res.json({
        messsage: "success",
        result
    })

};

module.exports = controller;
