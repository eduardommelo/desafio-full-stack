import React from 'react'
import {   Route, Switch } from 'react-router-dom'
import { Context } from './context/AuthContext'

import App from './pages/App'
import Dashboard from './pages/Dashboard'

class RoutePrivate extends React.Component {

    static contextType = Context

    constructor(props) {
        super(props)

        this.state = { auth: false }
    }

    async componentDidMount() { await this.context.handleVerify()  }
    render() {
        return <Route {...this.props} />
    }
}


export default class Routes extends React.Component {
    render() {
        return (
                <Switch>
                    <RoutePrivate exact path="/" component={ App } />
                    <RoutePrivate isPrivate path="/dashboard" component={ Dashboard } />
                    <Route exact component={ () => <h1>Not found</h1> } />
                </Switch>
        )
    }
}
