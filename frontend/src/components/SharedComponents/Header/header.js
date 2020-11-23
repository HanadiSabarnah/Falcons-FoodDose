import React from 'react';
import './header.css'
import { styled, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Login = styled(Button)({
    background: '#F69624',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '20px 30px',
});
function Header() {

    const classes = useStyles();



    return (
        <div className={classes.root}>
            <AppBar position="static" class="appbar">
                <Toolbar>

                    <Typography variant="h6" className={classes.title} id="fooddose" onClick={() => {
                        window.location.href = '/'
                    }} >
                        FoodDose
                            </Typography>

                    <Login onClick={() => {
                        window.location.href = '/login'
                    }} id="login">LogIn</Login>

                </Toolbar>
            </AppBar>
        </div>
    );

}


export default Header;