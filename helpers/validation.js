const Joi = require("joi");

//Register Validation
const registerValidation = (reqBody) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return Schema.validate(reqBody)
};

//login Validation
const loginValidation = (reqBody) => {
    const Schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return Schema.validate({email : reqBody.email, password: reqBody.password})
};

const laundryValidation = (reqBody) => {
    const Schema = Joi.object({
        nama: Joi.string().min(2).required(),
        pelayanan: Joi.string().min(2).required(),
        berat: Joi.number().required(),
        harga: Joi.number().required()
    })
    return Schema.validate(reqBody)
};

module.exports = {
    registerValidation,
    loginValidation,
    laundryValidation
}