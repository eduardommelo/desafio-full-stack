import styled from 'styled-components'
import AvatarDefault from '../../img/member-default.svg'

const Navbar = styled.nav`

    height: 60px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    background-color: #fff;
    
`

const AreaMamber = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 8px;

    > .avatar-member {

        height: 32px;
        width: 32px;
        background-size: 90%;
        border-radius: 50%;
        border: 1px solid #dbdbdb;
        background-repeat: no-repeat;
        background-image: url(${props => props.avatar ? props.avatar : AvatarDefault});
        background-position: center;

    }
    > .info-member {
        margin-left: 8px;
    }
    > .info-member > span {
        font-family: Whitney-Medium, sans-serif;
        font-size: 11pt;
        font-weight: 600;
        color: #333333;

    }
`

const AreaLogout = styled.div`
    flex: 1;

    > a {
        float: right;
        color: red;
        margin-right: 8px;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
    }

    > a:hover {
        color: #d60202;
    }

`
export {
    Navbar,
    AreaMamber,
    AreaLogout
}