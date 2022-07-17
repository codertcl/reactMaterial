import React, {memo} from "react";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import TLAppHeader from '@/components/app-header'
import TLAppFooter from '@/components/app-footer'
import TLAppPlayerBar from '@/pages/discover/c-pages/player/app-player-bar'
import {renderRoutes} from "react-router-config";
import routes from "./router";
import store from "./store";

export default memo(function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <TLAppHeader/>
                    {renderRoutes(routes)}
                    <TLAppPlayerBar/>
                    <TLAppFooter/>
                </div>
            </BrowserRouter>
        </Provider>
    )
})
