import { render } from "react-dom";
import App from "./components/App";
import "./styles/index.scss";
import bookmark from './assets/bookmark.svg';

render(<App />, document.getElementById('root'));

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
};

const bmImg = document.getElementById('bkmark')
bmImg.src = bookmark

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
console.log("NODE_ENV: " + process.env.NODE_ENV);