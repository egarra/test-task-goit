import styled from 'styled-components';
import picture from '../../picture.png'

export const UserCard = styled.li`
    width: 474px;
    height: 547px;
    background-image: url('${picture}'), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-repeat: no-repeat;
    background-position: 50% 10%;
    border-radius: 24px;
    box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 48px;
`

export const UserAvatar = styled.img`
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 50%;
`
export const UserAvatarWrapper = styled.div`
    position: relative;
    top: 50px;
    width: 92px;
    height: 92px;
    box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06), inset 0px -2.55556px 5.11111px #AE7BE3, inset 0px 5.11111px 3.83333px #FBF8FF;
    border-radius: 50%;
    background-image: radial-gradient(#AE7BE3, #FBF8FF);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const UserDiv = styled.span`
    width: 100%;
    height: 10px;
    background: #EBD8FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #AE7BE3, inset 0px 4px 3px #FBF8FF;
`

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    font-weight: 600;
    font-size: 20px;
    font-family: Montserrat;
    width: 226px;
    height: 56px;
    background: #EBD8FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: 1px solid #EBD8FF;

    transition-property: background, border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background: #5CD3A8;
        border: 1px solid #5CD3A8;
        cursor: pointer;
    }
`
export const BtnFollowed = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    font-weight: 600;
    font-size: 20px;
    font-family: Montserrat;
    width: 226px;
    height: 56px;
    background: #5CD3A8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: 1px solid #5CD3A8;

    transition-property: background, border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background: #EBD8FF;
        border: 1px solid #EBD8FF;
        cursor: pointer;
    }
`

export const Text = styled.p`
    font-size: 24px;
    line-height: calc(29/24);
    color: #EBD8FF;
    text-transform: uppercase;
`

export const ListInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;
    margin-top: 74px;
`

export const LogoImg = styled.img`
    position: relative;
    margin-right: auto;
    margin-bottom: auto;
    top: 24px;
    left: 24px;
`