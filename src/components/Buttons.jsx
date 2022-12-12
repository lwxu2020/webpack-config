import { Button } from "@mui/material";

function Buttons() {
    return (
        <div>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            &nbsp;
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            &nbsp;
            <Button variant="outlined" color="primary">
                Outlined
            </Button>
            &nbsp;
            <Button variant="contained" color="primary" size="small">
                Small
            </Button>
            &nbsp;
            <Button variant="contained" color="primary" href="http://www.google.com">
                Google
            </Button>
            &nbsp;
            <Button variant="contained" color="primary" onClick={() => alert('Clicked Me!')}>
                Alert
            </Button>
        </div>
    );
}

export default Buttons