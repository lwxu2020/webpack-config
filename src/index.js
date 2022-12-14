import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.scss";
import bookmark from './assets/bookmark.svg';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

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

// const bmImg = document.getElementById('bkmark')
// bmImg.src = bookmark

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
console.log("NODE_ENV: " + process.env.NODE_ENV);