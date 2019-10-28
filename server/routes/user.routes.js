let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let user = require('../models/user-schema');

router.route('/create').post((req, res, next) => {
    console.log("inside create")
    user.create(req.body, (error, data) => {
        if (error) {
            console.log("error in create------")
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/users').get((req, res) => {
    user.find((error, data) => {
        if (error) {
            //console.log("inside get error")
            return next(error)
        } else {
            //console.log("no error in get")
            res.json(data)
        }
    })
})

router.route('/edituser/:userid').get((req, res) => {
    user.findById(req.params.userid, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
            console.log(msg)
        }
    })
})

module.exports = router;