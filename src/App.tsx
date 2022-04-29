import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import { routes } from "@configs";
import { ComponentAppRoute } from "./Components/AppRoutes";
import { IRoute } from "@interfaces";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {routes.map((e: IRoute, key) => (
                        <ComponentAppRoute key={key} {...e} />
                    ))}
                </Switch>
                {/* <ComponentToast /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
