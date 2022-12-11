import "../styles/index.scss";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/swords.svg";
import Recipes from "./Recipes";

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
                <img src={sword} alt="sword" width="250" />
                <img src={swordSvg} alt="sword" width="250" />
            </main>
            <Recipes />
        </>
    )
}

export default App