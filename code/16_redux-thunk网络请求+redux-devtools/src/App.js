import React, {PureComponent} from "react";
import Home from "./pages/home.js";
import About from "./pages/about.js";
class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}

export default App
