import React from "react";

const Home = React.lazy(() => import("../components/user/Main/index"));
const Product = React.lazy(() => import("../components/user/Product/index"));
const Register = React.lazy(() => import("../components/user/Register/index"));

const DefaultRoutes = [
    {path: '/', name: 'Головна сторінка', exact: true, component: Home},
    {path: '/product', name: 'Продукти', exact: true, component: Product},
    {path: '/register', name: 'Реєстрація', exact: true, component: Register}
];

export default DefaultRoutes;