import fetch from 'node-fetch'

const oAuth = async (data) => {

    const { user, password } = data
    if(!user || !password) 
        return {
            status: 401,
            user: user ? user : false,
            password: password ? password : false
        }

    const Authenticate = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        body: JSON.stringify({
            user: user,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }})
    if(Authenticate)
        return await Authenticate.json()
}

const verifyAuth = async (token) => {
    const verify = await fetch('http://localhost:8080/api/login',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })

    return await verify.json()
}



export {
    oAuth,
    verifyAuth
}