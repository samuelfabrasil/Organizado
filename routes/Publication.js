const express = require('express')
const router = express.Router()
const Event = require('../models/publication')
const { protectRoute } = require("../auth/protect");

var multer = require('multer');
var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });


router.get('/', protectRoute, (req, res) => {
    Event.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('publication', { items: items });
        }
    });
});

router.post('/', upload.single('image'), (req, res, next) => {
    console.log(req.file.filename)
    var obj = {
        title: req.body.title,
        subtitle:req.body.subtitle,
        texto:req.body.texto,
        img: {
            data: fs.readFileSync(path.join('C:/Users/Aluno/Desktop/Organizado/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    Event.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/publicacoes/');
        }
    });
});

module.exports = router