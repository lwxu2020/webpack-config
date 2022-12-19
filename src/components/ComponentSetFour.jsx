import {Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Select, Menu, MenuItem, MenuList, InputLabel, InputBase, Input, OutlinedInput, FormLabel, FormHelperText, FormControl, FormControlLabel, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Draggable from 'react-draggable';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsIcon from '@mui/icons-material/Directions';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Check from '@mui/icons-material/Check';
import Cloud from '@mui/icons-material/Cloud';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import * as React from 'react';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

function DraggableDialog(props) {
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Subscribe
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={props.handleClose}>
              Cancel
            </Button>
            <Button onClick={props.handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

const ComponentSetFour = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="area1">
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open draggable dialog
                </Button>                
            </div>
            <div>
                <DraggableDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
            </div>
        </div>
    )
}

export default ComponentSetFour;