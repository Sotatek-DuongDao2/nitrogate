import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AppLayout } from "@layouts";
import { Home, Login } from "@pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="./login" element={<Login />} />
                    <Route path="*" element={<>Not Found</>} />
                </Route>
            </Routes>
            {/* <ComponentToast /> */}
        </div>
    );
}

export default App;
