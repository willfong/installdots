const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.redirect('https://github.com/willfong/installdots'))
  .get('/choco', (req, res) => {
    res.render('pages/choco');
  })
  .get('/brew', (req, res) => {
    res.render('pages/brew');
  })
  .get('/:username', (req, res) => {
    let {username} = req.params;
    res.render('pages/shellscript', { username });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
