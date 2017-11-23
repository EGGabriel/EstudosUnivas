const express = require('express')
const app = express()
const path = require('path')
const PORT = 3001

//express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const data = { poke:null}
    response.render('index', data)
})

app.get('/poke', (request, response) => {
    const { getPoke } = require ('./app/find-poke')
    pokeInfo = getPoke(request.query.pokeId)
    const data = {
        poke: pokeInfo
    }
    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})