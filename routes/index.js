const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator')

const validateCreateForm = [
  body("name").notEmpty().withMessage('Debes completar el campo name'),
  body("color").notEmpty().withMessage('Debes escoger color'),
  body('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Debes escribir un formato de correo valido'),

  body("age").isInt().withMessage('Tiene que ser un número')
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res){
  res.render('form')
})

router.post('/form', validateCreateForm ,function(req, res){
  let errors = validationResult(req);

  if (errors.isEmpty()){
    res.redirect('/form')

  }


})

module.exports = router;
