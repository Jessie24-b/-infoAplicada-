'use strict'

import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, './arch'))
    },
    filename: (req, file, cb) =>{
       // cb(null, `${file.fieldname} - ${Date.now()}.${file.mimetype.split('')[1]}`)
       cb(null, Date.now() + "--" + file.originalname);
    },
});

var upload = multer({ storage: storage})

module.exports = upload