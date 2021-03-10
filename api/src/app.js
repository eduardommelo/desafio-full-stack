const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')

const app  = () => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    
    consign({
        cwd: process.cwd(),
    })
    
    .then('/src/routes')
    .into(app)
    app.listen(8080, () => console.log('[API] Iniciado com sucesso.'))
}

module.exports = app