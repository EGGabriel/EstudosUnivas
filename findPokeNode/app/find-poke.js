var pokes = require('../db/pokeDB.json')

module.exports = {
    getPoke(id){
        let poke = pokes.find(poke => poke.id == id)
        if(poke) {
            poke.name = poke.name
            poke.type = poke.type
        }
        return poke
    }
}
