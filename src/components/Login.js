import React from 'react'
import { Context } from '../context/AuthContext'
import {  FormLogin, ButtonSubmit, LabelForm } from '../assets/js/styled'

export default class Login extends React.Component {

    static contextType = Context

    constructor(props) {
        super(props)
  
        this.state = {
              username: '',
              password: ''
        }
  
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getValuesForm = this.getValuesForm.bind(this)
  
    }
  
     handleSubmit (e) {

        this.context.handleLogin({
            user: this.state.username,
            password: this.state.password
        })
       
        e.preventDefault()
    }
  
    getValuesForm(e) {
        const name = e.target.name
        this.setState({ [name] : e.target.value })
    }

    render() {
        return (
            <FormLogin onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <LabelForm htmlFor="userLabel">Usuário</LabelForm>
                    <input type="text" name="username" value={ this.state.username } onChange={ this.getValuesForm }  className="form-control login" id="userLabel" required />
                </div>
                <div className="form-group">
                    <LabelForm htmlFor="passLabel" >Senha</LabelForm>
                    <input type="password" name="password" value={ this.state.password } onChange={ this.getValuesForm } className="form-control login" id="passLabel" required />
                </div>
                <ButtonSubmit type="submit" >Entrar</ButtonSubmit>
            </FormLogin>
        )
    }
}