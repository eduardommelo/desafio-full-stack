import React from 'react'
import { ContainerDash, MessageH, ListMembers } from '../assets/js/styled/dashboard'
import { Navbar, AreaMamber } from '../assets/js/styled/navbar'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default class Dashboard extends React.Component {


    render() {
        return (
            <ContainerDash>
                <Navbar>
                    <AreaMamber>
                        <div className="avatar-member"></div>
                        <div className="info-member">
                            <span>Usuário</span>
                        </div>
                    </AreaMamber>
                </Navbar>
                <div className="container-fluid">
                    <div className="container margin-70">
                        <div className="row">
                            <div className="col-12">
                                <MessageH>Olá, Usuário</MessageH>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ListMembers>
                                    <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">CEP</th>
                                            <th scope="col">Endereço</th>
                                            <th scope="col">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Eduardo Melo</th>
                                            <td>00000-000</td>
                                            <td>dasddadasdsadsaas</td>
                                            <td><FontAwesomeIcon icon={ faTrash } /></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </ListMembers>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerDash>
        )
    }
}