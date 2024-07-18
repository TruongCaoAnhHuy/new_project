import Home from "~/pages/Home";
import Flowing from "~/pages/Flowing";
import { Fragment } from "react";

const publicRoutes = [
    {path: '/', Component: Home},
    {path: '/flowing', Component: Flowing, Layout: Fragment},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
