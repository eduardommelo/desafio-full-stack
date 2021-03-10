const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
    const errorStatus = {
        status: 401, message: 'Unauthorized'
    }

    const { authorization } = req.headers

    if(!authorization) 
        return res.status(401)
        .json(errorStatus)
    
    const [, token] = authorization.split(' ')
    await promisify(jwt.verify)(token, 'SECRET')
    .then( r => next())
    .catch(err => res.status(401).json({status: 401, message: 'Unauthorized'}))
   
}