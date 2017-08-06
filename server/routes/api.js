const express = require('express');
const router = express.Router();

/* GET api listing. */
// router.use((req, res, next) => {
//     console.log(req.headers.Autorisation)
//   if (req.headers.autorisation === 'gateauFraise') {
//     console.log('allowed!')
//     next();
//   } else {
//     res.status(404).send({
//         success: false,
//         message: 'Rien du tout'
//     })
//   }
// })

router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;