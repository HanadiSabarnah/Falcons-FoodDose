import React from 'react';
import './header.css'
import DialogHeader from './Dialog'
import { Button } from '@material-ui/core';

const Header = ({ userId,login,setLogin,setAdmin,setUser,setOwner }) => {

    const LogOut = () => {
        localStorage.removeItem('auth-rest')
        localStorage.removeItem('userId')
        localStorage.removeItem('adminId')
        localStorage.removeItem('ownerId')
        setLogin(false)
        setAdmin('')
        setUser('')
        setOwner('')
    }

    return (
        <div className='header'>
            <img className='header__logo' src='https://i.pinimg.com/originals/6e/45/8c/6e458c5c2c3038766eab5a6321337de2.png' alt='logo' />

            <div className='header__titles'>
                <DialogHeader userId={userId} />
                {
                    login ? <Button onClick={LogOut} > LogOut </Button> : <div></div>
                }
            </div>

        </div>
    )

}


export default Header;