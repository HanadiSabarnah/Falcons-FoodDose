import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MenuDialog({ setType,setPrice,addITem,type,price }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };





    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add yo your menu
      </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Add to your menu ! "}</DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex' }}>
                        <TextField value={type} onChange={setType} />
                        <TextField value={price} onChange={setPrice} />
                        <Button onClick={addITem}> Add to your menu </Button>
                    </div>




                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}
