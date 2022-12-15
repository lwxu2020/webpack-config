import {Button, Container, Grid, Select, Menu, MenuItem, MenuList, InputLabel, InputBase, Input, OutlinedInput, FormLabel, FormHelperText, FormControl, FormControlLabel, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
import * as React from 'react';

const ComponentSetThree = () => {

    const [age, setAge] = React.useState(20);

    const handleChange = (e) => {
        setAge(e.target.value);
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 20,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

      const StyledButton = styled(Button)(({ theme }) => ({
          background: 'linear-gradient(45deg, #FE688B, #FF8E53)',
          border: 0,
          borderRadius: 15,
          color: 'white',
          padding: '10px 30px',
          margin: '30px 10px'
      }));

    return (
        <>
            <div className="area1">
                <Container maxWidth="md">
                    <FormControl margin="normal" fullWidth>
                        <InputLabel id="age-select-label">Age</InputLabel>
                        <Select
                            labelId="age-select-label"
                            size="small"
                            id="age-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                <MenuItem value={40}>Fourty</MenuItem>
                        </Select>
                        <FormHelperText>Please enter you age</FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <DirectionsIcon />
                        </IconButton>
                    </Paper>
                    <br></br>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={3} sm={6}>
                            <Paper style={{height:75, width: '100%', }}/>
                        </Grid>
                        <Grid item xs={3} sm={6}>
                            <Paper style={{height:75, width: '100%', }}/>
                        </Grid>
                        <Grid item xs={3} sm={6}>
                            <Paper style={{height:75, width: '100%', }}/>
                        </Grid>
                        <Grid item xs={3} sm={6}>
                            <Paper style={{height:75, width: '100%', }}/>
                        </Grid>
                    </Grid>
                    <br></br>
                    <StyledButton 
                        variant="outlined"
                        color="primary"
                        type="text">
                        My Styled Button
                    </StyledButton>
                    <br></br>
                    <Stack spacing={2} direction="row">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="success">
                            <MailIcon color="action" />
                        </Badge>
                        <IconButton aria-label="cart">
                            {/* <Badge badgeContent={2} color="secondary">
                                <ShoppingCartIcon />
                            </Badge> */}
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Stack>
                    <br/><br/>
                    <Paper sx={{width:320, maxWidth: '100%'}}>
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCut fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Cut</ListItemText>
                                <Typography variant="body2" color="secondary">
                                    ⌘X
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopy fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                                <Typography variant="body2" color="secondary">
                                    ⌘C
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPaste fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                                <Typography variant="body2" color="secondary">
                                    ⌘V
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Check fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>New</ListItemText>
                                <Typography variant="body2" color="secondary">
                                    ⌘N
                                </Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Web Clipboard</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>

                </Container>              
            </div>
        </>
    )
}

export default ComponentSetThree;