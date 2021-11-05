import React from "react";

const AdminHome = React.lazy(() => import("../components/admin/Main/index"));
const AdminProduct = React.lazy(() => import("../components/user/Product/index"));

const AdminRoutes = [
    {path: '/admin', name:"Головна сторінка", exact:true, component:AdminHome},
    {path: '/admin/product', name:"Продукти", exact:true, component:AdminProduct}
];

export default AdminRoutes;