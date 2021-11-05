import Layout from './Layout';
import Navbar from './Navbar/index';
import AdminRoutes from '../../routers/AdminRoutes';
import { Switch, Route } from 'react-router-dom';

const AdminLayout = () => 
{
    return (<>
        <Navbar/>
        <Layout>
            <Switch>
                {AdminRoutes.map((route, index) => {
                    return <Route key={index} path={route.path} exact={route.exact} name={route.name} render={(props) => {
                       return <route.component {...props} />
                    } } />
                })}
            </Switch>
        </Layout>
    </>)
}

export default AdminLayout;