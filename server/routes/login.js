const express = require('express');
const router = express.Router();

const userModel = require('../models/user')

router.post('/', function(req, res) {
  userModel.findOne({_id: req.body._id}, (err, user) => {

    if (err) res.send(err)
    if (!user) res.send('invalid id')
    else if (user.pass !== req.body.pass) { 
      res.send('invalid pass') }
    else res.send('bwavo!')

  })
})

module.exports = router