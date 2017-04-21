/**
 * Created by frank on 2016/12/15.
 * json web token
 */
const app = require('express')()
const jwt = require('express-jwt')
app.use(jwt({secret: 'shhhhhhared-secret'}).unless({path: ['/protected']}))
app.get('/protected',
  function (req, res) {
    if (!req.user) return res.status(401).send('fail');
    res.status(200).send('ok');
  });
app.listen(88)
