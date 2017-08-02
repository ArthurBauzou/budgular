const express = require('express');
const router = express.Router();

const userModel = require('../models/user')



router.get('/', function(req, res) {
  userModel.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  })
})

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

router.delete('/:id', function(req, res) {
  userModel.deleteOne({ _id: req.params.id }, function(err, user){
    if (err) res.send(err)
    res.json(user)
  })
})

module.exports = router;