const express = require('express');
const router = express.Router();

const userModel = require('../models/user')

router.get('/', function(req, res) {
  userModel
  .find({name: /.+/})
  .select('_id name')
  .exec((err, users) => {
    if (err) res.send(err);
    res.json(users);
  })
})

// au cas ou j'en aurais besoin mais pour l'instant je ne pense pas
// router.get('/:id', function(req, res) {
//   userModel
//   .findOne({_id: req.params.id})
//   .exec((err, user) => {
//     if (err) res.send(err);
//     res.json(user);
//   })
// })

router.post('/', function(req, res) {
  
  var newUser = new userModel({
    "name": req.body.name,
    "pass": req.body.pass
  })

newUser.save(function(err, user){
    if (err) res.send(err)
    res.json(user)
  })

})

router.delete('/all', function(req, res) {
  userModel.deleteMany((err, users) => {
    if (err) res.send(err)
    res.json(users)
  })
})

router.delete('/:id', function(req, res) {
  userModel.deleteOne({ _id: req.params.id }, function(err, user){
    if (err) res.send(err)
    res.json(user)
  })
})

module.exports = router;