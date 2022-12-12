import {Button, Checkbox, Select, TextField, Accordion, Alert, AlertTitle} from "@mui/material";

const ComponentSetOne = () => {
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
                
            </div>
        </>
    )
}

export default ComponentSetOne;