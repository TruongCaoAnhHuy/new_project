import { Fragment } from "react";

import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Register from "~/pages/Register";

const publicRoutes = [
    {path: '/', Component: Home},
    {path: '/login', Component: Login, Layout: Fragment},
    {path: '/register', Component: Register, Layout: Fragment},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
