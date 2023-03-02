import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.css";
import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Test />
        <BrowserRouter>
            <Routes>
                <Route />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
