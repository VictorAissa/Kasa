import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
// import Router from "./components/Router/Router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import Property from "./pages/Property/Property";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import "./utils/style/normalizer.scss";
import "./utils/style/globalStyle.scss";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "/property",
//         element: <Property />,
//     },
//     {
//         path: "/about",
//         element: <About />,
//     },
//     {
//         path: "*",
//         element: <Error />,
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="property/:id" element={<Property />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
