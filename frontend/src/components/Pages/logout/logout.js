import React from 'react';
import './logout.css'
import { styled, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar } from '@material-ui/core';
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
const Logout1 = styled(Button)({
    background: '#F69624',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '20px 30px'
});
function Logout() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" class="appbar">
                <Toolbar>
                    <Logout1 onClick={() => {
                        localStorage.clear();
                        window.location.href = '/'
                    }} id="logout">Logout</Logout1>
                </Toolbar>
            </AppBar>
        </div>
    );

}


export default Logout;