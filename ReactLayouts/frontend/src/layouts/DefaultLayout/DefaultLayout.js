import Layout from "./Layout";
import Navbar from "./Navbar";
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import DefaultRoutes from "../../routers/DefaultRoutes";

const DefaultLayout = () => {
    return (
        <>
        <Navbar/>
        <Layout>
            <Switch>
                {DefaultRoutes.map((element, index) => {
                    return <Route key={index} path={element.path} exact={element.exact} name={element.name} 
                    render={(props) => <element.component {...props}/>}/>
                })}
            </Switch>            
        </Layout>
        </>
    );
}

export default DefaultLayout;