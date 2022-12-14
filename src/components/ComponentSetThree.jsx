import {Button, Select, Menu, MenuItem, InputLabel, Input, OutlinedInput, RadioGroup, Radio, FormLabel, FormHelperText, FormControl, FormControlLabel } from "@mui/material";
import * as React from 'react';

const ComponentSetThree = () => {

    const [age, setAge] = React.useState(20);

    const handleChange = (e) => {
        setAge(e.target.value);
    }

    return (
        <>
            <div className="area1">
                <FormControl margin="normal">
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
            </div>
        </>
    )
}

export default ComponentSetThree;