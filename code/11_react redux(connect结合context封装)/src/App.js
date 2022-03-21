import React, {PureComponent} from "react";

import Home from "./pages/home.js";
import About from "./pages/about.js";
class App extends PureComponent {
    render() {
        return (
            <div>
                <About/>
                <hr/>
                <Home/>
            </div>
        )
    }
}

export default App
