import "../styles/index.scss";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/swords.svg";
import Recipes from "./Recipes";
import Buttons from "./Buttons";
import ComponentSetOne from "./ComponentSetOne";
import ComponentSetTwo from "./ComponentSetTwo";
import ComponentSetThree from "./ComponentSetThree";
import { AppBar, Toolbar, IconButton, Typography, MenuClassKeyItem } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const App = () => {
    return (
        <>
            <section className="hero"></section>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            <br/>
            <main className="main">
                {/* <section>
                    <h1>Oh Hai, React</h1>
                </section>
                <div><img src={sword} alt="sword" width="100" /><img src={swordSvg} alt="sword" width="100" /></div>
                <br/><br/> */}
                <Buttons /><br/>
                <ComponentSetOne /><br/>
                <ComponentSetTwo /><br/>
                <ComponentSetThree /><br/>
                <Recipes />
            </main>
        </>
    )
}

export default App