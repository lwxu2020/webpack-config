import {Button, Checkbox, Select, TextField, InputLabel, Input, OutlinedInput, RadioGroup, Radio, FormLabel, FormHelperText, FormControl, FormControlLabel } from "@mui/material";
import * as React from 'react';

const ComponentSetTwo = () => {

    const [protection, setProtection] = React.useState(false);
    const [giftCard, setGiftCard] = React.useState(false);

    return (
        <>
            <div className="area1">
                <FormControl margin="normal">
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl> &nbsp;&nbsp;
                <FormControl margin="normal">
                    <TextField 
                        variant="outlined" 
                        color="secondary" 
                        type="email"
                        size="small"
                        label="Your email" 
                        placeholder="test@test.com" 
                        helperText="Please enter your email"/>
                </FormControl>
                <br/><br/>

                <FormControl sx={{width:'25ch'}}  margin="normal">
                    <FormHelperText>Please enter birthday</FormHelperText>
                    <TextField variant="outlined" color="secondary" type="date" size="small"/>
                </FormControl><br/><br/>
                <FormControl sx={{width:'25ch'}}  margin="normal">
                    <FormHelperText>Please enter asset date</FormHelperText>
                    <TextField variant="outlined" color="secondary" type="month" size="small"/>
                </FormControl><br/><br/>
                <TextField  margin="dense" variant="outlined" color="secondary" helperText="Please enter your Name" label="Your Name" type="text"  size="small"/>&nbsp;
                <TextField  margin="dense" variant="outlined" color="secondary" helperText="Please enter your Age" label="Your Age" type="number"  size="small"/><br/>
                <br/><br/>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" labelPlacement="end" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" labelPlacement="end" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" labelPlacement="end" />
                    </RadioGroup>
                </FormControl>
                <br/><br/>
                <FormControlLabel
                    control={
                        <Checkbox checked={protection} onChange={(e) => setProtection(e.target.checked)}
                            inputProps={{'arial-label': 'secondary checkbox'}} />
                    }
                    label="Add Protection Plan"
                    labelPlacement="end" 
                /> &nbsp;
                <FormControlLabel
                    control={
                        <Checkbox checked={giftCard} onChange={(e) => setGiftCard(e.target.checked)}
                            inputProps={{'arial-label': 'secondary checkbox'}} />
                    }
                    label="Add Gift Card"
                    labelPlacement="end" 
                />
            </div>
        </>
    )
}

export default ComponentSetTwo;