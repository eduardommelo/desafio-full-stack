import React, { createContext } from 'react'
import Authenticate from './hooks/authenticate'

const Context = createContext()


class AuthContext extends React.Component {
    render() {

        const {  handleVerify, handleLogin, handleLogout 
        } = Authenticate()

        return (
            <Context.Provider value={ {  handleVerify, handleLogin, handleLogout } }>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export {
    Context,
    AuthContext
}