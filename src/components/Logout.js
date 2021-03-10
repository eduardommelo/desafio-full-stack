import React from 'react'
import { Context } from '../context/AuthContext'

export default class Logout extends React.Component {

    static contextType = Context

    render() { return ( this.context.handleLogout() ) }
}