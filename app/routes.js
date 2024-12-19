const router = require("express").Router()
const tokenValidate = require("../helpers/verify_token")

//MULTER - File Upload
const multer = require('multer')
var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function (req, file, cb) {
            let extArray = file.mimetype.split("/");
            let extension = extArray[extArray.length - 1];
            // cb(null, file.originalname + '-' + Date.now() + "." + extension);
            cb(null, file.originalname);
        }
    }
);
const upload = multer({ storage })


//routes
const controller = require("../controller/index")

router.get('/example', tokenValidate, controller.example.test);

router.post('/register', controller.auth.register);
router.post('/login', controller.auth.login);
router.get('/profile', tokenValidate, controller.profile.index);
router.post('/profile/update', tokenValidate, upload.single('picture'), controller.profile.update);

router.get('/laundry', tokenValidate, controller.laundry.index);
router.post('/laundry/store', tokenValidate, controller.laundry.store);
router.get('/laundry/show/:id', tokenValidate, controller.laundry.show);
router.put('/laundry/update/:id', tokenValidate, controller.laundry.update);
router.delete('/laundry/delete/:id', tokenValidate, controller.laundry.destroy);



module.exports = router