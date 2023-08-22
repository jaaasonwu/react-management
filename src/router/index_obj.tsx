// import React, { lazy } from "react";
import Home from "@/views/Home.tsx";
import {Navigate} from "react-router-dom";
import About from "@/views/About.tsx";

// const About = lazy(() => import("../views/About"))


// const lazyLoadingComponent = (comp: JSX.Element) => (
//     <React.Suspense fallback={<div>Loading...</div>}>
//         {comp}
//     </React.Suspense>
// )
const routes = [
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "home",
        element: <Home />
    },
    {
        path: "about",
        // React.Suspense is needed for lazy loading, showing prompt for loading.
        element: <About/>
    }
]

export default routes