import { Fragment } from "react";

import Home from "~/pages/Home";
import Login from "~/pages/Login";

const publicRoutes = [
    {path: '/', Component: Home},
    {path: '/login', Component: Login, Layout: Fragment},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
