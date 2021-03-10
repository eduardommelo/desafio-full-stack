import styled from 'styled-components'

import Wave from '../../img/wave.svg'

const ContainerDash = styled.div`

    width: 100%;
    height: 100vh;
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: url(${Wave});
    background-attachment: fixed;
    overflow: auto;

    @media (min-width: 1921px) {
        width: 1920px;
        margin: 0 auto;
    }
    
`


const AreaMember = styled.div`
    height: 140px; background-color: black;

`

const MessageH = styled.h1`
    
    font-family: Whitney-Medium, sans-serif;
    font-weight: 100;
    font-size: 72pt;
    text-align: left;
    color: #1a1a1a;

    @media (max-width: 720px) {

    }
  
`

const ListMembers = styled.div`

    margin-top: 80px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #dbdbdb;

`
export {
    ContainerDash,
    AreaMember,
    MessageH,
    ListMembers
}