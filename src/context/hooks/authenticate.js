

import history from '../../history'
import { oAuth,  verifyAuth } from '../../api/auth'

export default function Authenticate ()   {

    async function handleVerify() {
        const token = localStorage.getItem('token')
        if(token) {
            const verify = await verifyAuth(token)
            if(verify.status === 200) {
                return history.push('/dashboard')
            }else return history.push('/')
            
        }

    }

   async function handleLogin(data) {
          const auth = await oAuth({
            user: data.user,
            password: data.password
        })

         if(auth.status === 401) {
            return auth }
        localStorage.setItem('token', auth.prepareStatus.login.token)
        history.push('/dashboard')
    }

    function handleLogout() {
        localStorage.removeItem('token')
        history.push('/')
    }

    return { handleVerify, handleLogin, handleLogout }
}