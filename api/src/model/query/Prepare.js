const { UsersModel } = require('../Schemas')

const Update = async (data) => {
    const verify = await UsersModel.findOne({ cep: data.cep})
    if(verify) {
        await UsersModel.updateOne({ cep: data.cep }, { $set: data.update })
        return {
            status: 200,
            message: 'Deletado com sucesso'
        }

    } else return ({ status: 404 })
}

const Delete = async (data) => {

    const verify = await UsersModel.findOne({ cep: data.cep})
    if(verify) {
        await UsersModel.deleteOne({ cep: data.cep })
        return {
            status: 200,
            message: 'Dados apagado com sucesso.'
        }
    } else return {
        status: 404,
        message: 'Usuário não encontrado.'
    }
    
}

const Register = async (data) => {

    const verify = await UsersModel.findOne({ cep: data.cep})
    if(verify) return { isExists: true }

    await UsersModel.insertMany({
        id: (new Date()).getTime(),
        name: data.name,
        address: data.address,
        city: data.city,
        uf: data.uf,
        phone: data.phone,
        email: data.email,
        cep: data.cep
    })

    return {
        isExists: false,
        data
    }

}
const FindAll = async (data) => {
    const list = await UsersModel.find()
    return {
        status: 200,
        response: list
    }
}

const FindOne =  async (data) => {
    const findOne = await UsersModel.find({ name: data.name })
    if(!findOne) return { status: 404, message: 'Nenhuma pesquisa encontrada.,'}
    return {
        status: 200,
        response: findOne
    }
}

module.exports = {

    Register,
    Delete,
    Update,
    FindAll,
    FindOne
}