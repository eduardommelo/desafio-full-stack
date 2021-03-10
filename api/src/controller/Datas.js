
const { Register, Update, Delete, FindAll, FindOne } = require('../model/query/Prepare')
const { USER_DATA } = require('../../Constants')

const DropDELETE = async (req, res) => {
        const body = req.body

        if(!body.cep) return res.status(401)
        .json({ status: 401, message: 'Informe o cep.'})

        const deteled = await Delete(body)
        return res.status(deteled.status)
        .json(deteled)
}

const UpdatePUT = async (req, res) => {
    const body = req.body

    let validate = []
    Object.keys(JSON.parse(body.update)).forEach( e => validate.push( USER_DATA[e] ? true : false ))

    if(validate.includes(false)) return res.status(401)

    await Update({
        cep: body.cep,
        update: JSON.parse(body.update)
    })

    return res.status(200)
    .json({
        status: 200,
        message: 'Campo atualizado com sucesso.'
    })

}

const RegisterPOST = async (req, res) => {
    const body = req.body

    if(Object.keys(body).length < (Object.keys(USER_DATA).length-1)) return res.status(404)
    .json({ status: 404, message: 'Algum campo faltando' })

   const dataRegister = await Register(body)
    if(dataRegister)
        res.status(200)
        .json({status: 200, dataRegister})
}

const FindGET = async (req, res) => {

    const usersAll = await FindAll(req.body)
    res.status(usersAll.status)
    .json(usersAll)
}

const FindPOST = async (req, res) => {
    const body = req.body

    if(!body.name) return res.status(401)
    .json({ status: 401, message: 'Informe o atributo válido.' })

    const findOne = await FindOne(body)
    res.status(findOne.status)
    .json(findOne)
}

module.exports = {
    RegisterPOST,
    FindGET,
    UpdatePUT,
    DropDELETE,
    FindPOST
}