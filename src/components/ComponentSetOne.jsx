import {Button, Checkbox, Select, TextField, Accordion, Alert, AlertTitle} from "@mui/material";
import { Menu, MenuItem, Fade, Pagination, Box, Tabs, Tab, TabPanel } from '@mui/material';
import * as React from 'react';

const ComponentSetOne = () => {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <div className="area1">
                <Alert severity="error" variant="outlined" onClose={() => {}}>
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — check it out!
                </Alert>
                <br/>
                <Alert action={
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }
                >
                    This is a success alert — check it out!
                </Alert>
                <br/>            
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — check it out!
                </Alert>
                <br/>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info alert — check it out!
                </Alert>
                <br/>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — check it out!
                </Alert>
                <br/>
            </div>
            <div className="area1">
                <Pagination count={10} color="primary" />
                <Pagination count={10} variant="outlined" shape="rounded" />
                <Pagination count={10} showFirstButton showLastButton />
            </div>

            <div className="area1">
                <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Active" />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                </Tabs>
            </div>            
        </>
    )
}

export default ComponentSetOne;