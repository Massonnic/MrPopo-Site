const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('layouts/default', {page: 'home'})
})
app.get('/managment', (req, res) => {
    res.render('layouts/default', {page: 'options'})
})

app.listen(8080)