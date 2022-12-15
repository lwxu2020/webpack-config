import {Button, Select, Menu, MenuItem, InputLabel, InputBase, Input, OutlinedInput, FormLabel, FormHelperText, FormControl, FormControlLabel, TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsIcon from '@mui/icons-material/Directions';
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
            </div>
        </>
    )
}

export default ComponentSetThree;