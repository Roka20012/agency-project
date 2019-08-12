import React from "react";
import { Main, Advantages, About } from "./components/Home";
import Gallery from "./components/Gallery";
import "./css/reset.css";
import "./css/responsive.css";

class App extends React.Component {
    render() {
        return (
            <>
                <Main />
                <About />
                <Advantages />
                <Gallery />
            </>
        );
    }
}

export default App;
