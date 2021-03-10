import styled from 'styled-components'
import Waves from '../../img/wave.svg'

const GlobalContainer = styled.div`
    
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(${Waves});

`
const Content = styled.div`

    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 480px;

    @media (max-width: 720px) {
        margin: 8px;
    }

`

const FormLogin = styled.form`

    padding: 8px;
    
`

const ButtonSubmit = styled.button`

    border-radius: 5px;
    background-color: #1a1a1a;
    color: #ffff;
    border: 1px solid #2b2b2b;
    display: block;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    text-transform: uppercase;

    &:hover {
        background-color: #2b2b2b;
    }
`
const Wave = styled.div`
    width: 100%;
    height: 390px;
    background-image: url(${Waves});
    background-size: 100%;
    background-position: center;
`

const LabelForm = styled.label`

    font-family: Helvetica, sans-serif;
    font-size: 9pt;
    font-weight: bold;
    color: #8a8a8a;
    text-transform: uppercase;

`

const LogoPanel = styled.h1`

    font-weight: bold;
    font-family: Whitney-Medium, sans-serif;
    color: #1a1a1a;
    text-align: center;
    text-transform: uppercase;
`
const SpanGrey = styled.span`

    color: #a1a1a1;
`

export {

    Content,
    FormLogin,
    ButtonSubmit,
    Wave,
    GlobalContainer,
    LabelForm,
    LogoPanel,
    SpanGrey
}